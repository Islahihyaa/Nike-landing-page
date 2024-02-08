import { FaArrowRightLong } from "react-icons/fa6";
import  bigshoe1  from "../assets/images/big-shoe1.png"
import { statistic } from "../constants";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section 
        id='home'
        className='w-full flex flex-col justify-center min-h-screen gap-16 md:flex-row max-container'
    >
        <div className='flex flex-col justify-center items-start px-8 py-24 md:py-26'>
            <p className='mb-8 text-coral-red text-xl font-semibold'>Our Summer Collection</p>
            <h1 className='font-bold text-4xl mb-4 xl:text-8xl max-w-sm xl:max-w-3xl '>The New Arrival 
                <span className='text-coral-red'> Nike </span> Shoes
            </h1>
            <p className='text-slate-gray text-lg mb-10 max-w-[350px]'>Discover stylish Nike arrivals, quality, comfort, and innovation for your active life.</p>
            <Button label='Show Now' iconURL={<FaArrowRightLong/>}/>
            <div className="flex flex-row justify-center items-start gap-10 flex-wrap w-full max-w-lg">
                {statistic.map((stat, index)=> (
                    <div key={index}>
                        <p className="text-[35px] font-bold">{stat.value}</p>
                        <p className="text-lg font-light">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div >
        <div className="flex justify-center items-center bg-primary bg-hero">
            <img src={bigshoe1} alt="shoe hero" width={600} height={500}/>
        </div>
    </section>
  )
}

export default Hero