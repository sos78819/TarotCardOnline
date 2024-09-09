
import { useClickHandler } from "./hook/useClickHandler";
import { QuestionType } from './components/question-form/question-type-form';
import { CardDrawPage } from './components/card-draw-page';
import { CardPageContainer } from "./components/card-page-container";
import { Header } from "./components/header";
import './index.css';
function App() {
  const {
    CardDrawHandler,
    CardShuffleHandler,
    typehandler,
    stephandler,
    CardHistoryHandler,
    CardSaveHandler,
    step, Option, cardList, Cards, openHistory, historyOption

  } = useClickHandler()

  return (
    <CardPageContainer>
      <Header cardList={cardList} 
      historyOption={historyOption} 
      openHistory={openHistory}
      CardSaveHandler={CardSaveHandler}
      CardHistoryHandler={CardHistoryHandler}
      CardShuffleHandler={CardShuffleHandler}
      stephandler={stephandler}    
      />
     
      {parseInt(step) < 3 ?
        <QuestionType CardHistoryHandler={CardHistoryHandler} step={step}
          typeChange={typehandler} typeOption={Option} stephandler={stephandler}
          historyOption={historyOption}
        />

        :
        <CardDrawPage step={step} cardList={cardList} Cards={Cards} openHistory={openHistory}
          stephandler={stephandler}          
          CardDrawHandler={CardDrawHandler}         
          CardHistoryHandler={CardHistoryHandler}
          historyOption={historyOption}
        />
      }
    </CardPageContainer>
  )
}

export default App
