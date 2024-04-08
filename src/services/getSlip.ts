import { Slip } from "../models/models";

async function fetchSlip() {
    try {
        const reponse =  await fetch('https://api.adviceslip.com/advice');
        const data = await reponse.json();
        const slip = data.slip as Slip;
        return slip;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getSlip() {
    const data = await fetchSlip();
    if (data!=null && data!=undefined) {
        return data;
    } else {
        console.error(`Empty data from API: ${data}`)
        return null
    }
}