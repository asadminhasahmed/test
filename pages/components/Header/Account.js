import React, { Component } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FiMenu } from "react-icons/fi";
import Hollie from "assets/images/Hollie.png";
import { FaUser } from "react-icons/fa";

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex items-center border border-[white]/80 gap-x-[20px] justify-center w-[95px] h-[44px] bg-transparent rounded-[5px]">
            <FiMenu className="w-[18px] h-[18.86px] text-white" />
            <Image
              src={Hollie}
              alt="Hollie"
              className="w-[25px] h-[25px] object-contain"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 w-[220px] overflow-hidden mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                <button className="flex items-center w-full h-[44.78px] px-[20px] text-[14px] text-[#232A43] hover:text-[#4B6DF3] leading-[10px] font-normal">
                  <FaUser className="mr-[10px] w-[14px] h-[14.78px]" />
                  My Profile
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="flex items-center w-full h-[44.78px] px-[20px] text-[14px] text-[#232A43] hover:text-[#4B6DF3] group leading-[10px] font-normal">
                  <svg
                    className="mr-[10px] text-[#232A43]"
                    width="13"
                    height="16"
                    viewBox="0 0 13 16"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8333 5.8329H12.2778C12.4693 5.8329 12.653 5.90899 12.7885 6.04443C12.9239 6.17988 13 6.36358 13 6.55512V15.2218C13 15.4133 12.9239 15.597 12.7885 15.7325C12.653 15.8679 12.4693 15.944 12.2778 15.944H0.722222C0.530677 15.944 0.346977 15.8679 0.211534 15.7325C0.076091 15.597 0 15.4133 0 15.2218V6.55512C0 6.36358 0.076091 6.17988 0.211534 6.04443C0.346977 5.90899 0.530677 5.8329 0.722222 5.8329H2.16667V5.11068C2.16667 3.96141 2.62321 2.85921 3.43587 2.04655C4.24853 1.23389 5.35073 0.777344 6.5 0.777344C7.64927 0.777344 8.75147 1.23389 9.56413 2.04655C10.3768 2.85921 10.8333 3.96141 10.8333 5.11068V5.8329ZM9.38889 5.8329V5.11068C9.38889 4.3445 9.08453 3.6097 8.54275 3.06792C8.00098 2.52615 7.26618 2.22179 6.5 2.22179C5.73382 2.22179 4.99902 2.52615 4.45725 3.06792C3.91548 3.6097 3.61111 4.3445 3.61111 5.11068V5.8329H9.38889ZM5.77778 10.1662V11.6107H7.22222V10.1662H5.77778ZM2.88889 10.1662V11.6107H4.33333V10.1662H2.88889ZM8.66667 10.1662V11.6107H10.1111V10.1662H8.66667Z"
                      className="mr-[10px] fill-[#232A43] group-hover:fill-[#4B6DF3]"
                    />
                  </svg>
                  Change Password
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="flex items-center w-full h-[44.78px] px-[20px] text-[14px] text-[#F2765D] hover:bg-[#F2765D] hover:text-[white] group leading-[10px] font-normal">
                  <svg
                    className="mr-[10px]"
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.9615 7.29158C10.9615 7.13857 10.9007 6.99182 10.7925 6.88363C10.6843 6.77543 10.5375 6.71465 10.3845 6.71465H5.19213V2.96458C5.19213 1.81071 6.41054 0.945312 7.49987 0.945312H12.9807C13.5161 0.945885 14.0294 1.15881 14.4079 1.53737C14.7865 1.91594 14.9994 2.42921 15 2.96458V11.6186C14.9994 12.1539 14.7865 12.6672 14.4079 13.0458C14.0294 13.4243 13.5161 13.6373 12.9807 13.6378H7.2114C6.67603 13.6373 6.16276 13.4243 5.78419 13.0458C5.40563 12.6672 5.19271 12.1539 5.19213 11.6186V7.86851H10.3845C10.5375 7.86851 10.6843 7.80773 10.7925 7.69953C10.9007 7.59134 10.9615 7.44459 10.9615 7.29158ZM0.168846 6.88376L3.05351 3.99909C3.16259 3.89546 3.30783 3.83855 3.45827 3.84047C3.60872 3.8424 3.75245 3.90302 3.85884 4.0094C3.96523 4.11579 4.02585 4.25953 4.02777 4.40997C4.0297 4.56041 3.97278 4.70566 3.86915 4.81473L1.9696 6.71465H5.19213V7.86851H1.9696L3.86915 9.76843C3.92498 9.82147 3.96963 9.88515 4.00046 9.95572C4.03129 10.0263 4.04768 10.1023 4.04866 10.1793C4.04965 10.2563 4.03521 10.3327 4.0062 10.4041C3.97718 10.4754 3.93418 10.5402 3.87973 10.5946C3.82528 10.6491 3.76048 10.6921 3.68914 10.7211C3.61781 10.7501 3.54139 10.7646 3.46439 10.7636C3.38739 10.7626 3.31137 10.7462 3.2408 10.7154C3.17023 10.6845 3.10655 10.6399 3.05351 10.5841L0.168846 7.6994C0.0607319 7.59122 -9.53674e-07 7.44453 -9.53674e-07 7.29158C-9.53674e-07 7.13863 0.0607319 6.99195 0.168846 6.88376Z"
                      className="mr-[10px] fill-[#F2765D] group-hover:fill-[white]"
                    />
                  </svg>
                  Logout
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  }
}
