import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useGetSolutionsQuery } from '../../services/solution';
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
import { useAppDispatch, useAppSelector } from '../../store/reduxHooks';
import { setModalData } from '../../store/modal/modalSlice';
import SolutionCardSkeleton from '../Skeletons/SolutionCardSkeleton';
import { setSolutions } from '../../store/solution/solutionSlice';

const Page = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const solutions = useAppSelector(state => state.solution.solutions);
  const [order, setOrder] = useState<string>('date');
  const handleShowModalNewSolution = () => {
    dispatch(
      setModalData({
        visible: true,
        title: t('modal-new-entity-title'),
        content: <ModalNewSolution />,
      }),
    );
  };

  const handleOrderByName = () => {
    setOrder('name');
    dispatch(
      setSolutions({
        solutions: solutions
          ?.slice()
          .sort((a, b) => a.Name.localeCompare(b.Name)),
      }),
    );
  };

  const handleOrderByData = () => {
    setOrder('date');
    dispatch(
      setSolutions({
        solutions: solutions?.slice().sort((a, b) => {
          const dateA = new Date(a.ModifiedUtc).getTime();
          const dateB = new Date(b.ModifiedUtc).getTime();
          return dateA - dateB;
        }),
      }),
    );
  };

  const { isLoading } = useGetSolutionsQuery();
  return (
    <>
      <TitleContainer>
        <Solutions>{t('solutions-title')}</Solutions>
        <NewSolutionButton type="primary" onClick={handleShowModalNewSolution}>
          {t('new-solution-btn')}
        </NewSolutionButton>
      </TitleContainer>
      <Sorter>
        <Sortby>{t('sort-by')}</Sortby>
        <Name onClick={handleOrderByName} active={order === 'name'}>
          {t('sort-by-name')}
        </Name>
        <Lastmodified onClick={handleOrderByData} active={order === 'date'}>
          {t('sort-by-last-modified')}
        </Lastmodified>
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
