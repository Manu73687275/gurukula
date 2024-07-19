/* eslint-disable react/prop-types */
const Button = (props) => {
    return (
      <button className='bg-green-600 text-white font-[Poppins] py-2 px-6 rounded-full md:ml-8 hover:bg-green-400
      duration-500 ml-5 sm:block'>
        {props.children}
      </button>
    )
  }
  
  export default Button