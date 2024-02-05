import bigShoe2 from "../assets/images/big-shoe2.png"

const PopularProduct = () => {
  return (
    <section
    id='popularProduct'
    className='w-full flex flex-col justify-center gap-10 max-container'
    >
      <div className="flex flex-col justify-center w-full px-8 py-24 md:py-26 gap-5" >
        <div className='flex flex-col justify-start gap-5'>
          <h1 className='text-4xl font-bold'>Our <span className='text-coral-red'>Popular</span> Products</h1>
          <p className='text-lg text-slate-600 max-w-lg mb-6'>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex flex-col justify-start">
              <img 
              src={bigShoe2}
              alt="bigShoe2"
              width={200}
              height={150}
              className="border p-4 bg-primary rounded-lg" />
                <h2 className="font-semibold text-lg mt-6 font-montserrat">Nike Air Jordan-01</h2>
                <p className="font-bold text-2xl text-coral-red mt-1">$200.20</p>

          </div>
          <div className="flex flex-col justify-start">
              <img 
              src={bigShoe2}
              alt="bigShoe2"
              width={200}
              height={150}
              className="border p-4 bg-primary rounded-lg" />
            <h2 className="font-semibold text-lg mt-6 font-montserrat">Nike Air Jordan-01</h2>
            <p className="font-bold text-2xl text-coral-red mt-1">$200.20</p>
          </div>
          <div className="flex flex-col justify-start">
              <img 
              src={bigShoe2}
              alt="bigShoe2"
              width={200}
              height={150}
              className="border p-4 bg-primary rounded-lg" />
            <h2 className="font-semibold text-lg  mt-6 font-montserrat">Nike Air Jordan-01</h2>
            <p className="font-bold text-2xl text-coral-red mt-1">$200.20</p>
          </div>
          <div className="flex flex-col justify-start">
              <img 
              src={bigShoe2}
              alt="bigShoe2"
              width={200}
              height={150}
              className="border p-4 bg-primary rounded-lg" />
            <h2 className="font-semibold text-lg  mt-6 font-montserrat">Nike Air Jordan-01</h2>
            <p className="font-bold text-2xl text-coral-red mt-1">$200.20</p>
          </div>
          <div className="flex flex-col justify-start">
              <img 
              src={bigShoe2}
              alt="bigShoe2"
              width={200}
              height={150}
              className="border p-4 bg-primary rounded-lg" />
            <h2 className="font-semibold text-lg  mt-6 font-montserrat">Nike Air Jordan-01</h2>
            <p className="font-bold text-2xl text-coral-red mt-1">$200.20</p>
          </div>
          <div className="flex flex-col justify-start">
              <img 
              src={bigShoe2}
              alt="bigShoe2"
              width={200}
              height={150}
              className="border p-4 bg-primary rounded-lg" />
            <h2 className="font-semibold text-lg  mt-6 font-montserrat">Nike Air Jordan-01</h2>
            <p className="font-bold text-2xl text-coral-red mt-1">$200.20</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default PopularProduct