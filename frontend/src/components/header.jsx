import { CardHistoryButton } from "./card-history-button"
import { CardDescriptionButtton } from "./card-description-button"
import { CardShuffleButton } from "./card-suffle-button"
import { CardSave } from "./card-save"
const Header = ({
    openHistory,
    CardHistoryHandler,
    historyOption,
    cardList,
    CardShuffleHandler,
    stephandler,
    CardSaveHandler }) => {

    return <div className="fixed w-full z-10">
        <div className="relative">
        <div className="flex absolute left-2 top-2">
            <CardHistoryButton historyOption={historyOption} CardHistoryHandler={CardHistoryHandler} />
            <CardDescriptionButtton stephandler={stephandler} />
        </div>
        {
        cardList.length === 7 &&
            <div className="flex absolute right-2 top-2">
                {!openHistory && <CardSave cardList={cardList} CardSaveHandler={CardSaveHandler} />}
                <CardShuffleButton CardShuffleHandler={CardShuffleHandler} />               
            </div>
        }

        </div>

    </div>


}

export { Header }