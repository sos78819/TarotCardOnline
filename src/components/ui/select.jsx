const Select = ({ children,typeChange,className}) => {
    return <select className={className} onChange={(e)=>typeChange(e.target.value)}>
        {children}
    </select>
}
export { Select }