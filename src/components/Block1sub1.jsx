/* eslint-disable react/prop-types */


export default function Block1sub1({ name,image }) {
  return (
    <div className=" inline-block gap-4">
      <div className=" mx-3 ">
        <h3 className=" flex justify-center text-[20px] font-semibold ">{name}</h3>
      </div>
      <div className=" flex justify-center mt-5 sm:mt-5 lg:mt-5
      md:mt-5">
        <img className=" bg-slate-500 rounded-lg" src={image} alt="Descriptive Alt Text" />
      </div>
    </div>
  );
}
