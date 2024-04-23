import '../index.css'
import { useSlip } from "../hooks/useSlip";
import { Slip } from "../models/models";
import Loading from "./Loading";

import iconDice from '../assets/icon-dice.svg'
import desktopDivider from '../assets/pattern-divider-desktop.svg'
import mobileDivider from '../assets/pattern-divider-mobile.svg'

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
        <section className="relative flex flex-col items-center bg-[#323a49] rounded-lg w-4/5 lg:w-3/6 h-full px-6 py-20 lg:px-8 lg:py-12 space-y-8 lg:space-y-2">
            <h4 className="text-[#52ffa8] font-manrope tracking-widest text-2xl lg:text-xl"> 
            {`ADVICE #${showNumberAdvice(slip)}`}
            </h4>
            <article className="
            w-full min-h-16 mx-h-full flex justify-center items-center
            lg:min-h-20
            ">
                {
                refreshing 
                    ? 
                    <Loading></Loading>
                    : 
                    <p className="font-manrope text-[#cee3e9] text-pretty text-6xl leading-snug text-center lg:text-2xl">
                        {`"${showAdvice(slip)}"`}
                    </p>
                }
            </article>
            <img className="w-3/4 h-6 block lg:hidden" src={mobileDivider}/>
            <img className="w-3/5 h-3 hidden lg:block" src={desktopDivider}/>
            <article 
            className="absolute grid place-content-center rounded-full bg-[#52ffa8] lg:size-16 size-32 -bottom-16 lg:-bottom-8 cursor-pointer" 
            onClick={() => {refreshSlip()}}>
                <img className="lg:size-8 size-16" src={iconDice} alt="Roll the dice icon: Press this to obtain a new advice" />
            </article>
        </section>
    );
}