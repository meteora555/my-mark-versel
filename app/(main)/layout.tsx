
import '@/src/styles/global.scss';
import {Header} from "@/components/Header/Header";
import {Footer} from "@/components/Footer/Footer";
import {FixedButtons} from "@/modules/FixedBtn/components/FixedButtons";


export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <>
            <div className={'main'}>
                <Header/>
                <div className={'content'}>
                    {children}
                </div>
                <FixedButtons/>
                <Footer/>
            </div>
        </>
    )
}
