import CardAdvice from "./CardAdvice";
import { Header } from "./Header";

export default function LayoutApp() {
    return (
        <>
        <main className="flex flex-col items-center justify-center px-10 py-28 lg:py-10 lg:px-10 space-y-52 lg:space-y-14">
            <Header></Header>
            <CardAdvice></CardAdvice>
        </main>
        </>
    )
}