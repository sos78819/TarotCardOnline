import { Button } from "../ui/button"
import { MemberTool } from "./member-tool"
const MemberButton =({Logout,historyOption,CardHistoryHandler})=>{
    return <div className="group">
    <Button className=" bg-white font-bold rounded-md p-1 mr-1 border-2 border-cyan-600">
        會員專區▾
    </Button>
    <MemberTool historyOption={historyOption} CardHistoryHandler={CardHistoryHandler} Logout={Logout}/>
</div>
}
export{MemberButton}