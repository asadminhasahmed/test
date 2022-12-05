import { AiFillStar } from "react-icons/ai";

export default function Ratings() {
  return (
    <div className="flex items-center gap-x-[5px]">
      <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
      <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
      <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
      <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
      <AiFillStar className="text-[#FFC107] w-[17.94px] h-[17.94px]" />
      <p className="text-[#73757E] text-[14px] leading-[17.5px] font-normal">
        5.0
      </p>
    </div>
  );
}
