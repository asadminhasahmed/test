import { BsSearch } from "react-icons/bs";
import Agents from "assets/images/Agents.png";
import Conversation from "assets/images/Conversation.png";
import Image from "next/image";
import Banner from "components/Banner";
import Post from "components/Post";
import ActiveAgents from "@components/ActiveAgents";
import TopAgents from "@components/TopAgents";
import Pagination from "@components/Pagination";

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
          <TopAgents />
        </div>

        <Pagination className="mt-[80px]" />
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
          <ActiveAgents />
        </div>

        <Pagination className="mt-[80px]" />
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
        </div>
        <Pagination className="mt-[55px]" />
      </section>
    </div>
  );
}
