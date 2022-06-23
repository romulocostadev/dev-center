import { Skeleton } from 'antd';
import { SkeletonCardContainer, SkeletonCard } from './styles';

const SolutionCardSkeleton = ({ isLoading }: any) => {
  return (
    <>
      {isLoading && (
        <SkeletonCardContainer>
          {[1, 2, 3].map(() => (
            <SkeletonCard>
              <Skeleton active paragraph={{ rows: 4 }} />
            </SkeletonCard>
          ))}
        </SkeletonCardContainer>
      )}
    </>
  );
};

export default SolutionCardSkeleton;
