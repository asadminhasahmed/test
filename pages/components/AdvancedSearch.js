import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Hortons from "assets/images/Hortons.png";
import Brampton from "assets/images/Brampton.png";
import Wrigley from "assets/images/Wrigley.png";
import Lorsdky from "assets/images/Lorsdky.png";
import Hollie from "assets/images/Hollie.png";
import Image from "next/image";

export default function AdvancedSearch() {
  return (
    <div className="bg-white relative shadow-[0px_20px_30px_#3b28cc12] md:p-0 p-[10px] w-full md:h-[86px] rounded-[5px] flex md:flex-row flex-col items-center md:pl-[30px] md:pr-[13px] mt-[35px]">
      <div className="flex items-center w-full md:border-0 border rounded-[5px] mb-[10px] md:mb-0 md:px-0 px-3">
        <div>
          <Popover>
            <>
              <Popover.Button className="flex items-center w-full h-full text-white outline-none">
                <svg
                  width="35"
                  height="21"
                  viewBox="0 0 35 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 20L15.514 15.506M18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z"
                    stroke="#9895AB"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1">
                <Popover.Panel className="absolute left-0 z-10 w-full md:w-screen max-w-full md:px-4 md:mt-[40px] mt-[20px] transform sm:px-0 lg:max-w-[64.4rem]">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="bg-white py-[14px] md:px-[50px] px-[10px] border-b">
                      <div className="flex items-center gap-x-[10px] h-[27px]">
                        <FaMapMarkerAlt className="text-[#4B6DF3]" size={18} />
                        <p className="text-[16px] leading-[27px] font-normal text-black">
                          Use my current location
                        </p>
                      </div>
                    </div>
                    <div className="md:px-[50px] px-[10px] py-[25px]  bg-white">
                      <div className="mb-[37px]">
                        <p className="text-[#73757E] text-[16px] font-medium uppercase mb-[24px] leading-[24px]">
                          BY NAME
                        </p>
                        <div
                          className="h-[250px]  overflow-auto"
                          id="white_scrollbar">
                          <div className="flex md:flex-row flex-col md:items-center md:h-[50px] gap-x-[25px] py-[10px] border-b border-[#F0F0F0]">
                            <div className="flex grow items-center md:gap-x-[25px] gap-x-[10px]">
                              <Image
                                src={Hortons}
                                alt="Picture of the author"
                                className="w-[30px] h-[30px] object-contain"
                              />
                              <p className="text-[18px] text-[#231F20] hover:text-[#4B6DF3] cursor-pointer leading-[150%] font-normal lato">
                                Tim Hortons
                              </p>
                            </div>
                            <div className="flex items-center gap-x-[5px] md:ml-0 ml-[40px]">
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
                          <div className="flex md:flex-row flex-col md:items-center md:h-[50px] gap-x-[25px] py-[10px] border-b border-[#F0F0F0]">
                            <div className="flex grow items-center md:gap-x-[25px] gap-x-[10px]">
                              <Image
                                src={Hollie}
                                alt="Picture of the author"
                                className="w-[30px] h-[30px] object-contain"
                              />
                              <p className="text-[18px] text-[#231F20] hover:text-[#4B6DF3] cursor-pointer leading-[150%] font-normal lato">
                                Lydia Hollie
                              </p>
                            </div>
                            <div className="flex items-center gap-x-[5px] md:ml-0 ml-[40px]">
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
                          <div className="flex md:flex-row flex-col md:items-center md:h-[50px] gap-x-[25px] py-[10px] border-b border-[#F0F0F0]">
                            <div className="flex grow items-center md:gap-x-[25px] gap-x-[10px]">
                              <Image
                                src={Lorsdky}
                                alt="Picture of the author"
                                className="w-[30px] h-[30px] object-contain"
                              />
                              <p className="text-[18px] text-[#231F20] hover:text-[#4B6DF3] cursor-pointer leading-[150%] font-normal lato">
                                Dave Lorsdky
                              </p>
                            </div>
                            <div className="flex items-center gap-x-[5px] md:ml-0 ml-[40px]">
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
                          <div className="flex md:flex-row flex-col md:items-center md:h-[50px] gap-x-[25px] py-[10px] border-b border-[#F0F0F0]">
                            <div className="flex grow items-center md:gap-x-[25px] gap-x-[10px]">
                              <Image
                                src={Wrigley}
                                alt="Picture of the author"
                                className="w-[30px] h-[30px] object-contain"
                              />
                              <p className="text-[18px] text-[#231F20] hover:text-[#4B6DF3] cursor-pointer leading-[150%] font-normal lato">
                                Joan Wrigley
                              </p>
                            </div>
                            <div className="flex items-center gap-x-[5px] md:ml-0 ml-[40px]">
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
                          <div className="flex md:flex-row flex-col md:items-center md:h-[50px] gap-x-[25px] py-[10px] border-b border-[#F0F0F0]">
                            <div className="flex grow items-center md:gap-x-[25px] gap-x-[10px]">
                              <Image
                                src={Brampton}
                                alt="Picture of the author"
                                className="w-[30px] h-[30px] object-contain"
                              />
                              <p className="text-[18px] text-[#231F20] hover:text-[#4B6DF3] cursor-pointer leading-[150%] font-normal lato">
                                Tim Brampton
                              </p>
                            </div>
                            <div className="flex items-center gap-x-[5px] md:ml-0 ml-[40px]">
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
                          <div className="flex md:flex-row flex-col md:items-center md:h-[50px] gap-x-[25px] py-[10px] border-b border-[#F0F0F0]">
                            <div className="flex grow items-center md:gap-x-[25px] gap-x-[10px]">
                              <Image
                                src={Brampton}
                                alt="Picture of the author"
                                className="w-[30px] h-[30px] object-contain"
                              />
                              <p className="text-[18px] text-[#231F20] hover:text-[#4B6DF3] cursor-pointer leading-[150%] font-normal lato">
                                Tim Brampton
                              </p>
                            </div>
                            <div className="flex items-center gap-x-[5px] md:ml-0 ml-[40px]">
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
                          <div className="flex md:flex-row flex-col md:items-center md:h-[50px] gap-x-[25px] py-[10px] border-b border-[#F0F0F0]">
                            <div className="flex grow items-center md:gap-x-[25px] gap-x-[10px]">
                              <Image
                                src={Brampton}
                                alt="Picture of the author"
                                className="w-[30px] h-[30px] object-contain"
                              />
                              <p className="text-[18px] text-[#231F20] hover:text-[#4B6DF3] cursor-pointer leading-[150%] font-normal lato">
                                Tim Brampton
                              </p>
                            </div>
                            <div className="flex items-center gap-x-[5px] md:ml-0 ml-[40px]">
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
                          <div className="flex md:flex-row flex-col md:items-center md:h-[50px] gap-x-[25px] py-[10px] border-b border-[#F0F0F0]">
                            <div className="flex grow items-center md:gap-x-[25px] gap-x-[10px]">
                              <Image
                                src={Brampton}
                                alt="Picture of the author"
                                className="w-[30px] h-[30px] object-contain"
                              />
                              <p className="text-[18px] text-[#231F20] hover:text-[#4B6DF3] cursor-pointer leading-[150%] font-normal lato">
                                Tim Brampton
                              </p>
                            </div>
                            <div className="flex items-center gap-x-[5px] md:ml-0 ml-[40px]">
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
                        </div>
                      </div>
                      <div>
                        <p className="text-[#73757E] text-[16px] font-medium mb-[24px] uppercase leading-[24px]">
                          BY Location
                        </p>
                        <div
                          className="h-[250px]  overflow-auto"
                          id="white_scrollbar">
                          <div className="flex items-center h-[45px] border-b border-[#F0F0F0]">
                            <div className="flex grow items-center gap-x-[15px]">
                              <FaMapMarkerAlt className="text-[#62616F] w-[14px] h-[17.82px]" />
                              <p className="text-[18px] text-[#232A43] leading-[150%] font-light">
                                Los Angles, California
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center h-[45px] border-b border-[#F0F0F0]">
                            <div className="flex grow items-center gap-x-[15px]">
                              <FaMapMarkerAlt className="text-[#62616F] w-[14px] h-[17.82px]" />
                              <p className="text-[18px] text-[#232A43] leading-[150%] font-light">
                                Jersey City, New Jersey
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center h-[45px] border-b border-[#F0F0F0]">
                            <div className="flex grow items-center gap-x-[15px]">
                              <FaMapMarkerAlt className="text-[#62616F] w-[14px] h-[17.82px]" />
                              <p className="text-[18px] text-[#232A43] leading-[150%] font-light">
                                Toronto, Ontario
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center h-[45px] border-b border-[#F0F0F0]">
                            <div className="flex grow items-center gap-x-[15px]">
                              <FaMapMarkerAlt className="text-[#62616F] w-[14px] h-[17.82px]" />
                              <p className="text-[18px] text-[#232A43] leading-[150%] font-light">
                                Thompson, Manitoba
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center h-[45px] border-b border-[#F0F0F0]">
                            <div className="flex grow items-center gap-x-[15px]">
                              <FaMapMarkerAlt className="text-[#62616F] w-[14px] h-[17.82px]" />
                              <p className="text-[18px] text-[#232A43] leading-[150%] font-light">
                                Syndney, Nova Scotia
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center h-[45px] border-b border-[#F0F0F0]">
                            <div className="flex grow items-center gap-x-[15px]">
                              <FaMapMarkerAlt className="text-[#62616F] w-[14px] h-[17.82px]" />
                              <p className="text-[18px] text-[#232A43] leading-[150%] font-light">
                                Syndney, Nova Scotia
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center h-[45px] border-b border-[#F0F0F0]">
                            <div className="flex grow items-center gap-x-[15px]">
                              <FaMapMarkerAlt className="text-[#62616F] w-[14px] h-[17.82px]" />
                              <p className="text-[18px] text-[#232A43] leading-[150%] font-light">
                                Syndney, Nova Scotia
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center h-[45px] border-b border-[#F0F0F0]">
                            <div className="flex grow items-center gap-x-[15px]">
                              <FaMapMarkerAlt className="text-[#62616F] w-[14px] h-[17.82px]" />
                              <p className="text-[18px] text-[#232A43] leading-[150%] font-light">
                                Syndney, Nova Scotia
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          </Popover>
        </div>
        <div className="h-[60px] grow">
          <input className="w-full h-full outline-none" />
        </div>
      </div>
      <button className="md:w-[179px] w-full h-[60px] rounded-[5px] bg-[#4B6DF3] text-[18px] text-white leading-[25px]">
        Search Agents
      </button>
    </div>
  );
}
