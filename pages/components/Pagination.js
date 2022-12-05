export default function Pagination(props) {
  return (
    <div className={`${props.className} `}>
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
  );
}
