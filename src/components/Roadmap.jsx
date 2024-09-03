import Section from "./Section";
import brackets from "../assets/svg/Brackets";
import { check2, loading1, grid } from "../assets";
import { roadmap } from "../constants";
import Button from "./Button";
function Roadmap() {
    return <Section id="roadmap">
        <div className="w-[85%] mx-auto">
            <div className="flex items-center justify-center mt-10 mb-4 gap-3">
                {brackets("left")}
                <p className="font-grotesk text-[12px] tracking-widest uppercase text-n-3">Ready to get started</p>
                {brackets("right")}
            </div>
            <h2 className="h2 text-center mb-[6rem]">What we’re working on</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {roadmap.map((item, index) => {
                    return <div className="relative border border-n-6 w-full h-full px-10 bg-n-8 rounded-[2rem] py-8 lg:w-auto md:even:translate-y-[8rem] overflow-hidden" key={item.id}>
                        <div className="flex w-full items-center justify-between z-1 mt-10 mb-16">
                            <div className="flex items-center justify-center gap-3">
                                {brackets("left")}
                                <p className="font-grotesk text-[12px] tracking-widest uppercase text-n-3">May 2023</p>
                                {brackets("right")}
                            </div>
                            <div className="flex items-center gap-2 bg-n-1 text-n-8 font-light px-3 py-1 rounded-md text-xs lg:mr-8 xl:mr-20">
                                <img src={item.status === "done" ? check2 : loading1}></img>
                                <p className="uppercase font-grotesk tracking-widest">{item.status === "done" ? "done" : "in progress"}</p>
                            </div>
                        </div>
                        <img src={item.imageUrl} className="z-1 w-full object-cover scale-110"></img>
                        <img src={grid} className="absolute w-full top-0"></img>
                        <h2 className="h4 mt-8 mb-3 z-1">{item.title}</h2>
                        <p className="font-light text-n-3 mb-8">{item.text}</p>
                    </div>
                })}
            </div>
            <div className="flex justify-center w-full md:mt-[12rem] my-10">
                <Button className="uppercase top-6">Our roadmap</Button>
            </div>

        </div>
    </Section>
}

export default Roadmap;