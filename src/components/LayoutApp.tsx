import Card from "./Card"
export default function LayoutApp() {
    return (
        <div className='
        grid h-dvh w-dvw justify-items-center content-center 
        px-7 bg-[#1f2632]'>
            <h1 className="
            font-manrope text-[#cee3e9] text-lg leading-snug text-center grid-rows-2
            lg:text-6xl lg:gap-4
            ">
                Advice Generator
            </h1>
            <Card></Card>
        </div>
    );
}