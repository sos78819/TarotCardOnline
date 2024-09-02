import { CardDraw } from "./card-draw";
import { CardSuffleAnimation } from "./card-suffle-animate";
import { CardSpread } from "./card-spread";
import { CardDrawTips } from "./card-draw-tips";
import { CardDescriptionPage } from "./card-description-page";

const CardDrawPage = ({
    step,
    cardList,
    CardShuffleHandler,
    Cards,
    openHistory,
    CardDrawHandler,
    stephandler,
   
}) => {
    const finalQuestion = localStorage.getItem("QuestionType");
    console.log('finalQuestion', finalQuestion)
    return (

        <>
            {step === 4 && <CardDescriptionPage stephandler={stephandler} cardList={cardList} />}
         
            <CardSpread cardList={cardList} />

            {!openHistory && <>
                <CardSuffleAnimation />
                <CardDrawTips CardShuffleHandler={CardShuffleHandler} />
                <CardDraw Cards={Cards} CardDrawHandler={CardDrawHandler} />
            </>
            }
        </>)
}

export { CardDrawPage }