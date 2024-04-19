import Card from "./Card"
import { ReactTyped } from "react-typed";



export default function LayoutApp() {
    return (
        <main className='
        w-full h-lvh p-20 space-y-48
        grid place-content-start
        bg-[#1f2632]'>
            <header 
            className="
            grid place-content-center
            ">
                <ReactTyped strings={["Coded by NicolasCardenasL", "Design by Frontend Mentor"]}
                typeSpeed={45} backSpeed={55}
                backDelay={2000}
                loop
                className=" font-manrope text-[#cee3e9] text-6xl text-center"
                >
                </ReactTyped>
            </header>
            <section className="grid justify-items-center">
              <Card></Card>
            </section>
        </main>
    );
}