import { CiSearch } from "react-icons/ci";
import FeatureSection from "../components/donationComponents/FeatureSection";
import AdditionalCaseSection from "../components/donationComponents/AdditionalCaseSection";
const Donate = () => {
  return (
    <>
      <header>
        <div className="bg-gray-200 xl:h-[400px] 2xl:h-[600px] md:h-[340px] h-[300px] 2xl:px-24 2xl:py-24 xl:px-15 xl:py-12 lg:px-12 lg:py-13 sm:px-8 sm:py-10 px-4 py-5 flex flex-col items-center justify-center">
          <div className="w-full text-center">
            <h1 className="xl:text-[36px] 2xl:text-[42px] md:text-[24px] text-[18px] font-medium">
              DIRECT DONATION: VERIFIED VICTIMS IN NEED
            </h1>
            <h6 className="mt-4 xl:text-[26px] 2xl:text-[34px] md:text-[20px] text-[12px]  text-gray-500">
              100% of your donation goes directly to the victims
            </h6>
            <div className="relative xl:w-[70%] md:w-[80%] w-[90%] md:mt-8 mt-4 mx-auto">
              <input
                type="text"
                className="w-full text-gray-700 border-none bg-white p-4 pl-12 text-base placeholder:text-gray-400 rounded-lg shadow-md focus:outline-none"
                placeholder="Search for the victims here"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
                <CiSearch />
              </button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="2xl:px-24 2xl:py-24 xl:px-15 xl:py-12 lg:px-12 lg:py-13 sm:px-8 sm:py-10 px-4 py-5 flex flex-col gap-8">
          <p className="xl:text-4xl 2xl:text-5xl lg:text-2xl sm:text-xl text-lg font-medium">FEATURED URGENT CASE</p>
          <FeatureSection/>
          
        </section>
        <section className="2xl:px-24 2xl:py-24 xl:px-15 xl:py-12 lg:px-12 lg:py-13 sm:px-8 sm:py-10 px-4 py-5 flex flex-col gap-8">
          <p className="xl:text-4xl 2xl:text-5xl lg:text-2xl sm:text-xl text-lg font-medium">ADDITIONAL CASES</p>
          <div>
            <AdditionalCaseSection/>
          </div>
          
          
        </section>
      </main>
    </>
  );
};

export default Donate;
