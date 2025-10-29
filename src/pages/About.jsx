import Card from "../components/aboutComponents/Card";
import Button from "../components/Button";
import TeamSection from "../components/aboutComponents/TeamSection";
const About = () => {
  return (
    <>
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
          <Button text={"JOIN OUR MISSION"} />
        </div>
      </section>
      <section className="bg-[#F5F5F5] px-12 py-20 flex flex-col gap-12">
        <TeamSection/>
      </section>
    </>
  );
};

export default About;
