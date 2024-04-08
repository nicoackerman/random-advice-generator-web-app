import { useEffect, useState } from "react";
import { Slip } from "../models/models";
import { getSlip } from "../services/getSlip";

export function useSlip() {
    const [slip, setSlip] = useState<Slip | null>(null);
    
    function refreshSlip() {
        let localSlip: Slip | null = slip;
        getSlip().then( (newSlip) => {
                setSlip(newSlip);
                localSlip=newSlip;
            }
        )
        console.log("refreshSlip has been executed")
        console.log(`newSlip: ${localSlip}`)
    }
    
    useEffect(() => {
        refreshSlip()
    }, [])

    return {slip, refreshSlip};
}