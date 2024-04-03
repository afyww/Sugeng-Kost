"use client";
import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };
    return (
        <section>
            <div className=''></div>
            <nav className="fixed rounded-b-3xl z-50 bg-white top-0 p-3 right-0 left-0 mx-auto">
                <div className="mx-0 xl:mx-7 px-4">
                    <div className="flex justify-between">
                        <div>
                            <a href="/" className="flex items-center py-4 px-3 text-black">
                                <span className="font-extrabold text-black font-sans text-4xl">Sugeng Kost</span>
                            </a>
                        </div>
                        <div className="hidden items-center md:flex xl:flex text-black">
                            <a href="#home" onClick={closeMobileMenu} className="px-5 text-xl font-base hover:underline">Home</a>
                            <a href="#about" onClick={closeMobileMenu} className="px-5 text-xl font-base hover:underline">About</a>
                            <a href="#contact" onClick={closeMobileMenu} className="px-5 text-xl font-base hover:underline">Contact</a>
                            <a href="#location" onClick={closeMobileMenu} className="px-5 text-xl font-base hover:underline">Location</a>
                            <a href="" onClick={closeMobileMenu} className="px-5 bg-black text-xl font-base hover:underline p-2 rounded-xl text-white">Daftar/Masuk</a>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="100px"
                                    height="100px">
                                    <path
                                        d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`mobile-menu md:hidden xl:hidden text-black ${isMobileMenuOpen ? '' : 'hidden'}`}>
                    <a href="#home" onClick={closeMobileMenu} className="block py-3 px-5 text-sm hover:bg-black rounded-xl">Home</a>
                    <a href="#about" onClick={closeMobileMenu} className="block py-3 px-5 text-sm hover:bg-black rounded-xl">About</a>
                    <a href="#contact" onClick={closeMobileMenu} className="block py-3 px-5 text-sm hover:bg-black rounded-xl">Contact</a>
                    <a href="#location" onClick={closeMobileMenu} className="block py-3 px-5 text-sm hover:bg-black rounded-xl">Location</a>
                    <a href="" onClick={closeMobileMenu} className="block bg-black text-center text-sm p-2 rounded-xl text-white">Daftar/Masuk</a>
                </div>
            </nav>
        </section>

    )
}

export default Navbar