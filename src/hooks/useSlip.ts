import { useEffect, useState } from "react";
import { Slip } from "../models/models";
import { getSlip } from "../services/getSlip";

export function useSlip() {
    const [slip, setSlip] = useState<Slip | null>(null);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    
    function refreshSlip() {
        let localSlip: Slip | null = slip;
        getSlip().then( (newSlip) => {
                setRefreshing(false)
                setSlip(newSlip);
                localSlip=newSlip;
                console.log(refreshing)
                console.log(`newSlip: ${localSlip?.advice}`)
            }
        )
        setRefreshing(true)


        console.log(refreshing)
        console.log("refreshSlip has been executed")
        console.log(`newSlip: ${localSlip?.advice}`)
    }
    
    useEffect(() => {
        refreshSlip()
    }, [])

    return {refreshing, slip, refreshSlip};
}