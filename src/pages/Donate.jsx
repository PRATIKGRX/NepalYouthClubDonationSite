import { CiSearch } from "react-icons/ci";
import FeatureSection from "../components/donationComponents/FeatureSection";
import AdditionalCaseSection from "../components/donationComponents/AdditionalCaseSection";
const Donate = () => {
  return (
    <>
      <header>
        <div className="bg-gray-200 sm:h-90 h-80 md:h-114 flex flex-col items-center justify-center">
          <div className="w-full text-center">
            <h1 className="lg:text-4xl sm:text-2xl text-lg font-medium">
              DIRECT DONATION: VERIFIED VICTIMS IN NEED
            </h1>
            <h6 className="mt-4 lg:text-3xl sm:text-lg text-md  text-gray-500">
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
        <section className="lg:px-12 lg:py-15 sm:px-8 sm:py-10 px-3 py-5 flex flex-col gap-8">
          <p className="md:text-[36px] text-[24px] font-medium">FEATURED URGENT CASE</p>
          <FeatureSection/>
          
        </section>
        <section className="lg:px-12 lg:py-15 sm:px-8 sm:py-10 px-3 py-5 flex flex-col gap-8">
          <p className="md:text-[36px] text-[24px] font-medium">ADDITIONAL CASES</p>
          <div>
            <AdditionalCaseSection/>
          </div>
          
          
        </section>
      </main>
    </>
  );
};

export default Donate;
