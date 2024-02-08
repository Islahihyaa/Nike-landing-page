import bigshoe2 from "../assets/images/big-shoe2.png"
import Button from "../components/Button"

const Offer = () => {
  return (
    <section
    id="offer"
    className="w-full flex flex-col lg:flex-row justify-between max-container p-10">
        <div className='flex flex-col flex-1 items-start pt-20 md:py-26'>
            <h1 className='font-bold text-4xl mb-6 xl:text-6xl max-w-xl'>We Provide You 
                <span className='text-coral-red'> Super Quality </span> Shoes </h1>
            <p className='text-slate-gray text-lg mb-10 max-w-lg'>Ensuring premium comfort and style, our meticulously crafted footwear
                is designed to elevate your experience, providing you with unmatched
                quality, innovation, and a touch of elegance.</p>
            <p className='text-slate-gray text-lg mb-10 max-w-lg'>Our dedication to detail and excellence ensures your satisfaction</p>
            <Button label='View Details'/>
        </div >

        <div className="flex flex-1 justify-center items-center">
            <img 
                src={bigshoe2} 
                alt="big shoe 2"
                width={500}
                height={450}
                className="bg-primary rounded-xl p-16"/>
        </div>
    </section>
  )
}

export default Offer