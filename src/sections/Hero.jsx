import { FaArrowRightLong } from "react-icons/fa6";
import  bigshoe1  from "../assets/images/big-shoe1.png"

const Hero = () => {
  return (
    <section 
        id='home'
        className='w-full flex flex-col justify-center min-h-screen gap-16 py-28 md:flex-row'
    >
        <div className='flex flex-col justify-center items-start px-8 '>
            <p className='mb-8 text-coral-red text-xl font-semibold'>Our Summer Collection</p>
            <h1 className='font-bold text-4xl mb-4 xl:text-8xl sm:max-w-sm xl:max-w-3xl '>The New Arrival 
                <span className='text-coral-red'> Nike </span> Shoes
            </h1>
            <p className='text-slate-gray text-lg mb-10 max-w-[350px]'>Discover stylish Nike arrivals, quality, comfort, and innovation for your active life.</p>
            <button className='rounded-full bg-coral-red py-4 px-8 text-xl text-white flex gap-4 items-center mb-16'>Shop now <span className="rounded-full bg-white text-coral-red p-1"><FaArrowRightLong/></span>  </button>

            <div className="flex flex-row justify-center items-start gap-10 flex-wrap w-full max-w-lg">
                <div className="space-y-1">
                    <p className="text-[35px] font-bold">1k+</p>
                    <p className="text-lg font-light">Brands</p>
                </div>
                <div className="space-y-1">
                    <p className="text-[35px] font-bold">500k+</p>
                    <p className="text-lg font-light">Shops</p>
                </div>
                <div className="space-y-1">
                    <p className="text-[35px] font-bold">250k+</p>
                    <p className="text-lg font-light">Customers</p>
                </div>
            </div>
        </div >
        {/* <div className="flex justify-center items-center bg-primary bg-hero">
            <img src={bigshoe1} alt="shoe hero" width={600} height={500}
          className=''/>
        </div> */}
    </section>
  )
}

export default Hero