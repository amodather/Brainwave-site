import Section from "./Section";
import { socials } from "../constants";
function Footer(){
    return <Section crosses={true} customPaddings="py-10">
        <div className="w-[85%] mx-auto flex md:flex-row flex-col items-center justify-between">
            <p className="text-sm text-n-4  max-md:mb-5">© 2024. All rights reserved.</p>
            <div className="flex items-center gap-4">
                {socials.map((item) =>{
                    return <a href={item.url} key={item.id} className="rounded-full p-3 bg-n-7 hover:bg-n-6 duration-200">
                        <img src={item.iconUrl}></img>
                    </a>
                })}
            </div>
        </div>
    </Section>
}

export default Footer;