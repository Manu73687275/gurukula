/* eslint-disable react/prop-types */


export default function Bloack5sub1({image,description}) {
  return (
    <div className=" grid justify-center grid-cols-1 ">
       <div className=" flex gap-7 sm:gap-7 pl-12 sm:pl-20 mt-4">
            <img src={image} alt="" />
            <h2 className=" text-white text-xl">{description}</h2>
       </div>
       
    </div>
  )
}
