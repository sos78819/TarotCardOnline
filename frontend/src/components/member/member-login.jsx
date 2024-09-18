import { Lebel } from "../ui/lebel"
import { Input } from "../ui/input"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const MemberLogin = () => {
    const schema = yup
        .object({
            
            account: yup.string().required("請填寫帳號!").matches(/^[a-zA-Z0-9]{3,15}$/,
                '帳號必須由3至15的英文或數字組成'),
            password: yup.string().required("請填寫密碼!").matches(/^[a-zA-Z0-9]{6,15}$/,
                '密碼必須由6至15的英文或數字組成')


        })
        .required()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => {
        console.log(data)
        // var url = 'http://localhost:8081/login';
        // fetchData(url, data)


    }
    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-3">
                    <Lebel>帳號</Lebel>
                    <Input 
                     register={register("account")}
                    placeholder="輸入帳號" type="text" />
                     <p className="text-sm p-1 text-red-500">{errors.account?.message}</p>
                </div>
                <div className="mt-3">
                    <Lebel>密碼</Lebel>
                    <Input 
                     register={register("password")}
                    placeholder="輸入密碼" type="password" />
                     <p className="text-sm p-1 text-red-500">{errors.password?.message}</p>
                </div>
                <button className='font-bold border-2 border-white p-1 mt-1 rounded-md bg-black text-white' type="submit">送出</button>
            </form>

        </div>
    )


}

export { MemberLogin }