import bigshoe2 from "../assets/images/big-shoe2.png"

const Offer = () => {
  return (
    <section
    id="offer"
    className="w-full flex flex-col lg:flex-row justify-between max-container p-10">
        <div className='flex flex-col items-start pt-20 md:py-26'>
            <h1 className='font-bold text-4xl mb-6 xl:text-6xl max-w-xl'>We Provide You 
                <span className='text-coral-red'> Super Quality </span> Shoes </h1>
            <p className='text-slate-gray text-lg mb-10 max-w-lg'>Ensuring premium comfort and style, our meticulously crafted footwear
                is designed to elevate your experience, providing you with unmatched
                quality, innovation, and a touch of elegance.</p>
            <p className='text-slate-gray text-lg mb-10 max-w-lg'>Our dedication to detail and excellence ensures your satisfaction</p>
            <button className='rounded-full bg-coral-red py-4 px-8 text-xl text-white flex gap-4 items-center mb-16'>View Details</button>
        </div >

        <div className="flex justify-center items-center">
            <img 
                src={bigshoe2} 
                alt="big shoe 2"
                width={500}
                height={550}
                className="lg:mr-32 bg-primary rounded-xl p-16"/>
        </div>
    </section>
  )
}

export default Offer