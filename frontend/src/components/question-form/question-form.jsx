const QuestionForm = ({ children }) => {
    return (
    <form className="bg-gradient-to-b from-indigo-100 to-indigo-300 p-5 rounded-md justify-center items-center drop-shadow-lg" action="">
        {children}
    </form>)

}

export { QuestionForm }