import { Button } from "./ui/button"
import { CardHistoryMenu } from "./card-history-menu"
const CardHistoryButton = ({ CardHistoryHandler, historyOption }) => {
    return <div className="group">
        <Button className=" bg-white font-bold rounded-md p-1 border-2 border-cyan-600">
            占卜紀錄▾
        </Button>
        <CardHistoryMenu CardHistoryHandler={CardHistoryHandler} historyOption={historyOption}/>
    </div>

}

export { CardHistoryButton }