import logo from '../images/GOG FINAL TRANSPARENT-04 1.png'

function Footer() {
  return (
    <div className='m-10 sm:m-20 shadow-3xl rounded-lg bg-[#1A211F] p-10 sm:p-20'>
     <div className=" grid grid-cols-1 md:grid-cols-4 justify-between text-white gap-10">
        <div className=' flex flex-col gap-5'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
            <p>Unleash the Power of Learning: Discover a World of Possibilities with our Cutting-edge Learning Management System.</p>
            </div>
        </div>
        <div>
            <h1 className='text-2xl'>Connect</h1>
            <div className='flex flex-col'>
                <a className='hover:text-green-500' href='#'>Contact us</a>
                <a className='hover:text-green-500' href='#'>About us</a>
                <a className='hover:text-green-500' href='#'>Courses</a>
            </div>
        </div>
        <div>
            <h1 className='text-2xl'>Resources</h1>
            <div className='flex flex-col'>
                <a className='hover:text-green-500' href='#'>Privacy policy</a>
                <a className='hover:text-green-500' href='#'>FAQ</a>
                <a className='hover:text-green-500' href='#'>Term and Condition</a>
            </div>
        </div>
        <div>
             <h1>Contact us</h1>
             <div className='flex flex-col'>
             <a className='hover:text-green-500' href='#'>9109976089</a>
             <a className='hover:text-green-500' href='#'>admin@geeksofgurukul.com</a>
             </div>
        </div>
     </div>
    </div>
  )
}

export default Footer
