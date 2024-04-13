import { twMerge } from "tailwind-merge";
import '../index.css'
import { styles } from "../styles/cardAdviceStyles";
import { useSlip } from "../hooks/useSlip";
import { Slip } from "../models/models";
import LoadingDots from "./LoadingDots";

function showAdvice(slip: Slip |null) {
    if (slip!=null) {
        return slip.advice;
    } else {return "Advice is not available now";}
}

function showNumberAdvice(slip: Slip |null) {
    if (slip!=null) {
        return slip.id;
    } else {return "Number Advice is not available now;"}
}     
export default function CardAdvice() {
    const {refreshing, slip, refreshSlip} = useSlip();
    return (
        <div 
        className="
        relative grid justify-items-center content-center 
        bg-color-lightest rounded-lg
        w-full h-full p-10
        lg:w-2/5 max-h-80 min-h-80 max-w-3/5 min-w-2/5
        ">
            <h3 
            className="
            bg-green-500 text-green-color font-manrope tracking-widest text-center text-2xl p-4
            lg:text-xl
            "> 
            {`ADVICE #${showNumberAdvice(slip)}`}
            </h3>
            <div className="
            w-full min-h-16 mx-h-full mb-4 flex justify-center items-center p-4
            lg:min-h-20
            ">
                {
                refreshing 
                    ? 
                    <LoadingDots></LoadingDots>
                    : 
                    <p className="
                    font-manrope color-advice-text text-4xl leading-snug text-center p-4 bg-green-500
                    lg:text-2xl
                    ">
                        {`"${showAdvice(slip)}"`}
                    </p>
                }
            </div>
            <img 
            className="mb-4 h-2" 
            src="../public/images/pattern-divider-desktop.svg" 
            alt="" 
            />
            <div 
            className="
            justify-items-center content-center grid
            rounded-full green-dice-bg size-40 absolute -bottom-20 cursor-pointer" 
            onClick={() => {refreshSlip()}}>
                <img className="size-16" src="../public/images/icon-dice.svg" alt="Roll the dice icon: Press this to obtain a new advice" />
            </div>
        </div>
    );
}