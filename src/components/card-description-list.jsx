import { CardImg } from "./card-img"
import { cardDeccription } from "../js/cardDescription "
import { QuestionTypeName } from "../js/questionOption";
const CardDescriptionList = ({ cardList }) => {
    const QuestionType = localStorage.getItem("QuestionType");
    const QuestionName =  QuestionTypeName[QuestionType]

    const cardImg = cardList.map((card, idx) => {
        const cardPosition = idx == 0 ? "過去" : idx === 1 ? "現在" : idx === 2 ? "未來" : idx === 3 ? "你的作為" :
            idx == 4 ? "環境" : idx === 5 ? "內心想法" : idx === 6 && "結果"
       const singleCardDeccription = cardDeccription.filter((singleCard) => singleCard.id === card.card)
        return card.position ?
            <div key={card.card} className="flex bg-slate-200 opacity-95 rounded-md p-1 mb-2">
                <CardImg key={card.card} className="w-24 p-2 rounded-sm" number={card.card} />
                <div className="p-2">
                    <p className="text-lg font-bold">{cardPosition}</p>
                    <p className="font-bold text-gray-900 border-l-4 border-yellow-400"><span className="pl-2">{singleCardDeccription[0].name}(正位)</span> </p>
                    <p>{singleCardDeccription[0].cardDeccription[QuestionType].U}</p>
                </div>
            </div>
            :
            <div  key={card.card} className="flex bg-slate-200 opacity-80 rounded-md p-1 mb-2">
                <CardImg key={card.card} className="w-24 p-2 rounded-sm rotate-180" number={card.card} />
                <div className="p-2">
                <p className="text-lg font-bold">{cardPosition}</p>
                    <p className="font-bold text-gray-900 border-l-4 border-red-500"><span className="pl-2">{singleCardDeccription[0].name}(逆位)</span></p>
                    <p>{singleCardDeccription[0].cardDeccription[QuestionType].R}</p>
                    </div>
            </div>

    }
    )
    return <div className="w-[80%] bg-slate-400 opacity-80 h-auto mt-10 p-2">
        <h1 className="text-center text-wrap block w-full font-bold text-xl md:text-3xl py-3">{QuestionName}</h1>
        {cardImg}
    </div>

}
export { CardDescriptionList }