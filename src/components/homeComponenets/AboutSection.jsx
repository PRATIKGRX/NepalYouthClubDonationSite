import Button from "../Button";
import { useNavigate } from "react-router-dom";
export const AboutSection = () => {
  const navigate=useNavigate();
  return (
    <div>
      {/* Heading */}
      <section className="py-4 lg:py-16">
        <h1 className="text-[15px] md:text-3xl lg:text-[36px] mb-3 lg:mb-6 font-medium uppercase lg:normal-case ">About Nepal Youth Club</h1>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-8 md:gap-12">
          {/* Left Content */}
          <div className="flex flex-col gap-4 lg:gap-8 lg:order-1">
            <p className="text-gray-700 text-justify">
              Nepal Youth Club is a youth-centered platform that empowers young Nepalis through volunteer programs, internships, mental health support, capacity building, and civic engagement. In order to support a generation that is knowledgeable, engaged, and prepared to spearhead constructive social change, the Club extends an invitation to young people from Nepal and overseas to hone their leadership abilities, acquire real-world experience, and take part in community projects that tackle issues of education, public health, the environment, and digital literacy.
            </p>
            <div className="flex justify-center lg:justify-start">
              
              <Button text={"READ MORE"} onClick={()=>navigate('about')} />
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full order-first lg:order-2 ">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=614&h=330&fit=crop"
              alt="Nepal Youth Club Activities"
              className="rounded-[5px]  object-cover w-full aspect-[4/3] sm:aspect-[16/9] lg:h-[330px]"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-4 lg:py-16">
        <div
          className="w-full grid grid-cols-3 lg:h-[217px] rounded-[5px] overflow-hidden"
          style={{ boxShadow: "5px 5px 9px 0px rgba(0,56,147,0.25)" }}
        >
          {/* Stat 1 */}
          <div className="flex flex-col px-4 py-3 items-center justify-center border border-[#00389380] h-full rounded-l-[5px]">
            <div className="text-2xl lg:text-[50px] font-semibold ">50+</div>
            <div className="text-xs lg:text-[22px]">Volunteers</div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center border border-[#00389380] h-full">
            <div className="text-2xl lg:text-[50px] font-semibold ">200+</div>
            <div className="text-xs lg:text-[22px]">Life Helped</div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center border border-[#00389380] h-full rounded-r-[5px]">
            <div className="text-2xl lg:text-[50px] font-semibold ">10+</div>
            <div className="text-base lg:text-[22px]">Projects</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
