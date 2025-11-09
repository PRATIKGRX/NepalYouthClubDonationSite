import Card from "../components/aboutComponents/Card";
import Button from "../components/Button";
import TeamSection from "../components/aboutComponents/TeamSection";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate=useNavigate()
  return (
    <>
      <header>
        <div className="bg-[#D9D9D9] h-[300px]"></div>
        <div className="grid grid-cols-[1fr_3fr] px-12 py-15">
          <p className="font-medium text-[36px] text-[#003893]">WHO WE ARE</p>
          <p className="text-[16px] font-light px-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            ab iste sed veritatis porro similique quas. Deserunt a nostrum ipsa
            perspiciatis quod nisi, tenetur iste esse fugiat quasi, maiores
            autem? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Beatae, rem fuga repudiandae porro ex, provident praesentium unde
            officiis molestias possimus assumenda. Facere architecto aliquid
            perspiciatis ipsa magnam, ipsum officia vel.
          </p>
        </div>
      </header>
      <section className="px-12 py-15 flex flex-col gap-20">
        <div className="grid grid-cols-3 gap-4">
          <Card
            title={"MISSION"}
            description={`Lorem Ipsum is simply
dummy text of the printing
and typesetting industry.
Lorem Ipsum has been the
industry's standard dummy
text ever since the 1500s,`}
          />
          <Card
            title={"VISION"}
            description={`Lorem Ipsum is simply
dummy text of the printing
and typesetting industry.
Lorem Ipsum has been the
industry's standard dummy
text ever since the 1500s,`}
          />
          <Card
            title={"Add here"}
            description={`Lorem Ipsum is simply
dummy text of the printing
and typesetting industry.
Lorem Ipsum has been the
industry's standard dummy
text ever since the 1500s,`}
          />
        </div>
        <div className="flex justify-center">
          <Button text={"JOIN OUR MISSION"} onClick={()=>{
            navigate('/contact')
          }} />
        </div>
      </section>
      <section className="bg-[#F5F5F5] px-12 py-20 flex flex-col gap-12">
        <TeamSection />
      </section>
    </>
  );
};

export default About;
