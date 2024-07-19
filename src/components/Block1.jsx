import Block1sub1 from "./Block1sub1";
import image1 from '../images/image 2352.png';
import image2 from '../images/image 2347.png';
import image3 from '../images/image 2348.png';
import image4 from '../images/image 2349.png';

export default function Block1() {
  return (
    <div className=" mt-20 sm:mt-16">
      <div className="flex justify-center mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4  sm:p-14 sm:gap-6">
          <div className=" text-white">
            <div>
              <h1 className="font-bold text-[40px] text-center lg:text-left lg:my-4">
                World of Artificial Intelligence and Data Storage
              </h1>
            </div>
            <div>
              <p className="text-[25px] lg:my-4 mt-8 sm:mt-10">
                Welcome all the Gen-Z  Geeks to the Modern Age Gurukul. Empower Your Institute: Transform Students into AI, ML, and DS Experts under guidance of IITians.
              </p>
            </div>
            <div className="mt-8 sm:mt-10 flex justify-evenly">
              <Block1sub1 name="Gen AI" image={image1} />
              <Block1sub1 name="AI Board" image={image2} />
              <Block1sub1 name="Google Gemini" image={image3} />
              <Block1sub1 name="Chat GPT" image={image4} />
            </div>
          </div>
          <div className=" bg-green-300 shadow-4xl rounded-lg">
            <div>
              <h2 className="m-4 text-green-500 text-[35px] font-medium text-center">
                15+ Hours Offline Data Analytics Pathshala Programme
              </h2>
            </div>
            <div className="mt-4 text-center mb-10">
              <p className="text-[20px]">
                Cutting-edge Advanced  AI, ML, & DS Curriculum
              </p>
              <p className="text-[20px]">
                Learn only from mentors of IITs completely offline.
              </p>
              <p className="text-[20px]">
                Course completion certificate powered by Startup India, Skill India and MSME.
              </p>
            </div>
            <div className="mt-3 flex justify-evenly">
              <button className="border-2 bg-slate-500 p-2 px-5 rounded-lg">
                Know More
              </button>
              <button className="border-2 bg-slate-500 p-2 px-5 rounded-lg">
                Book Your Slot
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}
