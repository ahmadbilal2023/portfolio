"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-neutral-300">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I am
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ["Full Stack", "Web Developer", "of Next.js 13"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-[300px] h-[3px] bg-blue-800"></div>
            <p className="mb-8 leading-relaxed mt-2 text-base font-semibold">
              I'm a professional and responsible for building web applications
              from the front-end to the back-end using Next.js-13, a popular
              React-based web development framework. I'm strongly understand of
              web development technologies, including HTML, Tailwind_CSS,
              JavaScript, Typescript, React, Node.js, APIs, Postgress Database,
              and related libraries and frameworks.
            </p>
            <div className="flex justify-center">
              <Link href={"#Contact"}>
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center mx-auto rounded-full"
              alt="hero"
              src="/assests/pictures/profile.jpg"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
