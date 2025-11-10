import Button from "../Button";
export const AboutSection = () => {
  return (
    <div>
      {/* Heading */}
      <section className="py-16">
        <h1 className="text-[13px] md:text-[36px] mb-6 font-medium">
          About Nepal Youth Club
        </h1>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* mobile view  */}
          <div className="w-full md:hidden ">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=614&h=330&fit=crop"
              alt="Nepal Youth Club Activities"
              className="rounded-[5px]  object-cover w-full h-[330px]"
            />
          </div>

          {/* Left Content */}
          <div className="flex flex-col gap-8 items-center md:items-start">
            <p className="text-gray-700 text-justify text-[8px] md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.amet
              consectetur adipisicing elit. Sunt alias provident animi!
            </p>
            <div>
              <Button text={"READ MORE"} />
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full hidden md:block ">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=614&h=330&fit=crop"
              alt="Nepal Youth Club Activities"
              className="rounded-[5px]  object-cover w-full h-[330px]"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div
          className="w-full grid md:grid-cols-3 md:h-[217px] rounded-[5px] overflow-hidden"
          style={{ boxShadow: "5px 5px 9px 0px rgba(0,56,147,0.25)" }}
        >
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center border border-[#00389380] h-full rounded-l-[5px]">
            <div className="text-[50px] font-semibold ">50+</div>
            <div className="text-[22px]">Volunteers</div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center border border-[#00389380] h-full">
            <div className="text-[50px] font-semibold ">200+</div>
            <div className="text-[22px]">Life Helped</div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center border border-[#00389380] h-full rounded-r-[5px]">
            <div className="text-[50px] font-semibold ">10+</div>
            <div className="text-[22px]">Projects</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
