import Section from "./Section";
import { smallSphere, stars } from "../assets/index";
import brackets from "../assets/svg/Brackets";
import { pricing } from "../constants";
import { check } from "../assets/index";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import Button from "./Button";
function Pricing() {
    return (
        <Section id="pricing">
            <div className="relative w-[70%] mx-auto h-[18rem] lg:block hidden">
                <img src={stars} className=" w-full h-full object-cover"></img>
                <img src={smallSphere} className="w-64 absolute top-0 left-[40%]"></img>
            </div>
            <div className="w-[85%] mx-auto">
                <div className="flex items-center justify-center mt-10 mb-4 gap-3">
                    {brackets("left")}
                    <p className="font-grotesk text-[12px] tracking-widest uppercase text-n-3">Get started with Brainwave</p>
                    {brackets("right")}
                </div>
                <h2 className="h2 text-center mb-[6rem]">Pay once, use forever</h2>
                <div className="relative">
                    <div className="flex lg:flex-row flex-col items-center justify-between gap-4">
                        {pricing.map((item, index) => {
                            return <div className="border border-n-6 w-[19rem] max-lg:w-full h-full px-6 bg-n-8 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4" key={item.id}>
                                <h4 className={`h4 ${item.color} mb-4`}>{item.title}</h4>
                                <p className="text-n-4 mb-[4rem]">{item.description}</p>
                                <div className="flex items-center mb-[2.5rem]">
                                    <span className="h3">$</span>
                                    <span className="text-[5rem] font-bold">{item.price}</span>
                                </div>
                                <Button white={index !== 2} className="w-full mb-6">{index !== 2 ? "Get Started" : "Contact Us"}</Button>
                                {item.features.map((feature) => {
                                    return <div key={feature}>
                                        <hr className="border-n-6"></hr>
                                        <div className="flex items-start gap-6 my-4">
                                            <img src={check} alt="check"></img>
                                            <p>{feature}</p>
                                        </div>
                                    </div>
                                })}
                            </div>
                        })}
                        <RightCurve />
                        <LeftCurve />
                    </div>
                </div>
                <a href=""><h6 className="mt-10 uppercase font-bold text-[12px] underline tracking-wide text-center">See  the  full  details</h6></a>
            </div>

        </Section>
    )
}


export default Pricing;