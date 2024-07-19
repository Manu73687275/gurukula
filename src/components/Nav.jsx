import  { useState } from 'react'
import Button from './Button';
import logo from '../images/GOG FINAL TRANSPARENT-04 1.png'
const Nav = () => {
    let Links =[
      {name:"Our Programs",link:"/"},
      {name:"Our Team",link:"/"},
      {name:"Gallery",link:"/"},
      {name:"College Engagement",link:"/"},
      
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 text-white'>
      <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        {/* <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <ion-icon name="logo-ionic"></ion-icon>
        </span> */}
        <img src={logo} alt="" />
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[4rem] ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <div className=' flex'>
        <Button>
            join our community
        </Button>
        <Button>
          Contact Us
        </Button>
        </div>
       
      </ul>
      </div>
    </div>
  )
}

export default Nav