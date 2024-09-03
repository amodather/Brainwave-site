import Section from "./Section";
import { benefits } from "../constants";
import card1 from "../assets/benefits/card-1.svg";
import card2 from "../assets/benefits/card-2.svg";
import card3 from "../assets/benefits/card-3.svg";
import card4 from "../assets/benefits/card-4.svg";
import card5 from "../assets/benefits/card-5.svg";
import card6 from "../assets/benefits/card-6.svg";
import Arrow from "../assets/svg/Arrow"
import { GradientLight } from "./design/Benefits";
const cards = [card1, card2, card3, card4, card5, card6]
function Card({ item, index }) {
    return (
        <div className="relative md:max-w-[24rem] overflow-hidden group shadow-lg mt-[4rem] max-h-[20rem]">
            <img className="absolute top-0 w-full h-full opacity-0 group-hover:opacity-10 duration-500 object-cover rounded-tr-[4rem]" src={item.imageUrl}></img>
            <img src={cards[index]} className="md:w-[24rem] w-full h-full"></img>
            <div className="absolute top-4 left-4 w-[80%] p-2.5">
                <h2 className="h5 mb-5">{item.title}</h2>
                <p className="text-n-3 font-light">{item.text}</p>
            </div>
            <div className="absolute w-[90%] p-2.5 bottom-4 left-4 flex items-center justify-between">
                <img src={item.iconUrl}></img>
                <p className="text-[11px] font-bold uppercase flex items-center">
                    Explore more<Arrow />
                </p>
            </div>
            
        </div>
    )
}
function Features() {
    return (
        <Section id="features">
            <div className="relative xl:w-[85%] w-[90%] mt-[3rem] mx-auto mb-[6rem]">
                <p className="h2 text-center ">Chat Smarter, Not Harder<br></br>with Brainwave</p>
                <div className="xl:w-full lg:w-4/5 w-full grid gap-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {benefits.map((item, index)=>{
                        return <Card item={item} index={index} key={item.key}/>
                    })}
                </div>
            </div>
        </Section>
    )
}

export default Features;