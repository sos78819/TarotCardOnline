import { QuestionTypeName } from "../js/questionOption"
const CardHistoryMenu = ({ CardHistoryHandler, historyOption }) => {

    return <div className="text-sm fixed text-start rounded-md h-0 overflow-hidden group-hover:h-auto">
        <ul>
            {historyOption.length !== 0 ?
                historyOption.map((list, idx) => {
                    const QuestionName = QuestionTypeName[list.type]
                    return <li onClick={(e) => CardHistoryHandler(list.type, e)} key={`${list.type}_${idx}`} className="bg-sky-50  hover:bg-white hover:border-b-gray-500 cursor-pointer hover:border-b-2 p-2">{QuestionName}</li>
                }) : <li value="您沒有任何紀錄！" key="noneRecord" className="bg-sky-50 hover:bg-white p-2 cursor-pointer">您沒有任何紀錄!</li>

            }
        </ul>
    </div>
}


export { CardHistoryMenu }