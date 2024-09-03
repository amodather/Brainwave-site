import logo from "../assets/brainwave.svg"
import { navigation } from "../constants"
import { useLocation } from "react-router-dom"
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HambugerMenu } from "./design/Header";
import { useState } from "react";
function Header() {
    const [openNavigation, setOpenNavigation] = useState(false);
    const pathname = useLocation();
    return (
        <div className="fixed w-full top-0 z-50 border-b-[1px] border-n-6 bg-n-8/90 lg:backdrop-blur-sm">
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 justify-between">
                <a href="#hero"><img src={logo} width="190" height="40"></img></a>
                <nav className={`lg:static ${openNavigation ? "flex" : "max-lg:hidden"} fixed left-0 right-0 bottom-0 top-[4rem] bg-n-8 lg:bg-transparent`}>
                    <div className="relative flex lg:flex-row flex-col items-center m-auto justify-center">
                        {navigation.map((item) => {
                            return <a className={`font-code text-2xl uppercase transition-colors hover:text-color-1
                            ${item.onlyMobile ? "lg:hidden" : ""} lg:text-xs px-6 py-6 md:py-8 lg:-mr-0.25 lg:font-semibold
                            ${pathname.hash === item.url ? "z-2 lg:text-n-1" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                                href={`${item.url}`} key={item.id} onClick={() => setOpenNavigation(false)}>{item.title}</a>
                        })}
                    </div>
                    <HambugerMenu />
                </nav>
                <div className="lg:flex items-center gap-8 uppercase font-code leading-5 font-semibold text-xs hidden">
                    <a className="transition-colors text-n-1/50 hover:text-n-1 -mr-0.25" href="#sign-up">New account</a>
                    <Button className="transition-colors hover:text-color-1 text-xs" href="#login">Sign in</Button>
                </div>
                <Button className="px-3 lg:hidden" onClick={() => setOpenNavigation((prev) => !prev)}>
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    )
}

export default Header;