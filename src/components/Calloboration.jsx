import Section from "./Section";
import { check } from "../assets";
import { collabApps, collabContent } from "../constants";
import { brainwaveSymbol } from "../assets";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";
function Calloboration() {
    return (
        <Section crosses={true} className="relative">
            <div className="relative xl:w-[85%] w-[90%] mx-auto flex lg:flex-row flex-col gap-10 lg:justify-between xl:justify-start">
                <div className="w-[24rem]">
                    <h2 className="h2">AI Chat App for seamless collaboration</h2>
                    <div className="mt-[3rem]">
                        {collabContent.map((item) => {
                            return <div key={item.title} className="mb-[2rem]">
                                <div className="flex items-center gap-5">
                                    <img src={check} alt="check"></img>
                                    <h4 className="font-light">{item.title}</h4>
                                </div>
                                {item.text && <p className="mt-3 text-n-4 font-light">{item.text}</p>}
                            </div>
                        })}
                    </div>
                    <Button className="mt-[2rem]">Try it Now</Button>
                </div>
                <div className="relative pt-3 flex flex-col items-center lg:w-[400px] xl:ml-[22.5rem]">
                    <p className="text-n-4 font-light">With smart automation and top-notch security,
                        it's the perfect solution for teams looking to work smarter.</p>
                    <div className="mt-[7rem] relative border-[1px] border-n-6 rounded-full w-[350px] h-[350px] flex items-center justify-center">
                        <div className="border-[1px] border-n-6 rounded-full w-[250px] h-[250px] flex items-center justify-center">
                            <div className="bg-conic-gradient rounded-full w-[100px] h-[100px] flex items-center justify-center p-1">
                                <div className="bg-n-8 rounded-full w-full h-full flex items-center justify-center">
                                    <img src={brainwaveSymbol} alt="brainwave" className="w-12 bg-black"></img>
                                </div>
                            </div>
                        </div>
                        {collabApps.map((app, index) => {
                            return <div key={app.key}
                                className={`absolute rounded-lg left-3/5 -top-5 origin-bottom h-[57%] rotate-${index * 45}`}>
                                <div className={`flex justify-center p-2 rounded-lg border-[1px] border-n-5 -rotate-${index * 45}`}>
                                    <img src={app.icon} alt={app.title} width={app.width} height={app.height}></img>
                                </div>
                            </div>
                        })}
                        <RightCurve />
                        <LeftCurve />
                    </div>
                </div>
            </div>
        </Section>
    )
}


export default Calloboration;