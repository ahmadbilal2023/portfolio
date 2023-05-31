import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="bg-slate-100 sticky top-0 z-10">
      <header className=" body-font">
        <div className=" container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={"/assests/pictures/ahmad.jpg"}
              width={50}
              height={100}
              alt="Logo"
              className="rounded-s-full"
            />
            <span className="ml-3 text-xl font-bold">Ahmad Bilal Farooqi</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href={"/"}
              className="mr-5 hover:text-green-900 font-semibold"
            >
              Home
            </Link>
            <Link
              href={"#about"}
              className="mr-5 hover:text-green-900 font-semibold"
            >
              About
            </Link>
            <Link
              href={"#skills"}
              className="mr-5 hover:text-green-900 font-semibold"
            >
              Skills
            </Link>
            <Link
              href={"#project"}
              className="mr-5 hover:text-green-900 font-semibold"
            >
              Projects
            </Link>
            <Link
              href={"#Contact"}
              className="mr-5 hover:text-green-900 font-semibold"
            >
              Contact
            </Link>
          </nav>
          <a href="/assests/cv/cv.pdf" target="_blank">
            <button className="text-xl inline-flex items-center bg-blue-950 border-0 py-1 px-3 focus:outline-none hover:bg-green-900 rounded text-white mt-4 md:mt-0 gap-5">
              Download CV
              <BsFillArrowDownCircleFill />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
