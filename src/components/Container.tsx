import {ReactNode} from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Container({children}: {
    children: ReactNode;
}) {
    return (<div className='max-w-[1100px] mx-auto  bg-white flex flex-col min-h-screen border-r border-l'>
            <Header/>
            {children}
            <Footer/>
        </div>

    );
}