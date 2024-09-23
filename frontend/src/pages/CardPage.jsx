import { useClickHandler } from "../hook/useClickHandler";
import { QuestionType } from '../components/question-form/question-type-form';
import { CardDrawPage } from '../components/card-draw-page';
import { CardPageContainer } from "../components/card-page-container";
import { Header } from "../components/header";
import { useState,useEffect } from "react";
import {useCardHistory} from "../js/useCardHistory"
const CardPage = () => {
    const {
        CardDrawHandler,
        CardShuffleHandler,
        typehandler,
        stephandler,
        CardHistoryHandler,
        CardSaveHandler,
        step, Option, cardList, Cards, openHistory,historyOption

    } = useClickHandler()


    return (
        <CardPageContainer>
            <Header cardList={cardList}
               
                openHistory={openHistory}
                historyOption={historyOption}
                CardSaveHandler={CardSaveHandler}
                CardHistoryHandler={CardHistoryHandler}
                CardShuffleHandler={CardShuffleHandler}
                stephandler={stephandler}
            />

            {parseInt(step) < 3 ?
                <QuestionType CardHistoryHandler={CardHistoryHandler} step={step}
                    typeChange={typehandler} typeOption={Option} stephandler={stephandler}

                />

                :
                <CardDrawPage step={step} cardList={cardList} Cards={Cards} openHistory={openHistory}
                    stephandler={stephandler}
                    CardDrawHandler={CardDrawHandler}
                    CardHistoryHandler={CardHistoryHandler}

                />
            }
        </CardPageContainer>
    )
}

export { CardPage }