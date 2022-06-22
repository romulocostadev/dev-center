import { useGetSolutionQuery } from '../../services/solution';
import SolutionCard from '../SolutionCard';

import { MySolutions } from './styles';

const Page = () => {
  const { data: solutions } = useGetSolutionQuery();
  return (
    <MySolutions>
      {solutions?.map(solution => {
        return <SolutionCard solution={solution} />;
      })}
    </MySolutions>
  );
};

export default Page;
