import React, { Component } from "react";
import Image from "next/image";
import logo from "assets/images/logo.png";
import CountryDropdown from "./CountryDropdown";
import Account from "./Account";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="absolute z-10 w-full">
        <div className="container mx-auto max-w-[1642px] md:px-10 px-5 h-[87px] flex items-center justify-between">
          <div>
            <Image
              src={logo}
              alt="logo"
              className="w-[199.17px] h-[41.34px] object-contain"
            />
          </div>
          <div className="flex items-center">
            <div>
              <CountryDropdown />
            </div>
            <div>
              <Account />
            </div>
          </div>
        </div>
      </header>
    );
  }
}
