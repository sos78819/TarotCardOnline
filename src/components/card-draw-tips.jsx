import { CardShuffleButton } from "./card-suffle-button"


const CardDrawTips = () => {
    return <div className="flex w-full z-9 mt-10 md:mt-[-40px]">        
        <p className="pl-2 text-zinc-800 flex font-bold">請憑直覺從下方抽出7張牌</p>
        <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-7 h-7 mb-5 md:mb-0 md:w-9 md:h-9 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center ml-3">
            <svg className="w-5 h-5 text-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>

    </div>

}

export { CardDrawTips }