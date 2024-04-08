import { Styles } from "../models/models"

const staticStyles: Styles = {
  "card": "relative bg-color-lightest rounded-lg justify-items-center content-center grid w-4/5 h-full p-5 ",
  "adviceNumber": "text-green-color font-manrope tracking-widest text-center text-xs mb-4",
  "credits": "font-manrope text-white",
  "tittle": "font-manrope text-center",
  "advice": "font-manrope color-advice-text text-lg leading-snug text-center mb-4",
  "diceIcon": "justify-items-center content-center grid rounded-full green-dice-bg size-12 absolute -bottom-6 cursor-pointer" // -buttom-6 is static because it's size it is as well
}

const responsiveStyles: Styles = {
  "card": "sm:w-3/5 lg:w-2/5 max-h-2/3 min-h-3/4 max-w-3/5 min-w-2/5",
  "adviceNumber": "lg:base",
  "credits": "",
  "tittle": "",
  "advice": "lg:text-2xl",
  "diceIcon": ""
}

export const styles: Styles = {
  "card": `${staticStyles["card"]} ${responsiveStyles["card"]}`,  
  "adviceNumber": `${staticStyles["adviceNumber"]} ${responsiveStyles["adviceNumber"]}`,
  "credits": `${staticStyles["credits"]} ${responsiveStyles["credits"]}`,
  "advice": `${staticStyles["advice"]} ${responsiveStyles["advice"]}`,
  "tittle": `${staticStyles["tittle"]} ${responsiveStyles["tittle"]}`,
  "diceIcon": `${staticStyles["diceIcon"]} ${responsiveStyles["diceIcon"]}`
}