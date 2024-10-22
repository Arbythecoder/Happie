import React from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import happielogo from "../assets/happie-transparent-logo.svg";

const Footer = () => {
  return (
    <footer className="relative bg-[#2E2E2E] text-white py-10 px-11">
      <div className="flex gap-20">
        <div className="flex flex-col gap-5 text-xl">
          <h4 className="font-bold">Company</h4>
          <a href="google.com">About us</a>
          <a href="google.com">Contact us</a>
        </div>
        <div className="flex flex-col gap-5 text-xl">
          <h4 className="font-bold">Community</h4>
          <a href="google.com">Blog</a>
          <a href="google.com">Contribute</a>
        </div>
      </div>

      <div className="flex gap-4 mt-10">
        <a href="google.com">
          <img src={github} alt="github logo" />
        </a>
        <a href="google.com">
          <img src={linkedin} alt="linkedin logo" />
        </a>
      </div>

      {/* Brand logo */}
      <div className="absolute bottom-10 right-10 ">
        <img src={happielogo} alt="happie logo" />
      </div>
    </footer>
  );
};

export default Footer;
