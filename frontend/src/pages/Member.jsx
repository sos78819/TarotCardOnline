import { Link, Outlet } from "react-router-dom"
import { MemberForm } from "../components/member/member-form"
const Member = () => {
    return (
        <div className="h-[100vh] flex relative  justify-center bg-gradient-to-b from-indigo-100 to-indigo-300">
            <Link className="absolute left-2 top-2  bg-white font-bold rounded-md p-1  border-2 border-cyan-600" to="/"><button>返回</button></Link>
            <MemberForm>
                <Outlet />
            </MemberForm>
        </div>

    )

}

export { Member }