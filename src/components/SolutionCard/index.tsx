import { t } from 'i18next';
import getFormatedDateTime from '../../utils/dateUtils';
import {
  SolutionCard,
  ProjectLogo,
  CardTextContainer,
  CardTitle,
  CardData,
} from './styles';

const Card = ({ solution }: any) => {
  return (
    <SolutionCard>
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
