import { QuestionForm } from "./question-form";
import { QuestionSelect } from "./question-select";
import { Button } from "../ui/button";
import { Arrow } from "../ui/arrow";
import { Title } from "./title";

// eslint-disable-next-line react/prop-types
const QuestionType = ({ step, typeChange, typeOption, stephandler }) => {

    return (<div>
        <div className="w-full h-[100vh] flex justify-center items-center group font-bold">
            <div className="w-[60%] md:w-[40%] relative">
                <Title/>
                <QuestionForm>
                    <QuestionSelect step={step} typeChange={typeChange} typeOption={typeOption} />
                </QuestionForm>
                <Button onClick={stephandler} className="absolute right-[-4%] bottom-[-3%] rounded-full bg-emerald-200 p-2 hover:bg-green-100 font-bold drop-shadow-lg"><Arrow /></Button>
            </div>
        </div>
    </div>

    )

}

export { QuestionType }