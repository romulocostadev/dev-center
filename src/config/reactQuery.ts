import {
  QueryFunctionContext,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { api } from './api';

export interface GetInfinitePagesInterface<T> {
  nextId?: number;
  previousId?: number;
  data: T;
  count: number;
}

type QueryKeyT = [string, Record<string, unknown> | undefined];

export const fetcher = <T>({
  queryKey,
  pageParam,
}: QueryFunctionContext<QueryKeyT>): Promise<T> => {
  const [url, params] = queryKey;
  return api
    .get<T>(url, { params: { ...params, pageParam } })
    .then(res => res.data);
};

export const useLoadMore = <T>(
  url: string | null,
  params?: Record<string, unknown>,
) => {
  const context = useInfiniteQuery<
    GetInfinitePagesInterface<T>,
    Error,
    GetInfinitePagesInterface<T>,
    QueryKeyT
  >(
    [url!, params],
    ({ queryKey, pageParam = 1 }: QueryFunctionContext<QueryKeyT>) =>
      fetcher({ queryKey, pageParam, meta: { persistent: true } }),
    {
      getPreviousPageParam: firstPage => firstPage.previousId ?? false,
      getNextPageParam: lastPage => {
        return lastPage.nextId ?? false;
      },
    },
  );

  return context;
};

export const usePrefetch = <T>(
  url: string | null,
  params?: Record<string, unknown>,
) => {
  const queryClient = useQueryClient();

  return () => {
    if (!url) {
      return;
    }

    queryClient.prefetchQuery<T, Error, T, QueryKeyT>(
      [url!, params],
      ({ queryKey }) => fetcher({ queryKey, meta: { persistent: true } }),
    );
  };
};

export const useFetch = <T>(
  url: string | null,
  params?: Record<string, unknown>,
  config?: UseQueryOptions<T, Error, T, QueryKeyT>,
) => {
  const context = useQuery<T, Error, T, QueryKeyT>(
    [url!, params],
    ({ queryKey }) => fetcher({ queryKey, meta: { persistent: true } }),
    {
      enabled: !!url,
      ...config,
    },
  );

  return context;
};

const useGenericMutation = <T, S>(
  func: (data: T | S) => Promise<AxiosResponse<S>>,
  url: string,
  params?: Record<string, unknown>,
  updater?: ((oldData: T, newData: S) => T) | undefined,
) => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError, T | S>(func, {
    onMutate: async data => {
      await queryClient.cancelQueries([url!, params]);

      const previousData = queryClient.getQueryData([url!, params]);

      queryClient.setQueryData<T>([url!, params], oldData => {
        return updater ? updater(oldData!, data as S) : (data as T);
      });

      return previousData;
    },
    onError: (err, _, context) => {
      queryClient.setQueryData([url!, params], context);
    },
    onSettled: () => {
      queryClient.invalidateQueries([url!, params]);
    },
  });
};

export const useDelete = <T>(
  url: string,
  params?: Record<string, unknown>,
  updater?: (oldData: T, id: string | number) => T,
) => {
  return useGenericMutation<T, string | number>(
    id => api.delete(`${url}/${id}`),
    url,
    params,
    updater,
  );
};

export const usePost = <T, S>(
  url: string,
  params?: Record<string, unknown>,
  updater?: (oldData: T, newData: S) => T,
) => {
  return useGenericMutation<T, S>(
    data => api.post<S>(url, data),
    url,
    params,
    updater,
  );
};

export const useUpdate = <T, S>(
  url: string,
  params?: Record<string, unknown>,
  updater?: (oldData: T, newData: S) => T,
) => {
  return useGenericMutation<T, S>(
    data => api.patch<S>(url, data),
    url,
    params,
    updater,
  );
};
