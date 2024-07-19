import imgA from '../images/block2A.png';
import imgB from '../images/block2B.png';
import imgC from '../images/blockC.png';

function Block2() {
  return (
    <div className="flex justify-center mt-20">
      <div className="inline-block justify-center">
        <div className='mb-4 sm:mb-10'>
          <h1 className="text-center font-bold text-3xl sm:text-5xl text-white">Explore our College Networks</h1>
        </div>
        <div className="m-4 grid lg:grid-cols-3 gap-4 grid-cols-1 sm:gap-8">
          <div>
            <div className=' flex sm:justify-center justify-center'>
              <img src={imgA} alt="" />
            </div>

            <div className=" flex justify-around">
              <button className='m-2 p-2 px-8 bg-slate-400 rounded-lg text-white'>news 1</button>
              <button className='m-2 p-2 px-8 bg-slate-400 rounded-lg text-white'>news 2</button>
            </div>
          </div>
          <div >
            <div className=' flex sm:justify-center justify-center'>
              <img src={imgB} alt="" />
            </div>
            <div className=" flex justify-around">
              <button className='m-2 p-2 px-8 bg-slate-400 rounded-lg text-white'>news 1</button>
              <button className='m-2 p-2 px-8 bg-slate-400 rounded-lg text-white'>news 2</button>
            </div>
          </div>
          <div>
            <div className=' flex sm:justify-center justify-center'>
              <img src={imgC} alt="" />
            </div>
            <div className=" flex justify-around">
              <button className='m-2 p-2 px-8 bg-slate-400 rounded-lg text-white'>news 1</button>
              <button className='m-2 p-2 px-8 bg-slate-400 rounded-lg text-white'>news 2</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Block2;
