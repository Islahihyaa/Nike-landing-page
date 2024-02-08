import { offer } from "../assets/images";
import Button from "../components/Button";

const ShopNow = () => {
  return (
    <section
    id="shopnow"
    className="flex flex-col justify-between items-center px-8 mb-10 gap-10 max-container lg:flex-row">   
        
        <img
        src={offer}
        alt='Shoe Promotion'
        width={773}
        height={687}
        className='object-contain w-full mb-10'
        />

        <div className="flex flex-col items-start justify-center">
            <h1 className="text-4xl font-bold mb-8"><span className="text-coral-red">Special</span> Offer</h1>
            <p className="text-slate-gray mb-4 text-lg">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
            
            <p className="text-slate-gray mb-6 text-lg">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
            <div className="flex flex-wrap gap-6">
                <Button label='View Details' />
                <Button label='Learn More' />
            </div>
        </div>
    </section>
  )
}

export default ShopNow