import Section from "./Section";
import { heroIcons, notificationImages } from "../constants";
import ButtonSvg from "../assets/svg/ButtonSvg";
import curve from "../assets/hero/curve.png"
import robot from "../assets/hero/robot.jpg"
import Button from "./Button";
import { heroBackground } from "../assets";
import { BackgroundCircles } from "./design/Hero";
import notification from "../assets/notification/image-1.png"
import loading from "../assets/loading.png"
import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import SectionSvg from "../assets/svg/SectionSvg";
import { yourlogo } from "../assets";
function Hero() {
    const ref = useRef(null);
    return (
        <>
            <Section id="hero" crosses={true} customPaddings="pt-[7rem]" ref={ref}>
                <div className="relative flex w-[90%] mx-auto justify-center mb-[6rem]">
                    <div className="text-center">
                        <h1 className="h1">Explore the Possibilities<br></br> of AI Chatting with<> </>
                            <div className="relative inline-flex flex-col lg:pb-2 pb-4">
                                Brainwave
                                <img src={curve} className="absolute left-0 top-full w-full -mt-4" alt="Curve"></img>
                            </div>
                        </h1>
                        <div className="mt-4">
                            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
                        </div>
                        <Button white={true} className="capitalise">Get started</Button>
                    </div>
                </div>
                <div className="relative max-md:max-w-[20rem] mx-auto md:w-[90%] lg:max-w-5xl lg:mb-24 p-0.5 bg-conic-gradient rounded-[0.9rem]">
                    <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[50%] md:w-[138%] lg:-top-[98%] z-[-1]">
                        <img src={heroBackground} width={1440} height={1800} className="w-full"></img>
                    </div>
                    <BackgroundCircles />
                    <div className="w-full rounded-xl">
                        <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]"></div>
                        <div className="w-full h-[500px] overflow-hidden rounded-b-[0.9rem]">
                            <img src={robot} className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]" alt="robot"
                                width={1440} height={1800}></img>
                        </div>
                        <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8"></div>
                        <div className="relative z-1 h-6 mx-5 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-16"></div>
                    </div>
                    <div className="absolute z-2 lg:right-1/4 md:right-[20%] right-4 md:w-[500px] w-[18rem] bottom-[6rem] flex items-center
                    bg-n-8/80 gap-4 py-3 px-8 rounded-[10rem]">
                        <img src={loading} alt="loading" className="w-5"></img>
                        <p className="text-lg">AI is generating</p>
                    </div>
                    <ScrollParallax isAbsolutelyPositioned>
                        <div className="absolute -left-[8%] top-[60%] bg-n-5/60 xl:flex hidden items-center gap-8 p-6 rounded-xl
                    border-[1px] border-n-5">
                            {heroIcons.map((item, index) => {
                                return <img src={item} key={index}></img>
                            })}
                        </div>
                    </ScrollParallax>
                    <ScrollParallax isAbsolutelyPositioned>
                        <div className="absolute -right-[8%] top-[40%] bg-n-5/60 xl:flex hidden items-center gap-4 p-4 rounded-xl
                    border-[1px] border-n-5">
                            <img src={notification} alt="notification" className="h-16 rounded-xl"></img>
                            <div>
                                <p className="font-semibold">Code generation</p>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex items-center gap-1">
                                        {notificationImages.map((image) => {
                                            return <img src={image} key={`{image}`} className="h-6 rounded-full"></img>
                                        })}
                                    </div>
                                    <p className="text-n-1/40 text-sm font-light ml-8">1m ago</p>
                                </div>
                            </div>
                        </div>
                    </ScrollParallax>
                </div>
                <div className="lg:block hidden w-[90%] mx-auto text-center">
                    <p className="uppercase text-n-1/50 text-xs tracking-widest">Helping people create beautiful content at</p>
                    <div className="flex justify-center items-center w-full mt-16 gap-32">
                        {[1,2,3,4,5].map((item) =>{
                            return <img src={yourlogo} key={item} alt="logo"></img>
                        })}
                    </div>
                </div>
                <SectionSvg crossesOffset={`translate-y-[25rem]`} />
            </Section>
        </>
    )
}

export default Hero;