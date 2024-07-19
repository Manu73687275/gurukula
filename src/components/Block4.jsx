import Block1sub1 from "./Block1sub1";
import data from '../images/Data Science.png'
import block from '../images/Blockchain.png'
import internet from '../images/IOT.png'
import cyber from '../images/Cyber Security.png'
import ai from '../images/AI ML.png'

export default function Block4() {
    return (
        <div className=" m-7 lg:m-20 p-4 lg:p-4 mb-20 sm:mb-20">
            <div>
                <div className=" flex flex-col justify-center sm:mb-4 mb-4 gap-7">
                    <h1 className=" text-center text-5xl font-bold text-white">Our Impack</h1>
                    <p className="sm:text-center text-center lg:text-center md:text-xl lg:text-2xl mb-4 sm:mb-6 text-white">Transformative Education ,Empowered Future: Expolore the impact we have made on lives and careers</p>
                </div>
            </div>
            <div className=" grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 bg-[#59aa7a] shadow-2xl p-2 lg:p-2 rounded-lg gap-4 sm:gap-4 lg:gap-4 mb-12 ">
                <div className=" sm:p-10 ">
                    <h1 className=" text-xl font-semibold sm:text-2xl lg:text-3xl sm:p-5">More than 5,000+</h1>
                    <p className=" text-left">Gurkulities successfully certified under Data analytics pathshala program</p>
                </div>
                <div className="sm:p-10">
                    <h1 className=" text-xl font-semibold  sm:text-2xl lg:text-3xl sm:p-5">More than 10,000+</h1>
                    <p className="text-left">Gurkulities successfully certified underBlockchain specialization program powered by rise in</p>
                </div>
            </div>
            <div className=" mt-6 bg-blue-200 shadow-2xl p-2 sm:p-4 lg:p-4 rounded-lg">
                <div>
                    <h1 className=" text-4xl font-bold">We partnerd with RGPV</h1>
                </div>
                <div>
                    <p className="sm:mt-8  text-xl text-left">the premier and only AICTE-approved technical university of the central India, to provide Industry Specialisation in the following</p>
                </div>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 justify-evenly">
                    <Block1sub1 name="Data Science " image={data} />
                    <Block1sub1 name="Block Chain" image={block} />
                    <Block1sub1 name="Internet of Things" image={internet} />
                    <Block1sub1 name="Cyber Security" image={cyber} />
                    <Block1sub1 name="AI ML" image={ai}/>
                </div>
            </div>
        </div>
    )
}
