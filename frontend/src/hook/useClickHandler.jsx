import { useState} from "react";
import { useCardShuffle } from "./useCardShuffle";
import { defaultOption, fortuneOption, loveOption, careerOption, QuestionTypeName } from "../js/questionOption";
import { useCardHistory } from "../js/useCardHistory";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./useLogin";
const useClickHandler = () => { 

  const { tarotCards, setShuffle } = useCardShuffle()
  const [cardList, setCardList] = useState([])
  const [Cards, setCards] = useState(tarotCards)
  const [openHistory, setOpenHistory] = useState(false) 
  const [step, setStep] = useState(1)
  const [QuestionType, setQuestionType] = useState('love')
  const [Option, setOption] = useState(defaultOption)
  const CardHistory = useCardHistory([]);
  const navigate = useNavigate();
  const {Logout} = useLogin()
  const [historyOption, setHistoryOption] = useState(CardHistory)


  function typehandler(type) {
    setQuestionType(type)
  }

  function stephandler() {
    if (QuestionType === "love") {
      setOption(loveOption)
      setQuestionType("love_1")
    } else if (QuestionType === "career") {
      setOption(careerOption)
      setQuestionType("career_1")
    } else if (QuestionType === "fortune") {
      setOption(fortuneOption)
      setQuestionType("fortune_1")
    }
    if (step === 1) { setStep(2) } else if (step === 2) {
      setStep(3)
      //儲存最後QuestionType
      localStorage.setItem("QuestionType", QuestionType);
    } else if (step === 3) {
      setStep(4)
    } else if (step === 4) {
      setStep(3)
    }
  }

  function CardDrawHandler(number) {
    const position = Math.random() < 0.5;
    const newCard = {
      card: number,
      position: position
    }
    const newCards = Cards.map((card) =>
      card.cardId === number ? { ...card, hidden: true, style: true } : { ...card, style: false }
    );
    if (cardList.length < 7) {
      setCardList(preList => [...preList, newCard])
      setCards(newCards)
    }
  }

  function CardShuffleHandler() {
    setCardList([])
    setShuffle((pre) => pre + 1)
    setCards(tarotCards)
    setStep(1)
    setQuestionType("love")
    setOption(defaultOption)
    setOpenHistory(false)
  }

  function CardSaveHandler(cardList) {
    const account = localStorage.getItem('account');
    
    const data = {
      account: account,
      historyList:cardList,
      type:QuestionType
    }
    var url = 'http://localhost:8081/saveCard';
    fetchData(url, data)
  }
  async function fetchData(url, data) {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'authorization': `bearer ${token}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log(response.status)
        //強制登出 
        Logout()
        navigate("/member/login")            
        throw new Error(errorData.message); 
        
      }

      const result = await response.json();
      localStorage.setItem("CardHistory", JSON.stringify(result));
      setHistoryOption(result)
      alert('儲存成功!')

      return result;
    } catch (error) {       
      console.error('Error:', error);
      alert('請重新登入!')  
      throw error;
    }
  }

  function CardHistoryHandler(Type) {
    if (Type !== "") {
      const cardHistory = JSON.parse(localStorage.getItem('CardHistory'));
      setOpenHistory(true)
      const cardHistoryList = cardHistory.filter((cardRecord) => cardRecord.type === Type)
      setStep(3)
      setCardList(cardHistoryList[0].historyList)
      localStorage.setItem("QuestionType", Type);
    }
  }
  return {
    CardDrawHandler, CardShuffleHandler, typehandler, stephandler, CardSaveHandler, CardHistoryHandler,
    step, Option, cardList, Cards,historyOption, openHistory
  }
}

export { useClickHandler };

