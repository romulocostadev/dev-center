import React from 'react';

import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Home1,
  Title3,
  WelcometoBeatrix,
  Seehowtogetstarted,
  Cards,
  LessonsCard,
  CardVector,
  VectorComponentundrawyoutube,
  Lessons,
  LearntousetheBeatrix,
  ButtonsButton3,
  FigmaCard,
  CardVector1,
  VectorComponentundrawprototyp,
  ConnectFigma,
  TextComponentconnect,
  ButtonsButton4,
  InputCard,
  CardVector2,
  Undrawdatainputfxv21,
  Datainput,
  TextComponentstart,
  CreateData,
} from './styles';

const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pathParts = pathname.split('/');

  const handleNavigateData = () => {
    navigate(`/${pathParts[1]}/${pathParts[2]}/data`);
  };

  return (
    <Home1>
      <Title3>
        <WelcometoBeatrix>{t('welcome-beatrix')}!</WelcometoBeatrix>
        <Seehowtogetstarted>{t('how-to-get-started')}</Seehowtogetstarted>
      </Title3>
      <Cards>
        <LessonsCard>
          <CardVector>
            <VectorComponentundrawyoutube />
          </CardVector>
          <Lessons>{t('title-lessons')}</Lessons>
          <LearntousetheBeatrix>{t('learn-use-beatrix')}</LearntousetheBeatrix>
          <ButtonsButton3 type="primary">{t('start-learning')}</ButtonsButton3>
        </LessonsCard>
        <FigmaCard>
          <CardVector1>
            <VectorComponentundrawprototyp />
          </CardVector1>
          <ConnectFigma>{t('connect-figma-title')}</ConnectFigma>
          <TextComponentconnect>
            {t('connect-figma-subtitle')}
          </TextComponentconnect>
          <ButtonsButton4 type="primary">
            {t('connect-to-figma')}
          </ButtonsButton4>
        </FigmaCard>
        <InputCard>
          <CardVector2>
            <Undrawdatainputfxv21 />
          </CardVector2>
          <Datainput>{t('data-input-title')}</Datainput>
          <TextComponentstart>{t('data-input-subtitle')}</TextComponentstart>
          <CreateData type="primary" onClick={handleNavigateData}>
            {t('get-started')}
          </CreateData>
        </InputCard>
      </Cards>
    </Home1>
  );
};

export default HomePage;
