import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdVerifiedUser } from "react-icons/md";
import { MdHandshake } from "react-icons/md";
import UrgentCases from "../components/homeComponenets/urgentSection/UrgentCases";
import Gallery from "../components/homeComponenets/gallerySection/Gallery";
import AboutSection from "../components/homeComponenets/AboutSection";
import Button from "../components/Button";
const Home = () => {
  const threeCards = [
    { id: 1, title: "100% Direct Transfer", icon: <RiMoneyDollarCircleFill /> },
    { id: 2, title: "Verified Cases", icon: <MdVerifiedUser /> },
    { id: 3, title: "Non-Profit initiative", icon: <MdHandshake /> },
  ];
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
              <Button text={"DONATE NOW"} />
              <button className="px-[24px] py-[21px] rounded-sm text-[#003893] border-[#003893] bg-white border hidden md:block">
                VOLUNTEER
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="xl:px-12 px-8">
        <div className="grid grid-cols-3 gap-6 pt-8 md:py-15 w-full">
          {threeCards.map((item) => (
            <div
              className="flex justify-center items-center"
              key={item?.id || index}
            >
              <div className="shadow-[4px_4px_9px_rgba(0,56,147,0.4)] justify-center flex gap-4 p-2 md:gap-2 flex-col items-center border border-[#00389378] h-[100px] md:h-[244px] w-[244px] rounded-[15px] text-[20px]">
                <div className="md:text-[120px] text-[34px] text-[#DC241F]">
                  {item?.icon}
                </div>
                <p className="text-[10px] md:text-xl text-center">
                  {item?.title}
                </p>
              </div>
            </div>
          ))}
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
          <h4 className="text-[13px] md:text-[36px] mb-2 md:mb-6 font-medium">
            Learn About the Gen Z Protest
          </h4>
          <div className="grid md:grid-cols-2 gap-8 pb-15">
            <div className="flex flex-col gap-6 h-full">
              <p className="text-[8px] md:text-[30px] text-[#7D7C7C]">
                Full documentation of the GEN Z protest 2025 in Nepal
              </p>
              <div className="w-full">
                <img
                  src="https://i.pinimg.com/1200x/c7/36/f8/c736f83436d84ddc039fe42de40c8ec7.jpg"
                  alt=""
                  className="h-[260px] w-full md:hidden"
                />
              </div>
              <div className="text-center">
                <Button
                  text={"View Full Documentation"}
                  className="text-[10px] px-8 py-5"
                />
              </div>
            </div>
            <div className="w-full  hidden md:block">
              <img
                src="https://i.pinimg.com/1200x/c7/36/f8/c736f83436d84ddc039fe42de40c8ec7.jpg"
                alt=""
                className="h-[260px] w-full hidden md:block"
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
