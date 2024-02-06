import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
        <section
        id="navbar"
        className="fixed w-full items-center bg-white shadow-sm"
        >
            <div className="flex flex-row justify-between items-center py-6 px-8 md:px-16">
                
                <h1 className="text-coral-red font-extrabold text-2xl">Nike</h1>
                
                <ul className="flex flex-row gap-10 max-md:hidden text-lg text-slate-gray">
                    <li className="">Home</li>
                    <li className="">About Us</li>
                    <li className="">Products</li>
                    <li className="">Contact Us</li>
                </ul>

                <div className="max-md:hidden text-lg text-slate-gray">
                    <a href="#">Sign In</a>
                    <span> / </span>
                    <a href="#">Explore Now</a>
                </div>

                <div className="block md:hidden">
                    < RxHamburgerMenu />
                </div>
            </div>
        </section>
    )
}

export default Navbar