import { CardImg } from "./card-img"
import { CardSingle } from "./card-single"
const CardDraw = ({ CardDrawHandler, Cards }) => {



  return (
    <>
      <div className="w-full flex flex-wrap justify-center mt-3 md:mt-0 py-3 bg-gradient-to-b from-indigo-50 to-transparent opacity-85">
        {Cards.map((card, idx) => (
          idx === 0 ?
            !card.hidden ? <CardSingle className="lg:w-[100px] md:w-[89px] sm:w-[58px] xs:w-[50px]
           lg:h-[calc(100px*1.75)] md:h-[calc(89px*1.75)] sm:h-[calc(58px*1.75)] xs:h-[calc(50px*1.75)]
          cursor-pointer hover:mt-[-10px]"  onClick={() => CardDrawHandler(card.cardId)} key={card.cardId}><CardImg number="TarDefault"></CardImg></CardSingle> :
              !card.style
                ? <CardSingle className="lg:w-[100px] md:w-[89px] sm:w-[58px] xs:w-[50px] cursor-pointer
           lg:h-[calc(100px*1.75)] md:h-[calc(89px*1.75)] sm:h-[calc(58px*1.75)] xs:h-[calc(50px*1.75)]"
                  key={card.cardId}><CardImg className="opacity-0" number="TarDefault"></CardImg></CardSingle> :
                <CardSingle className="lg:w-[100px] md:w-[89px] sm:w-[58px] xs:w-[50px] cursor-pointer
           lg:h-[calc(100px*1.75)] md:h-[calc(89px*1.75)] sm:h-[calc(58px*1.75)] xs:h-[calc(50px*1.75)]"
                  key={card.cardId}><CardImg className="up-animation" number="TarDefault"></CardImg></CardSingle> :
            !card.hidden ? <CardSingle className="lg:w-[100px] md:w-[89px] sm:w-[58px] xs:w-[50px] cursor-pointer hover:mt-[-10px] ml-[-20px]
          lg:h-[calc(100px*1.75)] md:h-[calc(89px*1.75)] sm:h-[calc(58px*1.75)] xs:h-[calc(50px*1.75)]"
              onClick={() => CardDrawHandler(card.cardId)} key={card.cardId}><CardImg number="TarDefault"></CardImg></CardSingle> :
              !card.style
                ? <CardSingle className="lg:w-[100px] md:w-[89px] sm:w-[58px] xs:w-[50px] 
           lg:h-[calc(100px*1.75)] md:h-[calc(89px*1.75)] sm:h-[calc(58px*1.75)] xs:h-[calc(50px*1.75)]
          cursor-pointer ml-[-20px]" key={card.cardId}><CardImg className="opacity-0" number="TarDefault"></CardImg></CardSingle> :
                <CardSingle className="lg:w-[100px] md:w-[89px] sm:w-[58px] xs:w-[50px]  
          lg:h-[calc(100px*1.75)] md:h-[calc(89px*1.75)] sm:h-[calc(58px*1.75)] xs:h-[calc(50px*1.75)]  cursor-pointer ml-[-20px]"  key={card.cardId}><CardImg className="up-animation" number="TarDefault"></CardImg></CardSingle>

        ))}
      </div></>

  )

}

export { CardDraw }

