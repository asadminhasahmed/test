import Image from "next/image";
import Hortons from "assets/images/Hortons.png";
import Hollie from "assets/images/Hollie.png";
import Lorsdky from "assets/images/Lorsdky.png";
import Wrigley from "assets/images/Wrigley.png";
import Ratings from "./Ratings";

export default function TopAgents() {
  const top_agents = [
    {
      id: 1,
      full_name: "Tim Hortons",
      description:
        "Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the...",
      src: Hortons,
    },
    {
      id: 2,
      full_name: "Joan Wrigley",
      description:
        "Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the...",
      src: Wrigley,
    },
    {
      id: 3,
      full_name: "Lydia Hollie",
      description:
        "Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the...",
      src: Hollie,
    },
    {
      id: 4,
      full_name: "Dave Lordsky",
      description:
        "Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the...",
      src: Lorsdky,
    },
  ];
  return (
    <>
      {top_agents.map((item, key) => (
        <div key={key} className="flex gap-x-[16px]">
          <div className="mt-3 shrink-0">
            <Image
              src={item.src}
              alt="Hortons"
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
