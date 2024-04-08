import { twMerge } from "tailwind-merge";
import './index.css'
import { styles } from "./styles/cardAdviceStyles";
import { useSlip } from "./hooks/useSlip";
import { Slip } from "./models/models";

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
    const {slip, refreshSlip} = useSlip();
    return (
        <>
            <div className={twMerge(styles["card"])}>
                <h3 className={twMerge(styles["adviceNumber"])}
                > {`ADVICE #${showNumberAdvice(slip)}`}
                </h3>
                <p className={twMerge(styles["advice"])}>
                    {`"${showAdvice(slip)}"`}
                </p>
                <img className="mb-4 h-2" src="../public/images/pattern-divider-desktop.svg" alt="" />
                <div className={twMerge(styles["diceIcon"])} onClick={() => {refreshSlip()}}>
                    <img className="size-5" src="../public/images/icon-dice.svg" alt="Roll the dice icon: Press this to obtain a new advice" />
                </div>
            </div>
        </>
    );
}