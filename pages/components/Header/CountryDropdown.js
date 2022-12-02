import React, { Component } from "react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import "country-flag-icons/3x2/flags.css";
import { Combobox } from "@headlessui/react";
import { BsSearch } from "react-icons/bs";

const allCountries = [
  {
    name: "Afghanistan",
    iso: "AF",
  },
  {
    name: "Åland",
    iso: "AX",
  },
  {
    name: "Albania",
    iso: "AL",
  },
  {
    name: "Algeria",
    iso: "DZ",
  },
  {
    name: "American Samoa",
    iso: "AS",
  },
  {
    name: "Andorra",
    iso: "AD",
  },
  {
    name: "Angola",
    iso: "AO",
  },
  {
    name: "Anguilla",
    iso: "AI",
  },
  {
    name: "Antigua and Barbuda",
    iso: "AG",
  },
  {
    name: "Argentina",
    iso: "AR",
  },
  {
    name: "Armenia",
    iso: "AM",
  },
  {
    name: "Aruba",
    iso: "AW",
  },
  {
    name: "Australia",
    iso: "AU",
  },
  {
    name: "Austria",
    iso: "AT",
  },
  {
    name: "Azerbaijan",
    iso: "AZ",
  },
  {
    name: "Bahamas",
    iso: "BS",
  },
  {
    name: "Bahrain",
    iso: "BH",
  },
  {
    name: "Bangladesh",
    iso: "BD",
  },
  {
    name: "Barbados",
    iso: "BB",
  },
  {
    name: "Belarus",
    iso: "BY",
  },
  {
    name: "Belgium",
    iso: "BE",
  },
  {
    name: "Belize",
    iso: "BZ",
  },
  {
    name: "Benin",
    iso: "BJ",
  },
  {
    name: "Bermuda",
    iso: "BM",
  },
  {
    name: "Bhutan",
    iso: "BT",
  },
  {
    name: "Bolivia",
    iso: "BO",
  },
  {
    name: "Bonaire",
    iso: "BQ",
  },
  {
    name: "Bosnia and Herzegovina",
    iso: "BA",
  },
  {
    name: "Botswana",
    iso: "BW",
  },
  {
    name: "Bouvet Island",
    iso: "BV",
  },
  {
    name: "Brazil",
    iso: "BR",
  },
  {
    name: "British Indian Ocean Territory",
    iso: "IO",
  },
  {
    name: "British Virgin Islands",
    iso: "VG",
  },
  {
    name: "Brunei",
    iso: "BN",
  },
  {
    name: "Bulgaria",
    iso: "BG",
  },
  {
    name: "Burkina Faso",
    iso: "BF",
  },
  {
    name: "Burundi",
    iso: "BI",
  },
  {
    name: "Cambodia",
    iso: "KH",
  },
  {
    name: "Cameroon",
    iso: "CM",
  },
  {
    name: "Canada",
    iso: "CA",
  },
  {
    name: "Cape Verde",
    iso: "CV",
  },
  {
    name: "Cayman Islands",
    iso: "KY",
  },
  {
    name: "Central African Republic",
    iso: "CF",
  },
  {
    name: "Chad",
    iso: "TD",
  },
  {
    name: "Chile",
    iso: "CL",
  },
  {
    name: "China",
    iso: "CN",
  },
  {
    name: "Christmas Island",
    iso: "CX",
  },
  {
    name: "Cocos [Keeling] Islands",
    iso: "CC",
  },
  {
    name: "Colombia",
    iso: "CO",
  },
  {
    name: "Comoros",
    iso: "KM",
  },
  {
    name: "Cook Islands",
    iso: "CK",
  },
  {
    name: "Costa Rica",
    iso: "CR",
  },
  {
    name: "Croatia",
    iso: "HR",
  },
  {
    name: "Cuba",
    iso: "CU",
  },
  {
    name: "Curacao",
    iso: "CW",
  },
  {
    name: "Cyprus",
    iso: "CY",
  },
  {
    name: "Czech Republic",
    iso: "CZ",
  },
  {
    name: "Democratic Republic of the Congo",
    iso: "CD",
  },
  {
    name: "Denmark",
    iso: "DK",
  },
  {
    name: "Djibouti",
    iso: "DJ",
  },
  {
    name: "Dominica",
    iso: "DM",
  },
  {
    name: "Dominican Republic",
    iso: "DO",
  },
  {
    name: "East Timor",
    iso: "TL",
  },
  {
    name: "Ecuador",
    iso: "EC",
  },
  {
    name: "Egypt",
    iso: "EG",
  },
  {
    name: "El Salvador",
    iso: "SV",
  },
  {
    name: "Equatorial Guinea",
    iso: "GQ",
  },
  {
    name: "Eritrea",
    iso: "ER",
  },
  {
    name: "Estonia",
    iso: "EE",
  },
  {
    name: "Ethiopia",
    iso: "ET",
  },
  {
    name: "Falkland Islands",
    iso: "FK",
  },
  {
    name: "Faroe Islands",
    iso: "FO",
  },
  {
    name: "Fiji",
    iso: "FJ",
  },
  {
    name: "Finland",
    iso: "FI",
  },
  {
    name: "France",
    iso: "FR",
  },
  {
    name: "French Guiana",
    iso: "GF",
  },
  {
    name: "French Polynesia",
    iso: "PF",
  },
  {
    name: "French Southern Territories",
    iso: "TF",
  },
  {
    name: "Gabon",
    iso: "GA",
  },
  {
    name: "Gambia",
    iso: "GM",
  },
  {
    name: "Georgia",
    iso: "GE",
  },
  {
    name: "Germany",
    iso: "DE",
  },
  {
    name: "Ghana",
    iso: "GH",
  },
  {
    name: "Gibraltar",
    iso: "GI",
  },
  {
    name: "Greece",
    iso: "GR",
  },
  {
    name: "Greenland",
    iso: "GL",
  },
  {
    name: "Grenada",
    iso: "GD",
  },
  {
    name: "Guadeloupe",
    iso: "GP",
  },
  {
    name: "Guam",
    iso: "GU",
  },
  {
    name: "Guatemala",
    iso: "GT",
  },
  {
    name: "Guernsey",
    iso: "GG",
  },
  {
    name: "Guinea",
    iso: "GN",
  },
  {
    name: "Guinea-Bissau",
    iso: "GW",
  },
  {
    name: "Guyana",
    iso: "GY",
  },
  {
    name: "Haiti",
    iso: "HT",
  },
  {
    name: "Heard Island and McDonald Islands",
    iso: "HM",
  },
  {
    name: "Honduras",
    iso: "HN",
  },
  {
    name: "Hong Kong",
    iso: "HK",
  },
  {
    name: "Hungary",
    iso: "HU",
  },
  {
    name: "Iceland",
    iso: "IS",
  },
  {
    name: "India",
    iso: "IN",
  },
  {
    name: "Indonesia",
    iso: "ID",
  },
  {
    name: "Iran",
    iso: "IR",
  },
  {
    name: "Iraq",
    iso: "IQ",
  },
  {
    name: "Ireland",
    iso: "IE",
  },
  {
    name: "Isle of Man",
    iso: "IM",
  },
  {
    name: "Israel",
    iso: "IL",
  },
  {
    name: "Italy",
    iso: "IT",
  },
  {
    name: "Ivory Coast",
    iso: "CI",
  },
  {
    name: "Jamaica",
    iso: "JM",
  },
  {
    name: "Japan",
    iso: "JP",
  },
  {
    name: "Jersey",
    iso: "JE",
  },
  {
    name: "Jordan",
    iso: "JO",
  },
  {
    name: "Kazakhstan",
    iso: "KZ",
  },
  {
    name: "Kenya",
    iso: "KE",
  },
  {
    name: "Kiribati",
    iso: "KI",
  },
  {
    name: "Kosovo",
    iso: "XK",
  },
  {
    name: "Kuwait",
    iso: "KW",
  },
  {
    name: "Kyrgyzstan",
    iso: "KG",
  },
  {
    name: "Laos",
    iso: "LA",
  },
  {
    name: "Latvia",
    iso: "LV",
  },
  {
    name: "Lebanon",
    iso: "LB",
  },
  {
    name: "Lesotho",
    iso: "LS",
  },
  {
    name: "Liberia",
    iso: "LR",
  },
  {
    name: "Libya",
    iso: "LY",
  },
  {
    name: "Liechtenstein",
    iso: "LI",
  },
  {
    name: "Lithuania",
    iso: "LT",
  },
  {
    name: "Luxembourg",
    iso: "LU",
  },
  {
    name: "Macao",
    iso: "MO",
  },
  {
    name: "Madagascar",
    iso: "MG",
  },
  {
    name: "Malawi",
    iso: "MW",
  },
  {
    name: "Malaysia",
    iso: "MY",
  },
  {
    name: "Maldives",
    iso: "MV",
  },
  {
    name: "Mali",
    iso: "ML",
  },
  {
    name: "Malta",
    iso: "MT",
  },
  {
    name: "Marshall Islands",
    iso: "MH",
  },
  {
    name: "Martinique",
    iso: "MQ",
  },
  {
    name: "Mauritania",
    iso: "MR",
  },
  {
    name: "Mauritius",
    iso: "MU",
  },
  {
    name: "Mayotte",
    iso: "YT",
  },
  {
    name: "Mexico",
    iso: "MX",
  },
  {
    name: "Micronesia",
    iso: "FM",
  },
  {
    name: "Moldova",
    iso: "MD",
  },
  {
    name: "Monaco",
    iso: "MC",
  },
  {
    name: "Mongolia",
    iso: "MN",
  },
  {
    name: "Montenegro",
    iso: "ME",
  },
  {
    name: "Montserrat",
    iso: "MS",
  },
  {
    name: "Morocco",
    iso: "MA",
  },
  {
    name: "Mozambique",
    iso: "MZ",
  },
  {
    name: "Myanmar [Burma]",
    iso: "MM",
  },
  {
    name: "Namibia",
    iso: "NA",
  },
  {
    name: "Nauru",
    iso: "NR",
  },
  {
    name: "Nepal",
    iso: "NP",
  },
  {
    name: "Netherlands",
    iso: "NL",
  },
  {
    name: "New Caledonia",
    iso: "NC",
  },
  {
    name: "New Zealand",
    iso: "NZ",
  },
  {
    name: "Nicaragua",
    iso: "NI",
  },
  {
    name: "Niger",
    iso: "NE",
  },
  {
    name: "Nigeria",
    iso: "NG",
  },
  {
    name: "Niue",
    iso: "NU",
  },
  {
    name: "Norfolk Island",
    iso: "NF",
  },
  {
    name: "North Korea",
    iso: "KP",
  },
  {
    name: "North Macedonia",
    iso: "MK",
  },
  {
    name: "Northern Mariana Islands",
    iso: "MP",
  },
  {
    name: "Norway",
    iso: "NO",
  },
  {
    name: "Oman",
    iso: "OM",
  },
  {
    name: "Pakistan",
    iso: "PK",
  },
  {
    name: "Palau",
    iso: "PW",
  },
  {
    name: "Palestine",
    iso: "PS",
  },
  {
    name: "Panama",
    iso: "PA",
  },
  {
    name: "Papua New Guinea",
    iso: "PG",
  },
  {
    name: "Paraguay",
    iso: "PY",
  },
  {
    name: "Peru",
    iso: "PE",
  },
  {
    name: "Philippines",
    iso: "PH",
  },
  {
    name: "Pitcairn Islands",
    iso: "PN",
  },
  {
    name: "Poland",
    iso: "PL",
  },
  {
    name: "Portugal",
    iso: "PT",
  },
  {
    name: "Puerto Rico",
    iso: "PR",
  },
  {
    name: "Qatar",
    iso: "QA",
  },
  {
    name: "Republic of the Congo",
    iso: "CG",
  },
  {
    name: "Réunion",
    iso: "RE",
  },
  {
    name: "Romania",
    iso: "RO",
  },
  {
    name: "Russia",
    iso: "RU",
  },
  {
    name: "Rwanda",
    iso: "RW",
  },
  {
    name: "Saint Barthélemy",
    iso: "BL",
  },
  {
    name: "Saint Helena",
    iso: "SH",
  },
  {
    name: "Saint Kitts and Nevis",
    iso: "KN",
  },
  {
    name: "Saint Lucia",
    iso: "LC",
  },
  {
    name: "Saint Martin",
    iso: "MF",
  },
  {
    name: "Saint Pierre and Miquelon",
    iso: "PM",
  },
  {
    name: "Saint Vincent and the Grenadines",
    iso: "VC",
  },
  {
    name: "Samoa",
    iso: "WS",
  },
  {
    name: "San Marino",
    iso: "SM",
  },
  {
    name: "São Tomé and Príncipe",
    iso: "ST",
  },
  {
    name: "Saudi Arabia",
    iso: "SA",
  },
  {
    name: "Senegal",
    iso: "SN",
  },
  {
    name: "Serbia",
    iso: "RS",
  },
  {
    name: "Seychelles",
    iso: "SC",
  },
  {
    name: "Sierra Leone",
    iso: "SL",
  },
  {
    name: "Singapore",
    iso: "SG",
  },
  {
    name: "Sint Maarten",
    iso: "SX",
  },
  {
    name: "Slovakia",
    iso: "SK",
  },
  {
    name: "Slovenia",
    iso: "SI",
  },
  {
    name: "Solomon Islands",
    iso: "SB",
  },
  {
    name: "Somalia",
    iso: "SO",
  },
  {
    name: "South Africa",
    iso: "ZA",
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    iso: "GS",
  },
  {
    name: "South Korea",
    iso: "KR",
  },
  {
    name: "South Sudan",
    iso: "SS",
  },
  {
    name: "Spain",
    iso: "ES",
  },
  {
    name: "Sri Lanka",
    iso: "LK",
  },
  {
    name: "Sudan",
    iso: "SD",
  },
  {
    name: "Suriname",
    iso: "SR",
  },
  {
    name: "Svalbard and Jan Mayen",
    iso: "SJ",
  },
  {
    name: "Swaziland",
    iso: "SZ",
  },
  {
    name: "Sweden",
    iso: "SE",
  },
  {
    name: "Switzerland",
    iso: "CH",
  },
  {
    name: "Syria",
    iso: "SY",
  },
  {
    name: "Taiwan",
    iso: "TW",
  },
  {
    name: "Tajikistan",
    iso: "TJ",
  },
  {
    name: "Tanzania",
    iso: "TZ",
  },
  {
    name: "Thailand",
    iso: "TH",
  },
  {
    name: "Togo",
    iso: "TG",
  },
  {
    name: "Tokelau",
    iso: "TK",
  },
  {
    name: "Tonga",
    iso: "TO",
  },
  {
    name: "Trinidad and Tobago",
    iso: "TT",
  },
  {
    name: "Tunisia",
    iso: "TN",
  },
  {
    name: "Turkey",
    iso: "TR",
  },
  {
    name: "Turkmenistan",
    iso: "TM",
  },
  {
    name: "Turks and Caicos Islands",
    iso: "TC",
  },
  {
    name: "Tuvalu",
    iso: "TV",
  },
  {
    name: "U.S. Minor Outlying Islands",
    iso: "UM",
  },
  {
    name: "U.S. Virgin Islands",
    iso: "VI",
  },
  {
    name: "Uganda",
    iso: "UG",
  },
  {
    name: "Ukraine",
    iso: "UA",
  },
  {
    name: "United Arab Emirates",
    iso: "AE",
  },
  {
    name: "United Kingdom",
    iso: "GB",
  },
  {
    name: "United States",
    iso: "US",
  },
  {
    name: "Uruguay",
    iso: "UY",
  },
  {
    name: "Uzbekistan",
    iso: "UZ",
  },
  {
    name: "Vanuatu",
    iso: "VU",
  },
  {
    name: "Vatican City",
    iso: "VA",
  },
  {
    name: "Venezuela",
    iso: "VE",
  },
  {
    name: "Vietnam",
    iso: "VN",
  },
  {
    name: "Wallis and Futuna",
    iso: "WF",
  },
  {
    name: "Western Sahara",
    iso: "EH",
  },
  {
    name: "Yemen",
    iso: "YE",
  },
  {
    name: "Zambia",
    iso: "ZM",
  },
  {
    name: "Zimbabwe",
    iso: "ZW",
  },
];

