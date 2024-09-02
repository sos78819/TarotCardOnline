import { useMemo, useState } from "react";

const useCardShuffle = () => {

  const [Shuffle, setShuffle] = useState(1)   
  const tarotCards = useMemo(() => {
    if (Shuffle) {      
      var tarot = new Array(22);
      for (var i = 1; i <= tarot.length; i++) {
        tarot[i - 1] = i;
      }

      //洗牌
      var tmp = "";
      var t = 0;
      for (var j = 0; j < tarot.length; j++) {
        t = Math.floor((Math.random() * 21) + 1);
        tmp = tarot[j];
        tarot[j] = tarot[t];
        tarot[t] = tmp;
      }
      
      const tarotArray = tarot.map(number => ({
        cardId: number,
        hidden: false
      }));
      
      return tarotArray
    }
   
  }, [Shuffle])
 
  return { tarotCards, setShuffle}
}


export { useCardShuffle };

