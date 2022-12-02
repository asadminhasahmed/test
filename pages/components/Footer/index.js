import React, { Component } from "react";
import logo from "assets/images/logo.png";
import Image from "next/image";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { BiGlobe } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="bg-[#000518] bg-contain bg-right bg-no-repeat">
        <div className="container mx-auto max-w-[1244px] md:px-10 px-5 h-full">
          <div className="py-[40px]">
            <div className="grid grid-cols-1 sm:gap-y-0 gap-y-[50px] gap-4 lg:grid-cols-5 sm:grid-cols-3">
              <div className="col-span-1 mb-10 sm:col-span-3 lg:col-span-2 lg:mb-0 lg:pr-20">
                <Image
                  src={logo}
                  alt="logo"
                  className="w-[199.17px] h-[41.34px] object-contain"
                />
                <p className="text-[14px] mt-[20px] mb-[24px] leading-[24px] text-[#D9DBE1]">
                  Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl
                  nunc quam ac sed turpis volutpat. Cursus sed massa non nisi,
                  placerat.
                </p>
                <div className="flex items-center gap-x-[16px]">
                  <div className="w-[24px] h-[24px] bg-[white]/10 rounded-full flex items-center justify-center cursor-pointer">
                    <BsInstagram className="text-white" size={13} />
                  </div>
                  <div className="w-[24px] h-[24px] bg-[white]/10 rounded-full flex items-center justify-center cursor-pointer">
                    <BiGlobe className="text-white" size={13} />
                  </div>
                  <div className="w-[24px] h-[24px] bg-[white]/10 rounded-full flex items-center justify-center cursor-pointer">
                    <BsTwitter className="text-white" size={13} />
                  </div>
                  <div className="w-[24px] h-[24px] bg-[white]/10 rounded-full flex items-center justify-center cursor-pointer">
                    <AiFillYoutube className="text-white" size={13} />
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-white text-[20px] leading-[30px] mb-[24px]">
                  Company
                </h5>
                <div className="flex flex-col space-y-[12px]">
                  <p className="text-[14px] text-[#D9DBE1] leading-[24px] font-light cursor-pointer inline-flex hover:text-[#fff]">
                    About
                  </p>
                  <p className="text-[14px] text-[#D9DBE1] leading-[24px] font-light cursor-pointer inline-flex hover:text-[#fff]">
                    Blog
                  </p>
                  <p className="text-[14px] text-[#D9DBE1] leading-[24px] font-light cursor-pointer inline-flex hover:text-[#fff]">
                    Contact
                  </p>
                  <p className="text-[14px] text-[#D9DBE1] leading-[24px] font-light cursor-pointer inline-flex hover:text-[#fff]">
                    Careers
                  </p>
                </div>
              </div>
              <div>
                <h5 className="text-white text-[20px] leading-[30px] mb-[24px]">
                  Agentbook
                </h5>
                <div className="flex flex-col space-y-[12px]">
                  <p className="text-[14px] text-[#D9DBE1] leading-[24px] font-light cursor-pointer inline-flex hover:text-[#fff]">
                    Search for agent
                  </p>
                  <p className="text-[14px] text-[#D9DBE1] leading-[24px] font-light cursor-pointer inline-flex hover:text-[#fff]">
                    Search for sale
                  </p>
                  <p className="text-[14px] text-[#D9DBE1] leading-[24px] font-light cursor-pointer inline-flex hover:text-[#fff]">
                    FAQ
                  </p>
                </div>
              </div>
              <div>
                <h5 className="text-white text-[20px] leading-[30px] mb-[24px]">
                  Resources
                </h5>
                <div className="flex flex-col space-y-[12px]">
                  <p className="text-[14px] text-[#D9DBE1] leading-[24px] font-light cursor-pointer inline-flex hover:text-[#fff]">
                    Articles
                  </p>
                  <p className="text-[14px] text-[#D9DBE1] leading-[24px] font-light cursor-pointer inline-flex hover:text-[#fff]">
                    Guides
                  </p>
                  <p className="text-[14px] text-[#D9DBE1] leading-[24px] font-light cursor-pointer inline-flex hover:text-[#fff]">
                    Real Estate News
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-[white]/30 w-full" />
          <div className="pt-[40px] pb-[47px]">
            <div className="grid gap-4 lg:grid-cols-2">
              <p className="text-[white]/60 text-[14px] lg:text-left text-center leading-[24px] font-light">
                2022 Agentbook All Rights Reserved
              </p>
              <div>
                <div className="flex flex-row md:gap-x-[40px] sm:gap-x-[20px] gap-x-[10px] lg:justify-end sm:justify-center justify-evenly">
                  <p className="text-[white]/60 cursor-pointer hover:text-[white] text-[14px] leading-[24px] font-light">
                    Terms & Conditions
                  </p>
                  <p className="text-[white]/60 cursor-pointer hover:text-[white] text-[14px] leading-[24px] font-light">
                    Privacy Policy
                  </p>
                  <p className="text-[white]/60 cursor-pointer hover:text-[white] text-[14px] leading-[24px] font-light">
                    Cookie Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
