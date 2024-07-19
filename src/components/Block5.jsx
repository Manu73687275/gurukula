import Bloack5sub1 from "./Bloack5sub1";
import A1 from "../images/Layer_1 (1).png"
import A2 from '../images/Layer_1.png';
import A3 from '../images/Frame (1).png';
import A4 from '../images/Frame (2).png';
import A5 from '../images/Frame.png';


export default function Block5() {
  return (
    <div className=" m-4">
            <div className="block">
                <div>
                    <h1 className=" text-green-500 text-center text-3xl sm:text-6xl">Our Additional Deliverables</h1>
                </div>
                <div>
                    <h2 className=" text-white text-center mt-4 sm:mt-8 text-2xl">Unveiling Excellence: Discover the Distinctive and Salient Key Features That Set Us Apart in the World of Learning and Skill Building</h2>
                </div>
            </div>
            <div className="  mt-5 sm:mt-8  grid justify-center bg-[#1C202A] shadow-2xl rounded-lg">
             <Bloack5sub1 image={A1} description="GoG faculties are BTech/MTech & Ph.D. holder from Premier Institution." />
             <Bloack5sub1 image={A2} description="Teaching Additional Industry relevant subjects (Open AI, Gen-AI etc)." />
             <Bloack5sub1 image={A3} description="30+ Industry based projects per Subject." />
             <Bloack5sub1 image={A4} description="Case studies from 50+ Business Company Playbook." />
             <Bloack5sub1 image={A5} description="Aptitude, Reasoning and GD-PI Training." />
            </div>
            
    </div>
  )
}
