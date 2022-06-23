import { useTranslation } from 'react-i18next';
import { Skeleton } from 'antd';
import { useGetSolutionQuery } from '../../services/solution';
import SolutionCard from '../SolutionCard';

import {
  MySolutions,
  TitleContainer,
  Solutions,
  NewSolutionButton,
  Sorter,
  Sortby,
  Name,
  Lastmodified,
} from './styles';

import ModalNewSolution from '../ModalNewSolution';
import { useAppDispatch } from '../../store/reduxHooks';
import { setModalData } from '../../store/modal/modalSlice';
import SolutionCardSkeleton from '../Skeletons/SolutionCardSkeleton';

const Page = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const showModalNewSolution = () => {
    dispatch(
      setModalData({
        visible: true,
        title: t('modal-new-entity-title'),
        content: <ModalNewSolution />,
      }),
    );
  };

  const { data: solutions, isLoading } = useGetSolutionQuery();
  return (
    <>
      <TitleContainer>
        <Solutions>Solutions</Solutions>
        <NewSolutionButton type="primary" onClick={showModalNewSolution}>
          New solution
        </NewSolutionButton>
      </TitleContainer>
      <Sorter>
        <Sortby>Sort by</Sortby>
        <Name>name</Name>
        <Lastmodified>last modified</Lastmodified>
      </Sorter>
      <SolutionCardSkeleton isLoading={isLoading} />
      <MySolutions>
        {solutions?.map(solution => {
          return <SolutionCard solution={solution} />;
        })}
      </MySolutions>
    </>
  );
};

export default Page;
