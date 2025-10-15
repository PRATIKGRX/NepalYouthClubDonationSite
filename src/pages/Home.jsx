import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <div className="h-[672px] w-full flex justify-center items-center bg-[#DCDCDC]">
          <div className="text-center flex flex-col gap-4">
            <h2 className="text-[64px]">
              Together for a Better <br />
              Tomorrow
            </h2>
            <p className="text-[30px]">Empowering Youths. Suporting lives.</p>
            <div className="flex items-center gap-4 justify-center text-[22px]">
              <button className="px-3 py-2 rounded-sm text-white bg-[#DC241F]">
                donate now
              </button>
              <button className="px-3 py-2 rounded-sm text-[#003893] border-[#003893] border">VOLUNTEER</button>
            </div>
          </div>
        </div>
      </header>
      <main className="px-10">
        <div className="grid grid-cols-3 py-15 w-full">
          <div className="flex justify-center items-center">
            <div className="shadow-[4px_4px_9px_rgba(0,56,147,0.4)] justify-center flex flex-col items-center border border-[#00389378] h-[215px] w-[244px] rounded-[15px] text-[20px]">
              <div>svg</div>
              <p>100% Direct Transfer</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
          <div className="shadow-[4px_4px_9px_rgba(0,56,147,0.4)] justify-center flex flex-col items-center border border-[#00389378] h-[215px] w-[244px] rounded-[15px] text-[20px]">
            <div>svg</div>
            <p>Verified cases</p>
          </div>
          </div>
          <div className="flex justify-center items-center">
         <div className="shadow-[4px_4px_9px_rgba(0,56,147,0.4)] justify-center flex flex-col items-center border border-[#00389378] h-[215px] w-[244px] rounded-[15px] text-[20px]">
            <div>svg</div>
            <p>Non-Profit initiative</p>
          </div>
            </div>
        </div>
        <h4 className="text-[36px] mb-6">Learn About the Gen Z Protest</h4>
        <div className="grid grid-cols-2 gap-8 pb-15">
          <div className="flex flex-col gap-6 h-full">
            
            <p className="text-[30px]">
              We ensure every rupee goes directly from the donor to the victim.
            </p>
            <div>
                <button className="px-3 py-2 rounded-sm bg-[#DC241F] text-white text-[22px]">View Full Documentation</button>
            </div>
          </div>
          <div className="w-full">
            <img src="https://i.pinimg.com/1200x/c7/36/f8/c736f83436d84ddc039fe42de40c8ec7.jpg" alt="" className="h-[260px] w-full" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
