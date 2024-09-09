import { ReSet } from "./ui/reset"
const CardShuffleButton = ({ CardShuffleHandler }) => {
  return <button className="bg-white cursor-pointer rounded-md p-1 mr-1 border-2 border-cyan-600  font-bold " onClick={() => CardShuffleHandler()}>
   再抽一次
  </button>
}

export { CardShuffleButton }
