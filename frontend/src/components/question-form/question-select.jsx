import { Lebel } from "../ui/lebel"
import { Select } from "../ui/select"
const QuestionSelect = ({ step, typeOption, typeChange }) => {   
    
    return (
        <div className="w-full">
            <Lebel>{step === 1 ? "選擇您想發問的類別？":"請選擇問題細節"}</Lebel>
            <Select typeChange={typeChange} className="py-1 rounded-sm w-full">
                {typeOption.map((item) =>
                    <option key={item.id} value={item.id}>{item.title}</option>
                )}
            </Select>
        </div>
    )

}

export { QuestionSelect }