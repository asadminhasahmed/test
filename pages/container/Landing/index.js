import { AiFillStar } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Hortons from "assets/images/Hortons.png";
import Brampton from "assets/images/Brampton.png";
import Wrigley from "assets/images/Wrigley.png";
import Lorsdky from "assets/images/Lorsdky.png";
import Hollie from "assets/images/Hollie.png";
import Agents from "assets/images/Agents.png";
import Tim_Hortons from "assets/images/Tim_Hortons.png";
import Lydia_Hollie from "assets/images/Lydia_Hollie.png";
import Dave_Lordsky from "assets/images/Dave_Lordsky.png";
import Conversation from "assets/images/Conversation.png";
import Image from "next/image";
import Banner from "components/Banner";
import Post from "components/Post";

export default function Landing() {
  return (
    <div>
      <Banner />
      <section className="container mx-auto max-w-[1244px] md:px-10 px-5 mt-[58px] mb-[85px]">
        <div className="mb-[49px]">
          <h2 className="text-[35px] font-bold leading-[125%] text-[#232A43] mb-[20px]">
            Toronto's Top Rated Agents
          </h2>
          <p className="text-[20px] mb-[50px] text-[#777A84] font-light leading-[150%]">
            Clients loved working with these agents
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[40px] gap-y-[64px]">
          <div className="flex gap-x-[16px]">
            <div className="shrink-0 lg:mt-3">
              <Image
                src={Hortons}
                alt="Hortons"
                className="w-[112px] h-[112px] rounded-full object-cover"
              />
            </div>
            <div className="grow">
              <div className="flex items-center justify-between mb-[8px]">
                <h6 className="text-[24px] poppins font-medium leading-[36px] text-[#232A43]">
                  Tim Hortons
                </h6>
                <div className="flex items-center gap-x-[5px]">
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <p className="text-[#73757E] text-[14px] leading-[17.5px] font-light">
                    5.0
                  </p>
                </div>
              </div>
              <p className="font-light text-[16px] leading-[24px] text-[#232A43]">
                Tim is a real estate agent at Kaleidico Realty, with over 8
                years of experience. Lynn prides himself in satisfying his
                clients with the...<strong className="underline">More</strong>
              </p>
              <div className="h-[1px] w-full bg-[#F2F2F2] my-[12px]" />
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-[#4B6DF3] text-white rounded-[4px] text-[16px] w-[134px] h-[40px] leading-[24px] flex items-center justify-center">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-x-[16px]">
            <div className="mt-3 shrink-0">
              <Image
                src={Wrigley}
                alt="Wrigley"
                className="w-[112px] h-[112px] rounded-full object-cover"
              />
            </div>
            <div className="grow">
              <div className="flex items-center justify-between mb-[8px]">
                <h6 className="text-[24px] poppins font-medium leading-[36px] text-[#232A43]">
                  Joan Wrigley
                </h6>
                <div className="flex items-center gap-x-[5px]">
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <p className="text-[#73757E] text-[14px] leading-[17.5px] font-light">
                    5.0
                  </p>
                </div>
              </div>
              <p className="font-light text-[16px] leading-[24px] text-[#232A43]">
                Tim is a real estate agent at Kaleidico Realty, with over 8
                years of experience. Lynn prides himself in satisfying his
                clients with the...<strong className="underline">More</strong>
              </p>
              <div className="h-[1px] w-full bg-[#F2F2F2] my-[12px]" />
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-[#4B6DF3] text-white rounded-[4px] text-[16px] w-[134px] h-[40px] leading-[24px] flex items-center justify-center">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-x-[16px]">
            <div className="mt-3 shrink-0">
              <Image
                src={Hollie}
                alt="Hollie"
                className="w-[112px] h-[112px] rounded-full object-cover"
              />
            </div>
            <div className="grow">
              <div className="flex items-center justify-between mb-[8px]">
                <h6 className="text-[24px] poppins font-medium leading-[36px] text-[#232A43]">
                  Lydia Hollie
                </h6>
                <div className="flex items-center gap-x-[5px]">
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <p className="text-[#73757E] text-[14px] leading-[17.5px] font-light">
                    5.0
                  </p>
                </div>
              </div>
              <p className="font-light text-[16px] leading-[24px] text-[#232A43]">
                Tim is a real estate agent at Kaleidico Realty, with over 8
                years of experience. Lynn prides himself in satisfying his
                clients with the...<strong className="underline">More</strong>
              </p>
              <div className="h-[1px] w-full bg-[#F2F2F2] my-[12px]" />
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-[#4B6DF3] text-white rounded-[4px] text-[16px] w-[134px] h-[40px] leading-[24px] flex items-center justify-center">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-x-[16px]">
            <div className="mt-3 shrink-0">
              <Image
                src={Lorsdky}
                alt="Lorsdky"
                className="w-[112px] h-[112px] rounded-full object-cover"
              />
            </div>
            <div className="grow">
              <div className="flex items-center justify-between mb-[8px]">
                <h6 className="text-[24px] poppins font-medium leading-[36px] text-[#232A43]">
                  Dave Lordsky
                </h6>
                <div className="flex items-center gap-x-[5px]">
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <p className="text-[#73757E] text-[14px] leading-[17.5px] font-light">
                    5.0
                  </p>
                </div>
              </div>
              <p className="font-light text-[16px] leading-[24px] text-[#232A43]">
                Tim is a real estate agent at Kaleidico Realty, with over 8
                years of experience. Lynn prides himself in satisfying his
                clients with the...<strong className="underline">More</strong>
              </p>
              <div className="h-[1px] w-full bg-[#F2F2F2] my-[12px]" />
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-[#4B6DF3] text-white rounded-[4px] text-[16px] w-[134px] h-[40px] leading-[24px] flex items-center justify-center">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[80px]">
          <ul className="flex items-center justify-center gap-x-[9px]">
            <li>
              <a
                className="flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[black]/50 leading-[20px] rounded-[4px]"
                href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 feather feather-chevron-left">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </a>
            </li>

            <li>
              <a
                className="flex items-center justify-center bg-[#5072F8]/20 w-[32px] h-[32px] text-[14px] text-[#5072F8] leading-[20px] border border-[#5072F8]/20 rounded-[4px]"
                href="#">
                1
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[black]/50 leading-[20px] border border-[black]/10 rounded-[4px] rounded-[4px]--active"
                href="#">
                2
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[black]/50 leading-[20px] border border-[black]/10 rounded-[4px]"
                href="#">
                3
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[black]/50 leading-[20px] tracking-[3px] rounded-[4px]"
                href="#">
                ...
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[black]/50 leading-[20px] border border-[black]/10 rounded-[4px]"
                href="#">
                6
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[black]/50 leading-[20px] border border-[black]/10 rounded-[4px]"
                href="#">
                7
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[black]/50 leading-[20px] rounded-[4px]"
                href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 feather feather-chevron-right">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-[#FBFCFF] mt-[85.16px]">
        <div className="container mx-auto max-w-[1244px] md:px-10 px-5">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-5">
              <Image
                src={Agents}
                alt="agents"
                className="w-[414px] h-[414px] object-cover mx-auto drop-shadow-[0px-30px-50px-rgba(0,24,68,0.1)] -mt-[16px]"
              />
            </div>
            <div className="lg:col-span-7 col-span-12 lg:mt-[47px] mb-[73px]">
              <p className="text-[14px] font-medium uppercase leading-[21px] text-[#4B6DF3] mb-[3px]">
                CHOOSING YOUR AGENT
              </p>
              <h4 className="text-[35px] font-bold leading-[43.75px] text-[#232A43] mb-[19px]">
                How to choose your agent
              </h4>
              <p className="font-light tex-[#5B6178] text-[18px] leading-[150%] mb-[24px]">
                You should choose an agent you are comfortable working with and
                who you feel has your best interests at heart. In order to make
                a decision, try asking prospective agents the following:
              </p>
              <ul className="flex flex-col space-y-[15px]">
                <li className="text-[18px] font-light leading-[27px] text-[#232A43] relative before:content-[''] before:w-[16px] before:h-[16px] before:absolute before:left-[-32px] before:top-[7px] ml-[32px] before:bg-[#232A43] before:opacity-80 before:rounded-b-[4px]">
                  How and where your property will be advertised
                </li>
                <li className="text-[18px] font-light leading-[27px] text-[#232A43] relative before:content-[''] before:w-[16px] before:h-[16px] before:absolute before:left-[-32px] before:top-[7px] ml-[32px] before:bg-[#232A43] before:opacity-80 before:rounded-b-[4px]">
                  Ask to see examples of their success in selling properties
                  like yours
                </li>
                <li className="text-[18px] font-light leading-[27px] text-[#232A43] relative before:content-[''] before:w-[16px] before:h-[16px] before:absolute before:left-[-32px] before:top-[7px] ml-[32px] before:bg-[#232A43] before:opacity-80 before:rounded-b-[4px]">
                  How often you can expect feedback from the agent while your
                  property is on the marke
                </li>
              </ul>
              <div className="mt-[43px]">
                <button
                  type="button"
                  className="bg-[#4B6DF3] text-white rounded-[5px] text-[18px] h-[51px] w-[182px] leading-[24px] font-extralight flex items-center justify-center">
                  <BsSearch className="w-[14px] h-[14px] mr-[8px]" />
                  Find an agent
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto max-w-[1244px] md:px-10 px-5 mt-[58px] mb-[85px]">
        <div className="mb-[49px]">
          <h2 className="text-[35px] font-bold leading-[125%] text-[#232A43] mb-[20px]">
            Toronto’s Most Active Agents
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[40px] gap-y-[64px]">
          <div className="flex gap-x-[16px]">
            <div className="mt-3 shrink-0">
              <Image
                src={Tim_Hortons}
                alt="Tim_Hortons"
                className="w-[112px] h-[112px] rounded-full object-cover"
              />
            </div>
            <div className="grow">
              <div className="flex items-center justify-between mb-[8px]">
                <h6 className="text-[24px] poppins font-medium leading-[36px] text-[#232A43]">
                  Tim Hortons
                </h6>
                <div className="flex items-center gap-x-[5px]">
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <p className="text-[#73757E] text-[14px] leading-[17.5px] font-light">
                    5.0
                  </p>
                </div>
              </div>
              <p className="font-light text-[16px] leading-[24px] text-[#232A43]">
                Tim is a real estate agent at Kaleidico Realty, with over 8
                years of experience. Lynn prides himself in satisfying his
                clients with the...<strong className="underline">More</strong>
              </p>
              <div className="h-[1px] w-full bg-[#F2F2F2] my-[12px]" />
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-[#4B6DF3] text-white rounded-[4px] text-[16px] w-[134px] h-[40px] leading-[24px] flex items-center justify-center">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-x-[16px]">
            <div className="mt-3 shrink-0">
              <Image
                src={Brampton}
                alt="Brampton"
                className="w-[112px] h-[112px] rounded-full object-cover"
              />
            </div>
            <div className="grow">
              <div className="flex items-center justify-between mb-[8px]">
                <h6 className="text-[24px] poppins font-medium leading-[36px] text-[#232A43]">
                  Joan Wrigley
                </h6>
                <div className="flex items-center gap-x-[5px]">
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <p className="text-[#73757E] text-[14px] leading-[17.5px] font-light">
                    5.0
                  </p>
                </div>
              </div>
              <p className="font-light text-[16px] leading-[24px] text-[#232A43]">
                Tim is a real estate agent at Kaleidico Realty, with over 8
                years of experience. Lynn prides himself in satisfying his
                clients with the...<strong className="underline">More</strong>
              </p>
              <div className="h-[1px] w-full bg-[#F2F2F2] my-[12px]" />
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-[#4B6DF3] text-white rounded-[4px] text-[16px] w-[134px] h-[40px] leading-[24px] flex items-center justify-center">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-x-[16px]">
            <div className="mt-3 shrink-0">
              <Image
                src={Lydia_Hollie}
                alt="Lydia_Hollie"
                className="w-[112px] h-[112px] rounded-full object-cover"
              />
            </div>
            <div className="grow">
              <div className="flex items-center justify-between mb-[8px]">
                <h6 className="text-[24px] poppins font-medium leading-[36px] text-[#232A43]">
                  Lydia Hollie
                </h6>
                <div className="flex items-center gap-x-[5px]">
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <p className="text-[#73757E] text-[14px] leading-[17.5px] font-light">
                    5.0
                  </p>
                </div>
              </div>
              <p className="font-light text-[16px] leading-[24px] text-[#232A43]">
                Tim is a real estate agent at Kaleidico Realty, with over 8
                years of experience. Lynn prides himself in satisfying his
                clients with the...<strong className="underline">More</strong>
              </p>
              <div className="h-[1px] w-full bg-[#F2F2F2] my-[12px]" />
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-[#4B6DF3] text-white rounded-[4px] text-[16px] w-[134px] h-[40px] leading-[24px] flex items-center justify-center">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-x-[16px]">
            <div className="mt-3 shrink-0">
              <Image
                src={Dave_Lordsky}
                alt="Dave_Lordsky"
                className="w-[112px] h-[112px] rounded-full object-cover"
              />
            </div>
            <div className="grow">
              <div className="flex items-center justify-between mb-[8px]">
                <h6 className="text-[24px] poppins font-medium leading-[36px] text-[#232A43]">
                  Dave Lordsky
                </h6>
                <div className="flex items-center gap-x-[5px]">
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
                  <p className="text-[#73757E] text-[14px] leading-[17.5px] font-light">
                    5.0
                  </p>
                </div>
              </div>
              <p className="font-light text-[16px] leading-[24px] text-[#232A43]">
                Tim is a real estate agent at Kaleidico Realty, with over 8
                years of experience. Lynn prides himself in satisfying his
                clients with the...<strong className="underline">More</strong>
              </p>
              <div className="h-[1px] w-full bg-[#F2F2F2] my-[12px]" />
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-[#4B6DF3] text-white rounded-[4px] text-[16px] w-[134px] h-[40px] leading-[24px] flex items-center justify-center">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[80px]">
          <ul className="flex items-center justify-center gap-x-[9px]">
            <li>
              <a
                className="flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[black]/50 leading-[20px] rounded-[4px]"
                href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 feather feather-chevron-left">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </a>
            </li>

            <li>
              <a
                className="flex items-center justify-center bg-[#5072F8]/20 w-[32px] h-[32px] text-[14px] text-[#5072F8] leading-[20px] border border-[#5072F8]/20 rounded-[4px]"
                href="#">
                1
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[black]/50 leading-[20px] border border-[black]/10 rounded-[4px] rounded-[4px]--active"
                href="#">
                2
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[black]/50 leading-[20px] border border-[black]/10 rounded-[4px]"
                href="#">
                3
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[black]/50 leading-[20px] tracking-[3px] rounded-[4px]"
                href="#">
                ...
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[black]/50 leading-[20px] border border-[black]/10 rounded-[4px]"
                href="#">
                6
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[black]/50 leading-[20px] border border-[black]/10 rounded-[4px]"
                href="#">
                7
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[black]/50 leading-[20px] rounded-[4px]"
                href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 feather feather-chevron-right">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-[#12182D]  py-[35px]">
        <div className="container mx-auto max-w-[1244px] md:px-10 px-5">
          <div className="grid gap-5 xl:grid-cols-2">
            <div>
              <h2 className="text-[35px] font-medium leading-[52.5px] text-[#FFFFFF]">
                Connect with an expert local agent
              </h2>
              <p className="text-[16px] font-light leading-[24px] text-[#FFFFFF] mt-[9px]">
                Our agents are here to help you. Let’s make your home search or
                sale easier.
              </p>
            </div>
            <div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name or location"
                  className="font-extralight text-[16px] text-[#73757E] leading-[24px] placeholder:text-[#73757E] placeholder:text-[16px] bg-white border border-white rounded-[4px] h-[56px] w-full focus-visible:outline-0 pl-[24px]"
                />
                <button
                  type="button"
                  className="bg-[#4B6DF3] text-white rounded-l-0 rounded-r-[4px] text-[16px] w-[80px] leading-[24px] px-3 flex items-center justify-center absolute right-[1px] top-[1px] bottom-[1px]">
                  <BsSearch className="w-[24px] h-[24px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FBFCFF] pt-[100px] pb-[51px]">
        <div className="container mx-auto max-w-[1244px] md:px-10 px-5">
          <div className="grid grid-cols-12 gap-5">
            <div className="order-2 col-span-12 lg:col-span-7 lg:order-1">
              <p className="text-[16px] font-normal leading-[24px] text-[#4B6DF3] mb-[6px]">
                CHAT WITH AN AGENT
              </p>
              <h4 className="text-[35px] font-bold leading-[43.75px] text-[#232A43] mb-[13px]">
                Real Time Conversation
              </h4>
              <p className="font-light tex-[#5B6178] text-[18px] leading-[150%] mb-[47px]">
                You should choose an agent you are comfortable working with and
                who you feel has your best interests at heart. you should be
                able to get your best agent by considering the following simple
                steps:
              </p>
              <ul className="flex flex-col space-y-[15px]">
                <li className="text-[18px] font-light leading-[27px] text-[#232A43] relative before:content-[''] before:w-[16px] before:h-[16px] before:absolute before:left-[-32px] before:top-[7px] ml-[32px] before:bg-[#232A43] before:opacity-80 before:rounded-b-[4px]">
                  Search for an agent by name or location
                </li>
                <li className="text-[18px] font-light leading-[27px] text-[#232A43] relative before:content-[''] before:w-[16px] before:h-[16px] before:absolute before:left-[-32px] before:top-[7px] ml-[32px] before:bg-[#232A43] before:opacity-80 before:rounded-b-[4px]">
                  Filter the results base on your interests
                </li>
                <li className="text-[18px] font-light leading-[27px] text-[#232A43] relative before:content-[''] before:w-[16px] before:h-[16px] before:absolute before:left-[-32px] before:top-[7px] ml-[32px] before:bg-[#232A43] before:opacity-80 before:rounded-b-[4px]">
                  Select and contact your best match agent
                </li>
              </ul>
              <div className="mt-[30px]">
                <button
                  type="button"
                  className="bg-[#4B6DF3] text-white rounded-[5px] text-[18px] h-[51px] w-[182px] leading-[24px] font-extralight flex items-center justify-center">
                  <BsSearch className="w-[14px] h-[14px] mr-[8px]" />
                  Find an agent
                </button>
              </div>
            </div>
            <div className="order-1 col-span-12 lg:col-span-5 lg:order-2">
              <Image
                src={Conversation}
                alt="Conversation"
                className="md:w-[498.46px] w-full h-[540px] lg:object-cover object-contain mx-auto drop-shadow-[0px-30px-50px-rgba(0,24,68,0.1)]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto max-w-[1244px] md:px-10 px-5 mt-[84px] mb-[86.5px]">
        <h2 className="text-[35px] font-bold leading-[43.75px] text-[#232A43] mb-[56.54px]">
          Latest Articles by Agents
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[40px] gap-y-[80px]">
          <Post />
          <Post />
          <Post />
        </div>
        <div className="mt-[55px]">
          <ul className="flex items-center justify-center gap-x-[9px]">
            <li>
              <a
                className="flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[black]/50 leading-[20px] rounded-[4px]"
                href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 feather feather-chevron-left">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </a>
            </li>

            <li>
              <a
                className="flex items-center justify-center bg-[#5072F8]/20 w-[32px] h-[32px] text-[14px] text-[#5072F8] leading-[20px] border border-[#5072F8]/20 rounded-[4px]"
                href="#">
                1
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[black]/50 leading-[20px] border border-[black]/10 rounded-[4px] rounded-[4px]--active"
                href="#">
                2
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[black]/50 leading-[20px] border border-[black]/10 rounded-[4px]"
                href="#">
                3
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[black]/50 leading-[20px] tracking-[3px] rounded-[4px]"
                href="#">
                ...
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[black]/50 leading-[20px] border border-[black]/10 rounded-[4px]"
                href="#">
                6
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[black]/50 leading-[20px] border border-[black]/10 rounded-[4px]"
                href="#">
                7
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[black]/50 leading-[20px] rounded-[4px]"
                href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 feather feather-chevron-right">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
