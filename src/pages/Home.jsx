import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdVerifiedUser } from "react-icons/md";
import { MdHandshake } from "react-icons/md";
import UrgentCases from "../components/homeComponenets/urgentSection/UrgentCases";
import Gallery from "../components/homeComponenets/gallerySection/Gallery";
import AboutSection from "../components/homeComponenets/AboutSection";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate=useNavigate();
  const threeCards = [
    { id: 1, title: "100% Direct Transfer", icon: <RiMoneyDollarCircleFill /> },
    { id: 2, title: "Verified Cases", icon: <MdVerifiedUser /> },
    { id: 3, title: "Non-Profit initiative", icon: <MdHandshake /> },
  ];
  // xl:h-[700px] 2xl:h-[800px] md:h-[500px] h-[450px] 
  // xl:text-[70px] 2xl:text-[90px] md:text-[40px] text-[32px] main head text
  // xl:text-[36px] 2xl:text-[42px] md:text-[24px] text-[18px]
  return (
    <>
      <header>
        <div className="xl:h-[700px] 2xl:h-[800px] md:h-[500px] h-[450px] w-full flex justify-center items-center bg-[#DCDCDC] 2xl:px-24 2xl:py-24 xl:px-15 xl:py-12 lg:px-12 lg:py-13 sm:px-8 sm:py-10 px-4 py-5">
          <div className="text-center flex flex-col gap-4">
            <h2 className="xl:text-[70px] 2xl:text-[90px] md:text-[40px] text-[32px] font-bold">
              Together for a Better <br />
              Tomorrow
            </h2>
            <p className="xl:text-[36px] 2xl:text-[42px] md:text-[24px] text-[18px]">Empowering Youths. Suporting lives.</p>
            <div className="flex items-center gap-4 justify-center text-[22px] mt-4">
              <Button text={"DONATE NOW"} onClick={()=>navigate('/donate')}/>
              <button className="px-3 py-2 md:px-[15px] md:py-[12px] rounded-[5px] md:text-[22px] text-[10px]  text-[#003893] border-[#003893] bg-white border hidden md:block">
                VOLUNTEER
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="">
        <div className="grid grid-cols-3 2xl:gap-20 xl:gap-15 sm:gap-5 gap-4 lg:gap-10 2xl:px-24 2xl:py-24 xl:px-15 xl:py-12 lg:px-12 lg:py-13 sm:px-8 sm:py-10 px-4 py-5 w-full">
          {threeCards.map((item) => (
            <div
              className="flex justify-center w-full h-full items-center"
              key={item?.id || index}
            >
              <div className="shadow-[4px_4px_9px_rgba(0,56,147,0.4)] justify-center flex  flex-col items-center border w-full h-full border-[#00389378] 2xl:p-15 xl:p-10 md:p-4 p-2 gap-4 rounded-[15px]">
                <div className="2xl:text-[150px] xl:text-[125px] md:text-[100px] sm:text-[80px] text-[70px] text-[#DC241F]">
                  {item?.icon}
                </div>
                <p className=" 2xl:text-2xl xl:text-xl md:text-lg text-sm text-center">
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
        <div className="2xl:px-24 2xl:py-24 xl:px-15 xl:py-12 lg:px-12 lg:py-13 sm:px-8 sm:py-10 px-4 py-5">
          <h4 className="xl:text-4xl 2xl:text-5xl lg:text-2xl sm:text-xl text-lg mb-2 md:mb-6 font-medium">
            Learn About the Gen Z Protest
          </h4>
          <div className="grid md:grid-cols-2 gap-8 pb-15">
            <div className="flex flex-col gap-6 h-full">
              <p className="xl:text-2xl 2xl:text-3xl lg:text-xl sm:text-lg text-[#7D7C7C]">
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
                  className="text-[10px] px-8 py-5" onClick={()=>navigate('/documentation')}
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
