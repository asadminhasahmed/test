import AdvancedSearch from "./AdvancedSearch";

export default function Banner() {
  return (
    <div className="banner md:h-[556px] h-screen bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto max-w-[1244px] md:px-10 px-5 h-full">
        <div className="flex flex-col items-center justify-center h-full ">
          <h1 className="text-white font-extrabold md:text-[55px] text-[50px] md:leading-[50px] leading-[55px] text-center not-italic">
            Find The Perfect Real Estate Agent
          </h1>
          <p className="text-white text-[20px] leading-[30px] font-light max-w-[779px] text-center mx-auto mt-[15px]">
            Make your search and sale easier and faster by connecting with one
            of our expert local agent in your neighborhood
          </p>
          <AdvancedSearch />
        </div>
      </div>
    </div>
  );
}
