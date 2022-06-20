import React from 'react';



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







function handleCreateData() {
}



return (
        <Home1    >
  <Title3    >
    <WelcometoBeatrix >
      Welcome to Beatrix!
    </WelcometoBeatrix>
    <Seehowtogetstarted >
      See how to get started...
    </Seehowtogetstarted>
  </Title3>
  <Cards    >
    <LessonsCard    >
      <CardVector    >
        <VectorComponentundrawyoutube    >
        </VectorComponentundrawyoutube>
      </CardVector>
      <Lessons >
        Lessons
      </Lessons>
      <LearntousetheBeatrix >
        Learn to use the Beatrix.
      </LearntousetheBeatrix>
      <ButtonsButton3  
        type='primary'
        >
          Start learning
      </ButtonsButton3>
    </LessonsCard>
    <FigmaCard    >
      <CardVector1    >
        <VectorComponentundrawprototyp    >
        </VectorComponentundrawprototyp>
      </CardVector1>
      <ConnectFigma >
        Connect Figma
      </ConnectFigma>
      <TextComponentconnect >
        Connect to your Figma account.
      </TextComponentconnect>
      <ButtonsButton4  
        type='primary'
        >
          Connect to Figma
      </ButtonsButton4>
    </FigmaCard>
    <InputCard    >
      <CardVector2    >
        <Undrawdatainputfxv21    >
        </Undrawdatainputfxv21>
      </CardVector2>
      <Datainput >
        Data input
      </Datainput>
      <TextComponentstart >
        Start a solution by entering data.
      </TextComponentstart>
      <CreateData  
        type='primary'
        >
          Get started
      </CreateData>
    </InputCard>
  </Cards>
</Home1>

    )

}

export default HomePage
