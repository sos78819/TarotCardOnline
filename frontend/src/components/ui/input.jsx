const Input =({type,placeholder,register}) =>{
    return <input 
    {...register}
    className="rounded-md px-1 w-2/3 shadow-slate-500 shadow-sm outline-lime-300" 
    type={type}
    placeholder={placeholder} />
}
export {Input}