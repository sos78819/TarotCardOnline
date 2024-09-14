import { Lebel } from "../ui/lebel"
import { Input } from "../ui/input"

const MemberLogin = () => {
    return (
        <div>

            <form action="">
                <div className="mt-3">
                    <Lebel>帳號</Lebel>
                    <Input placeholder="輸入帳號" type="text" />
                </div>
                <div className="mt-3">
                    <Lebel>密碼</Lebel>
                    <Input placeholder="輸入密碼" type="password" />
                </div>
            </form>

        </div>
    )


}

export { MemberLogin }