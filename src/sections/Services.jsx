import { FaShippingFast } from "react-icons/fa";

const Services = () => {
  return (
    <section
    id='services'
    className='w-full flex justify-center items-center max-container py-32'>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 '>
        <div className='flex flex-col items-start shadow-xl rounded-lg border px-5 py-8'>
          <div className=" bg-coral-red p-2 rounded-full text-white mb-4"><FaShippingFast/></div>
          <h2 className="text-2xl font-bold mb-3">Free Shipping</h2>
          <p className="">Enjoy seamless shopping with our complimentary shipping services</p>
        </div>
        <div className='flex flex-col items-start shadow-xl rounded-lg border px-5 py-8'>
          <div className=" bg-coral-red p-2 rounded-full text-white mb-4"><FaShippingFast/></div>
          <h2 className="text-2xl font-bold mb-3">Free Shipping</h2>
          <p className="">Enjoy seamless shopping with our complimentary shipping services</p>
        </div>
        <div className='flex flex-col items-start shadow-xl rounded-lg border px-5 py-8'>
          <div className=" bg-coral-red p-2 rounded-full text-white mb-4"><FaShippingFast/></div>
          <h2 className="text-2xl font-bold mb-3">Free Shipping</h2>
          <p className="">Enjoy seamless shopping with our complimentary shipping services</p>
        </div>
      </div>

    </section>
  )
}

export default Services