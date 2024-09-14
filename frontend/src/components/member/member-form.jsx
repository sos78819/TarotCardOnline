import { MemberFormTab } from "./member-form-tab"

const MemberForm = ({children}) => {
    return (
        <div className='flex w-[94%]   md:w-1/2 sm:w-2/3 items-center justify-center'>
            <div className="rounded-md w-full p-5 h-80  shadow-md">
            <MemberFormTab/>
            {children}
            </div>

        </div>
    )
}

export { MemberForm }