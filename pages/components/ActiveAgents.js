import Image from "next/image";
import Tim_Hortons from "assets/images/Tim_Hortons.png";
import Lydia_Hollie from "assets/images/Lydia_Hollie.png";
import Dave_Lordsky from "assets/images/Dave_Lordsky.png";
import Brampton from "assets/images/Brampton.png";
import Ratings from "./Ratings";

export default function ActiveAgents() {
  const active_agents = [
    {
      id: 1,
      full_name: "Tim Hortons",
      description:
        "Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the...",
      src: Tim_Hortons,
    },
    {
      id: 2,
      full_name: "Joan Wrigley",
      description:
        "Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the...",
      src: Brampton,
    },
    {
      id: 3,
      full_name: "Lydia Hollie",
      description:
        "Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the...",
      src: Lydia_Hollie,
    },
    {
      id: 4,
      full_name: "Dave Lordsky",
      description:
        "Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the...",
      src: Dave_Lordsky,
    },
  ];
  return (
    <>
      {active_agents.map((item, key) => (
        <div key={key} className="flex gap-x-[16px]">
          <div className="mt-3 shrink-0">
            <Image
              src={item.src}
              alt="Tim_Hortons"
              className="md:w-[112px] md:h-[112px] w-[72px] h-[72px] rounded-full object-cover"
            />
          </div>
          <div className="grow">
            <div className="flex md:flex-row flex-col md:items-center justify-between mb-[8px]">
              <h6 className="text-[24px] poppins font-medium leading-[36px] text-[#232A43]">
                {item.full_name}
              </h6>
              <Ratings />
            </div>
            <p className="font-light text-[16px] leading-[24px] text-[#232A43]">
              {item.description}
              <strong className="underline hover:text-[#4B6DF3] cursor-pointer">
                More
              </strong>
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
      ))}
    </>
  );
}
