import { Button } from "./ui/button"
const CardSave = ({ CardSaveHandler, cardList }) => {
    return <Button
        className="mr-1  bg-white font-bold rounded-md p-1 border-2 border-cyan-600"
        onClick={() => CardSaveHandler(cardList)}
    >
        儲存
    </Button>
}

export { CardSave }