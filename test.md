
import { render, screen } from '@testing-library/react';
import App from './App';
import { server } from './mocks/server';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test('should ', async () => {
  render(<App />);

  expect(await screen.findByText('blablablabla'));
});




export const Teste = () => {
  // const count = useAppSelector(state => state.solution.value);
  const dispatch = useAppDispatch();

  const [login] = useLoginMutation();
  const { data, isLoading, error } = useUserQuery('romulo');
  return (
    <>
      <div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.name}</h3>
          </>
        ) : null}
      </div>
      {/* {isLoading && <span data-testid="test">Carregando</span>}
      {data && !isLoading && <span data-testid="foo">{data}</span>}
      <h1>{count}</h1>
      <button
        type="button"
        onClick={() => login({ password: '123', username: 'romulo' }).unwrap()}
      >
        Adicionar
      </button> */}
    </>
  );
};


import { render, screen } from '@testing-library/react';
import { AnyAction } from 'redux';
import { Teste } from '.';
import { server } from '../mocks/server';
import { setupApiStore } from '../test/testUtils';
import { api } from '../services/auth';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

const storeRef = setupApiStore(api, {
  actions(state: AnyAction[] = [], action: AnyAction) {
    return [...state, action];
  },
});

test('test ', async () => {
  render(<Teste />, {
    wrapper: storeRef.wrapper,
  });

  screen.getByText('Loading...');

  expect(await screen.findByText('romulo'));
});
