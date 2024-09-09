import { CardContainer } from "./card-container";
import { CardImg } from "./card-img";
import { CardSingle } from "./card-single";
import { CardNote } from "./card-note";

const CardInSpread = ({ CardInfo ,position}) => {
  const class_Str = CardInfo.position ? "" : "rotate-180"
  const note_Str = CardInfo.position ? "正位" : "逆位"
  return (
    <CardContainer>
      <CardSingle className="[backface-visibility:hidden]"><CardImg number="TarDefault"></CardImg></CardSingle>
      <CardSingle className="absolute top-1 [backface-visibility:hidden] [transform:rotateY(180deg)]">
        <CardImg className={class_Str} number={CardInfo.card}></CardImg>
        <CardNote position={position} note_Str={note_Str} number={CardInfo.card}/>
      </CardSingle>
    </CardContainer>
  )
}

export { CardInSpread };
