import Card from "../components/aboutComponents/Card";
import Button from "../components/Button";
import TeamSection from "../components/aboutComponents/TeamSection";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div className="bg-[#D9D9D9] md:h-[300px] h-[200px] justify-center flex items-center">
          <h3 className="xl:text-6xl md:text-5xl text-4xl font-bold ">About US</h3>
        </div>
        <div className="grid xl:grid-cols-[1fr_3fr] md:grid-cols-1 lg:px-12 lg:py-15 sm:px-8 sm:py-10 px-3 py-5">
          <p className="font-medium md:text-[36px] text-[24px] text-[#003893]">
            WHO WE ARE
          </p>
          <p className="md:text-[16px] text-[12px] font-light xl:px-6 px-2">
            Nepal Youth Club is a volunteer-run organization that organizes
            trainings, youth advocacy campaigns, internships, community
            projects, and mental health counseling. From social media campaigns
            and environmental cleanups to leadership workshops and peer
            counseling, our team of young volunteers, seasoned mentors, and
            local partners creates programs that blend professional development
            with practical community service. In order to place interns, conduct
            awareness campaigns, and establish safe spaces for young people to
            exchange ideas and organize for positive civic engagement, we
            collaborate with nearby NGOs, universities, and government agencies.
          </p>
        </div>
      </header>
      <section className="lg:px-12 lg:py-15 sm:px-8 sm:py-10 px-3 py-5 flex flex-col md:gap-10 gap-6 xl:gap-20">
        <div className="grid xl:grid-cols-3 grid-cols-1 xl:gap-4 gap-8">
          <Card
            title={"MISSION"}
            description={`Our mission is to enable Nepal's youth to become capable, self-assured, and caring leaders who can improve their own and their communities' futures. Through education, skill development, mental health awareness, and civic engagement, Nepal Youth Club aims to give young people the opportunity to learn, lead, and make a lasting impact. We work to dismantle barriers to inequality and give all young people, regardless of background, the same chance to realize their potential and make a positive impact on a fair, sustainable, and prosperous Nepal.`}
          />
          <Card
            title={"VISION"}
            description={`We envision a nation where all young people have the opportunity, knowledge, and bravery to make their dreams come true. Our goal is to create an innovative, compassionate, and honest Nepal where young people take charge of resolving issues in their communities, respect democratic principles, and work together to create a just and inclusive society. Using creativity, digital fluency, and social responsibility as tools to inspire the world and uplift the country, we want to raise a generation that not only adapts to change but also creates it.`}
          />
          <Card
            title={"Core Values"}
            description={`At the heart of Nepal Youth Club lies a deep belief in the power of youth to create positive change.  Our guiding principle is inclusion, making sure that every young voice, no matter how tiny, is respected and heard. Our actions are defined by our integrity; in all of our programs, we encourage openness, truthfulness, and responsibility. We view service as a lifetime dedication to fostering community and nation-building, motivating young people to take on leadership roles with compassion and understanding. Our movement is fueled by courage, the courage to speak out against injustice, to stand up for what is right, and to have big dreams. Above all, we promote a culture of lifelong learning, fostering inquisitiveness, inventiveness, and fortitude to enable Nepal's youth to prosper in a world that is constantly changing.`}
          />
        </div>
        <div className="flex justify-center">
          <Button
            text={"JOIN OUR MISSION"}
            onClick={() => {
              navigate("/contact");
            }}
          />
        </div>
      </section>
      <section className="bg-[#F5F5F5] lg:px-12 lg:py-20  sm:px-8 sm:py-10 px-3 py-5 flex flex-col gap-12">
        <TeamSection />
      </section>
    </>
  );
};

export default About;
