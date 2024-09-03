import Section from "./Section";
import service1 from "../assets/services/service-1.png";
import service2 from "../assets/services/service-2.png";
import service3 from "../assets/services/service-3.png";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import { check, loading } from "../assets";
import { brainwaveWhiteSymbol } from "../assets";
import ChatBubbleWing from "../assets/svg/ChatBubbleWing";
import { VideoBar } from "./design/Services";
function Services() {
    return (
        <Section >
            <div className="w-[85%] mx-auto">
                <div className="mb-[5rem] text-center">
                    <h2 className="h2">Generative AI made for creators.</h2>
                    <p className="mt-4 text-n-4 font-light">Brainwave unlocks the potential of AI-powered applications</p>
                </div>
                <div className="w-full relative border-[1px] border-n-6 z-1 h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                        <img src={service1} className="w-full h-full object-cover md:object-right"></img>
                    </div>
                    <div className="w-full h-full flex items-center justify-end">
                        <div className="z-1 w-[18rem]">
                            <h2 className="h4 mb-3">Smartest AI</h2>
                            <p className="font-light text-n-3 mb-8">Brainwave unlocks the potential of AI-powered applications</p>
                            {brainwaveServices.map((item) => {
                                return <div key={item}>
                                    <hr className="border-n-6"></hr>
                                    <div className="flex items-center gap-6 my-4">
                                        <img src={check} alt="check"></img>
                                        <p>{item}</p>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="absolute z-1 md:right-1/4 right-1/5 md:w-1/2 w-[80%] bottom-[2rem] flex items-center
                    bg-n-8/80 gap-4 py-3 px-8 rounded-[10rem] border-[1px] border-n-6">
                        <img src={loading} alt="loading" className="w-5"></img>
                        <p className="text-lg">AI is generating</p>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col w-full items-center lg:gap-6 justify-between">
                    <div className="w-full relative border-[1px] border-n-6 h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                            <img src={service2} className="w-full h-full object-cover object-right opacity-80"></img>
                        </div>
                        <div className="absolute z-1 bottom-[6rem] pr-6">
                            <h2 className="h4 mb-4">Photo Editing</h2>
                            <p className="font-light text-n-3">Automatically enhance your photos using our AI app's photo editing feature. Try it now!</p>
                        </div>
                        <div className="absolute top-[4rem] z-1 max-lg:right-8 bg-black w-[16rem] p-6 rounded-l-xl rounded-tr-xl font-light">
                            Hey Brainwave, enhance this photo
                            <ChatBubbleWing className="absolute left-full bottom-0" />
                        </div>
                    </div>
                    <div className="w-full relative bg-n-7 z-1 h-[39rem] mb-5 p-4 rounded-3xl overflow-hidden lg:pt-12 xl:h-[46rem]">
                        <div className="px-6 mb-8">
                            <h2 className="h4 mb-4">Video generation</h2>
                            <p className="font-light text-n-3">The world’s most powerful AI photo and video art generation engine. What will you create?</p>
                        </div>
                        <div className="flex items-center w-full justify-between px-4">
                            {brainwaveServicesIcons.map((icon, index) => {
                                return <div className={`rounded-xl ${index !== 2 ? "bg-n-6 md:p-4 p-2" : "bg-conic-gradient p-[1px]"}`} key={index}>
                                    {index !== 2 ? <img src={icon} alt="icon"></img> : <div className="rounded-xl bg-n-8 md:p-5 p-3"><img src={icon} alt="icon"></img></div>}
                                </div>
                            })}
                        </div>
                        <div className="relative w-full xl:h-[26rem] h-[19rem] bg-n-8 rounded-xl mt-12 overflow-hidden">
                            <img src={service3} className="w-full h-full object-cover"></img>
                            <div className="absolute bg-n-6 px-4 py-3 h-[4rem] w-[16rem] top-8 left-12 rounded-r-xl rounded-tl-xl">
                                <p className="font-code">Video generated!</p>
                                <p className="text-xs absolute bottom-1 right-3 text-n-3 font-light">Just Now</p>
                                <ChatBubbleWing className="absolute right-full bottom-0 -scale-x-100" pathClassName="fill-n-6" />
                                <img className="absolute -bottom-4 left-6 w-9 bg-color-1 p-1 rounded-xl" src={brainwaveWhiteSymbol}></img>
                            </div>
                            <VideoBar />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Services;