import Card from "./Card"
export default function LayoutApp() {
    return (
        <div className='
        grid h-dvh w-dvw justify-items-center content-center 
        px-7 bg-color-darkest'>
            <h1 className="
            font-manrope color-advice-text text-lg leading-snug text-center grid-rows-2
            lg:text-6xl lg:gap-4
            ">
                Advice Generator
            </h1>
            <Card></Card>
        </div>
    );
}