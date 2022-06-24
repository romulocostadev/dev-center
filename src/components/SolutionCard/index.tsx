import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';
import { SolutionsResponse } from '../../services/solution';
import getFormatedDateTime from '../../utils/dateUtils';
import {
  SolutionCard,
  ProjectLogo,
  CardTextContainer,
  CardTitle,
  CardData,
} from './styles';

const Card = ({ solution }: any) => {
  let navigate = useNavigate();
  const onClick = () => {
    navigate(`/solution/${solution.Id}/home`);
  };
  return (
    <SolutionCard onClick={onClick}>
      <ProjectLogo />
      <CardTextContainer>
        <CardTitle>{solution.Name}</CardTitle>
        <CardData>
          {getFormatedDateTime(solution.CreatedUtc, t('date-time-format'))}
        </CardData>
      </CardTextContainer>
    </SolutionCard>
  );
};

export default Card;
