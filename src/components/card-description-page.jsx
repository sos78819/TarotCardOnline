import { CardDescriptionCloseButtton } from "./card-description-close-button"
import { CardDescriptionList } from "./card-description-list"
const CardDescriptionPage =({stephandler,cardList}) =>{
    return <div className="bg-black  w-full h-auto absolute top-0 z-50 flex justify-center">
         <CardDescriptionCloseButtton stephandler={stephandler}/>
         <CardDescriptionList cardList={cardList}/>
    </div>

}
export {CardDescriptionPage}