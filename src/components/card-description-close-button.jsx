import { Button } from "./ui/button"
const CardDescriptionCloseButtton = ({stephandler}) =>{
    return <Button onClick={stephandler} className="rounded-full h-10 w-10 bg-slate-400 opacity-95 hover:opacity-70 fixed right-6 top-3 z-50">X</Button >
}

export { CardDescriptionCloseButtton}