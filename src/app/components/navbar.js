"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "./../../../public/newlogomeera.png";
export default function Navbar() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const goLogin = () => {
    router.push("/login");
  };
  const goSignup = () => {
    router.push("/signup");
  };

  return (
    <>
      <div className="lg:hidden   absolute right-8 top-5  max-lg:mr-6  ">
        <FontAwesomeIcon
          icon={faBars}
          className="bold  text-black cursor-pointer font-bold text-2xl max-lg:mt-2 transition-transform duration-2000 transform hover:scale-110"
          onClick={toggleMenu}
        />
      </div>

      <nav className="flex items-center justify-between h-20 w-screen px-8 bg-white max-lg:flex-col max-lg:z-10">



      <div className="relative max-md:absolute max-md:h-[75px] max-md:w-[200px]  max-md:left-6 max-md:top-1 lg:mr-10 max-lg:absolute max-lg:h-[75px] max-lg:w-[250px] max-lg:left-[16px] max-lg:top-1 
       lg:h-[80px] lg:w-[300px] lg:left-[10px] lg:top-0 lg:bottom-[150px]
      
      ">
    <Image
      
        src={logo}
        fill={true}
        alt="Logo"
    />
</div>


        <div
          className={`lg:w-9/12 lg:h-screen lg:absolute lg:z-10 lg:left-0 lg:top-20 transition-transform duration-500 ease-in-out transform ${
            isOpen ? "lg:translate-x-300" : "lg:-translate-x-full"
          } px-4 py-2 lg:block`}
        >
          {/* Your content */}
        </div>

        <div
          className={` max-lg:w-9/12 max-lg:h-screen max-lg:absolute max-lg:z-10  max-lg:left-0 max-lg:top-20  transition-transform duration-200 ease-in-out transform ${
            isOpen ? "max-lg:translate-x-300" : "max-lg:-translate-x-full"
          }  px-4 py-2  ${isOpen ? "" : "opacity-none lg:block"}`}
        >
          

          <ul
            className={` flex flex-row w-auto text-center  justify-evenly  w-96 max-lg:flex-col max-lg:bg-gradient-to-br from-white to-[#27AB61] max-lg:absolute max-lg:left-0 max-lg:top-12 max-lg:w-64 max-lg:h-screen max-lg:justify-normal max-lg:text-left transition-transform duration-200 ease-in-out transform max-lg:z-10 ${
              isOpen ? "max-lg:translate-x-300" : "max-lg:-translate-x-full"
            }  px-4 py-2 rounded-r-lg ${isOpen ? "" : "max-lg:none lg:block"}`}
          >

          

<FontAwesomeIcon
            icon={faClose}
            className="bold text-black cursor-pointer font-bold text-2xl lg:hidden  p-2 rounded-md absolute right-1 top-1  transition-transform duration-300 transform hover:scale-110"
            onClick={toggleMenu}
          />



            <li className="m-3 inline-block text-black max-lg:ml-24 hover:text-black max-lg:font-bold ">
              <Link className="font-tittle " href="/">Home</Link>
            </li>
            <li className="m-3 inline-block text-black max-lg:ml-24 hover:text-black">
              <Link className="font-tittle " href="/ourmission">Our Mission</Link>
            </li>
            <li className="m-3 inline-block text-black max-lg:ml-24 hover:text-black">
              <Link className="font-tittle " href="/whatwedo">What We Do</Link>
            </li>
            <li className="m-3 inline-block text-black max-lg:ml-24 hover:text-black">
              <Link className="font-tittle " href="/donate">Donate</Link>
            </li>
            <li className="m-3 inline-block text-black max-lg:ml-24 hover:text-black">
              <Link className="font-tittle " href="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div
          className={` lg:flex w-auto max-lg:mt-56  max-lg:absolute max-lg:top-[180px] max-lg:z-10 max-lg:left-4 transition-transform duration-200 ease-in-out transform ${
            isOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"
          }  px-4 py-2 rounded-lg ${isOpen ? "" : "opacity-none lg:block"}`}
        >
          <button
            className="text-black bg-gradient-to-br from-white to-[#27AB61] px-4 py-2 rounded-lg mr-4 transition-transform  hover:scale-105 "
            onClick={goSignup}
          >
            Sign Up
          </button>
          <button
            className="text-black bg-gradient-to-br from-white to-[#27AB61] px-4 py-2 rounded-lg transition-transform  hover:scale-105"
            onClick={goLogin}
          >
            Login
          </button>
        </div>
      </nav>
    </>
  );
}
