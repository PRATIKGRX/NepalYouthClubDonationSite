import { CiSearch } from "react-icons/ci";
import Button from "../components/Button";
import FeatureSection from "../components/donationComponents/FeatureSection";
import AdditionalCaseSection from "../components/donationComponents/AdditionalCaseSection";
const Donate = () => {
 

  return (
    <>
      <header>
        <div className="bg-gray-200 h-114 flex flex-col items-center justify-center">
          <div className="w-5xl text-center">
            <h1 className="text-4xl font-medium">
              DIRECT DONATION: VERIFIED VICTIMS IN NEED
            </h1>
            <h6 className="mt-4 text-3xl text-gray-500">
              100% of your donation goes directly to the victims
            </h6>
            <div className="relative mt-8 max-w-4xl mx-auto">
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
        <section className="px-12 py-15 flex flex-col gap-8">
          <p className="text-[36px] font-medium">FEATURED URGENT CASE</p>
          <FeatureSection/>
          
        </section>
        <section className="px-12 py-15 flex flex-col gap-8">
          <p className="text-[36px] font-medium">ADDITIONAL CASES</p>
          <div>
            <AdditionalCaseSection/>
          </div>
          
          
        </section>
      </main>
    </>
  );
};

export default Donate;
