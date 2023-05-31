"use client";
import React from "react";
import Image from "next/image";

import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600">
        <div className=" relative mx-auto flex md:flex-row flex-col md:items-center md:pt-16">
          <div className="container z-[2] md:flex md:flex-row flex flex-col-reverse justify-center mx-auto md:gap-x-4">
            <div className=" lg:flex-grow md:basis-1/2   flex flex-col md:items-start md:text-left items-center text-center  ">
              {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                I am
                <br className="hidden lg:inline-block" />
                <Typewriter
                  options={{
                    strings: ["Full Stack", "Web Developer", "of Next.js 13"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1> */}
              <h1 className="capitalize pt-6 text-3xl font-extrabold md:inline-flex">i am full stack<div className="text-red-500 pl-2"> developer</div></h1>
              <div className="w-[300px] h-[3px] bg-blue-800 mt-2"></div>
              <p className="mb-8 leading-relaxed text-base font-semibold mt-6">
                I'm professional and skilled to build web applications
                from the front-end to the back-end using Next.js-13, a popular
                React-based web development framework. I strongly understand
                 web development technologies, including HTML, Tailwind_CSS,
                JavaScript, Typescript, React, Node.js, APIs, Postgress,
                Database related libraries and frameworks.
              </p>
              <div className="flex justify-center">
                <Link href={"#Contact"}>
                  <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    Contact
                  </button>
                </Link>
              </div>
            </div>
            <div className="z-[2]  lg:w-full flex justify-center md:basis-1/2 ">
              <Image
                className=" rounded-full"
                alt="hero"
                src="/assests/pictures/profile.jpg"
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
