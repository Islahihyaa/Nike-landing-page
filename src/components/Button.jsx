import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({
    label,
    iconURL
}) => {
  return (
    <button 
        className='rounded-full bg-coral-red py-4 px-8 text-xl text-white flex gap-4 items-center mb-16'
    > {label}
      {iconURL && (
        <div 
         className="rounded-full bg-white text-coral-red p-1" ><FaArrowRightLong/></div>
      )}
    </button>
  )
}

export default Button