export default class CountryDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      selected: "PK",
    };
  }

  render() {
    const { query, selected } = this.state;
    const filteredPeople =
      query === ""
        ? allCountries
        : allCountries.filter((country) =>
            country.name
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, ""))
          );
    return (
      <div>
        <Combobox
          value={selected}
          onChange={(e) => this.setState({ selected: e.iso })}>
          <div className="relative mr-[20px]">
            <div className="relative overflow-hidden text-left bg-transparent cursor-default max-w-[100px]">
              <Combobox.Button className="flex items-center w-[45.06px] h-[45.06px] rounded-[5px] border border-white  justify-center ">
                <span className={`flag:${selected}`}></span>
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => this.setState({ query: "" })}>
              <Combobox.Options className="absolute mt-1 right-0 w-[200px] z-[99] overflow-hidden rounded-md bg-white text-base shadow-lg">
                <div className="relative p-[8px]">
                  <div className=" h-[42px] rounded-[5px] px-3 flex items-center gap-x-[8px] border border-[#E7ECFD] outline-none focus:ring-0 border-b w-full overflow-hidden text-left ">
                    <BsSearch className="text-[#BDC2D3]" />
                    <Combobox.Input
                      placeholder="Search Country"
                      className="w-full py-2 pr-3 text-[14px] font-light text-[#9895AB] outline-none"
                      displayValue={(person) => person.name}
                      onChange={(event) =>
                        this.setState({ query: event.target.value })
                      }
                    />
                  </div>
                </div>
                <div
                  className="overflow-auto max-h-[450px] pt-2 pb-0"
                  id="scrollbar">
                  {filteredPeople.length === 0 ? (
                    <p className="relative px-4 py-2 text-gray-700 cursor-default select-none">
                      Nothing found.
                    </p>
                  ) : (
                    filteredPeople.map((country) => (
                      <Combobox.Option
                        key={country.id}
                        className={({ active }) =>
                          `relative select-none h-[40px] flex items-center px-3 cursor-pointer group ${
                            active ? "bg-[#4B6DF3] text-white" : "text-gray-900"
                          }`
                        }
                        value={country}>
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center gap-x-[10px] hover:text-white">
                              <p className={`flag:${country.iso}`}></p>
                              <p
                                className={`truncate text-[14px] leading-[10px] group-hover:text-white text-[#232A43] ${
                                  selected ? "font-medium" : "font-normal"
                                }`}>
                                {country.name}
                              </p>
                            </div>
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </div>
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    );
  }
}
