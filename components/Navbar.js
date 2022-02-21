import React, { useState } from 'react';
import {Transition} from "@headlessui/react"; //for smooth transition between tabs
import {Link} from "react-scroll"; //Alternate for a tag. In Next js we use link for ref

function Navbar() {
    // useState is used to change the state for start it false means when we click then only its open otherwise not.
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            {/* for Main Nav container */}
            <nav className="shadow-sm fixed w-full z-10">
                <div className="w-full">
                    <div className="flex items-center h-20 w-full">

                        {/* first block section outer part */}
                        <div className="flex items items-center mx-20 justify-between w-full">
                            <div className="flex justify-center items-center flex-shrink-0">
                                <h1 className="font-bold text-x1 cursor-pointer">
                                Stream<span className="text-blue-500">line</span>
                                </h1>                                                                
                            </div>

                            {/* for small screen we do not show tabs that's why written hidden and on medium device i.e. md we want them as block */}
                            <div className="hidden md:block">

                                <div className="ml-10 flex items-baseline space-x-4">
                                    {/* link carry some of the properties like - 
                                    activeClass i.e on current page,
                                    to i.e on about page if there,
                                    smooth i.e transition between tabs,
                                    offset i.e time interval transition,
                                    duration i.e how much time it will change */}
                                    <Link 
                                    activeClass="Home"
                                    to="home"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black rounded-md text-sm font-medium"
                                    >
                                    Home
                                    </Link>

                                    <Link 
                                    activeClass="about"
                                    to="about"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-600 text-black-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                    About
                                    </Link>

                                    <Link 
                                    activeClass="service"
                                    to="service"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-600 text-black-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                    Services
                                    </Link>

                                    <Link 
                                    activeClass="contact"
                                    to="service"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer bg-blue-600 text-white px-3 py-2 hover:bg-black rounded-md text-sm font-medium"
                                    >
                                    Contact
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Now we work on mobile responsive */}
                        <div className="mr-10 flex md:hidden">
                            {/* It has some properties like when we click what will happen on mobile */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus: outline-none focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {/* basically i am taking the menu icon from w3 website */}
                                {/* here d is the shape code */}
                                {!isOpen ? (
                                    <svg 
                                        className="block h-6 w-6" 
                                        xmlns="http:www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor" 
                                        aria-hidden="true"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M4 6h16M4 12h16M4 18h16" // for menu shape
                                        />
                                    </svg>
                                ):(
                                    <svg 
                                        className="block h-6 w-6" 
                                        xmlns="http:www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor" 
                                        aria-hidden="true"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M6 18L18 6M6 6l12 12"  // for cross shape
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar