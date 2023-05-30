import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-green-200">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={"/assests/pictures/coding.jpg"}
              width={80}
              height={100}
              alt="Logo"
              className="rounded-r-full"
            />
            <span className="ml-3 text-xl font-bold">Portfolio</span>
          </a>
          <p className="text-xl text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 Ahmad Bilal Farooqi
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-3">
            <Link
              href={"https://www.facebook.com/profile.php?id=100009794446272"}
              target="_blank"
            >
              <BsFacebook className="text-2xl text-black hover:text-blue-700" />
            </Link>
            <Link
              href={"https://www.youtube.com/channel/UCZa0gz_pt6DX05OxAIvT48w"}
              target="_blank"
            >
              <BsYoutube className="text-2xl text-black hover:text-red-500" />
            </Link>
            <Link href={"https://twitter.com/Ahmadbilal_2"} target="_blank">
              <BsTwitter className="text-2xl text-black hover:text-blue-600" />
            </Link>
            <Link href={"https://www.instagram.com/ahmad_bilal_farooqi/"} target="_blank">
              <BsInstagram className="text-2xl text-black hover:text-orange-600" />
            </Link>
            <Link href={"https://wa.me/message/4CNGN5QXRIYWF1"} target="_blank">
              <BsWhatsapp className="text-2xl text-black hover:text-green-600" />
            </Link>
            <Link href={"https://www.linkedin.com/in/ahmad-bilal-7a1606264/"} target="_blank">
              <BsLinkedin className="text-2xl text-black hover:text-blue-600" />
            </Link>
            <Link href={"https://github.com/ahmadbilal2023"} target="_blank">
              <BsGithub className="text-2xl text-black" />
            </Link>
            <Link href={"https://medium.com/@ahmadbilal20152016"} target="_blank">
              <BsMedium className="text-2xl text-black" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
