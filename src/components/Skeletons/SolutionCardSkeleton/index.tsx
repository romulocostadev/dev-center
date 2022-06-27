import { SkeletonCardContainer, SkeletonCard } from './styles';

const SolutionCardSkeleton = ({ isLoading }: any) => {
  return (
    isLoading && (
      <>
        <SkeletonCardContainer>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => (
            <SkeletonCard />
          ))}
        </SkeletonCardContainer>
      </>
    )
  );
};

export default SolutionCardSkeleton;
