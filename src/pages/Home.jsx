import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdVerifiedUser } from "react-icons/md";
import { MdHandshake } from "react-icons/md";
import UrgentCases from "../components/homeComponenets/urgentSection/UrgentCases";
import  Gallery  from "../components/homeComponenets/gallerySection/Gallery";
import AboutSection from "../components/homeComponenets/AboutSection";

const Home = () => {
 
  return (
    <>
      <header>
        <div className="h-[672px] w-full flex justify-center items-center bg-[#DCDCDC]">
          <div className="text-center flex flex-col gap-4">
            <h2 className="text-[64px] font-[500]">
              Together for a Better <br />
              Tomorrow
            </h2>
            <p className="text-[30px]">Empowering Youths. Suporting lives.</p>
            <div className="flex items-center gap-4 justify-center text-[22px] mt-4">
              <button className="px-5 py-3 rounded-sm text-white bg-[#DC241F]">
                DONATE NOW
              </button>
              <button className="px-5 py-3 rounded-sm text-[#003893] border-[#003893] bg-white border">
                VOLUNTEER
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="xl:px-12 px-8">
        <div className="grid grid-cols-3 py-15 w-full">
          <div className="flex justify-center items-center">
            <div className="shadow-[4px_4px_9px_rgba(0,56,147,0.4)] justify-center flex gap-2 flex-col items-center border border-[#00389378] h-[215px] w-[244px] rounded-[15px] text-[20px]">
              <div className="text-[120px] text-[#DC241F]">
                <RiMoneyDollarCircleFill />
              </div>
              <p>100% Direct Transfer</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="shadow-[4px_4px_9px_rgba(0,56,147,0.4)] justify-center flex gap-2 flex-col items-center border border-[#00389378] h-[215px] w-[244px] rounded-[15px] text-[20px]">
              <div className="text-[120px] text-[#DC241F]">
                <MdVerifiedUser />
              </div>
              <p>Verified cases</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="shadow-[4px_4px_9px_rgba(0,56,147,0.4)] justify-center flex gap-2 flex-col items-center border border-[#00389378] h-[215px] w-[244px] rounded-[15px] text-[20px]">
              <div className="text-[120px] text-[#DC241F]">
                <MdHandshake />
              </div>
              <p>Non-Profit initiative</p>
            </div>
          </div>
        </div>
        {/* Urgent Attention Needed Section  */}
        <div>
          <UrgentCases />
        </div>
        {/* about section by bali */}
        <div>
          <AboutSection />
        </div>
        {/* learn about section */}
        <div>
          <h4 className="text-[36px] mb-6 font-medium">Learn About the Gen Z Protest</h4>
          <div className="grid grid-cols-2 gap-8 pb-15">
            <div className="flex flex-col gap-6 h-full">
              <p className="text-[30px] text-[#7D7C7C]">
                Full documentation of the GEN Z protest 2025 in Nepal
              </p>
              <div>
                <button className="px-3 py-2 rounded-sm bg-[#DC241F] text-white text-[22px]">
                  View Full Documentation
                </button>
              </div>
            </div>
            <div className="w-full">
              <img
                src="https://i.pinimg.com/1200x/c7/36/f8/c736f83436d84ddc039fe42de40c8ec7.jpg"
                alt=""
                className="h-[260px] w-full"
              />
            </div>
          </div>
        </div>
        <Gallery />
      </main>
    </>
  );
};

export default Home;
