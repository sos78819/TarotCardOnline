import { NavLink } from "react-router-dom"
const MemberFormTab = () => {
    return (
        <nav className="pb-2 border-b-2 border-white">
            <NavLink to="/member/login" className='font-bold text-xl p-1'><button>登入</button></NavLink>
            <NavLink to="/member/register" className='font-bold text-xl p-1'><button>註冊</button></NavLink>
        </nav>
    )
}

export { MemberFormTab }