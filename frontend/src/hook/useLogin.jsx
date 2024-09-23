import { useState } from "react"


const useLogin = () => {
    const [login, setLogin] = useState(() => {
        const storedToken = localStorage.getItem('token');
        return !!storedToken;
    })// 如果有 token，則視為已登入)
    
    function Login(token, account, nickName,record) {
        localStorage.setItem("token", token);
        localStorage.setItem("account", account); 
        localStorage.setItem("nickName", nickName);
        localStorage.setItem("CardHistory", JSON.stringify(record));
        setLogin(true)

    }
    function Logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("account");
        localStorage.removeItem("nickName");
        localStorage.removeItem("CardHistory");
        setLogin(false)
       
    }
    return { login, Login, Logout }

}

export { useLogin }