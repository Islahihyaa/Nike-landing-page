import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from 'react-icons/ai';
import { navLink } from "../constants";

const Navbar = () => {

    const [toggle , setToggle] = useState(false)

    function openMenu() {
        setToggle(true)
    }

    function closeMenu() {
        setToggle(false)
    }

  return (
        <section
        id="navbar"
        className="fixed w-full items-center bg-white shadow-sm"
        >
            <div className="flex flex-row justify-between items-center py-6 px-8 md:px-16">
                
                <h1 className="text-coral-red font-extrabold text-2xl">Nike</h1>
                
                <ul className="flex flex-row gap-10 max-md:hidden text-lg text-slate-gray">
                    {navLink.map((item) => (
                        <li key={item.label}>
                            <a 
                            href={item.href}
                            className="hover:text-coral-red">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="max-md:hidden text-lg text-slate-gray">
                    <a href="#">Sign In</a>
                    <span> / </span>
                    <a href="#">Explore Now</a>
                </div>

                <div className="block md:hidden">
                    {toggle ?(
                        <AiOutlineClose onClick={closeMenu} />
                    ) : (
                        < RxHamburgerMenu onClick={openMenu} />
                    )}
                </div>
            </div>
                {toggle ? (
                    <ul className="flex flex-col items-center gap-6 mb-8 text-lg ">
                        {navLink.map((item) => (
                            <li key={item.label}>
                                <a 
                                href={item.href}
                                className="hover:text-coral-red">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div></div>
                )}
        </section>
    )
}

export default Navbar