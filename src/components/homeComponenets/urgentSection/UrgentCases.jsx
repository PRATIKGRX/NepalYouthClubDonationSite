
import Card from "./Card";
import Button from "./Button";
import data from "../../../data/urgentCases.json";

const UrgentCases = () => {
  const featured = data[0];
  const others = data.slice(1);

  return (
    <section className="py-10">
      <h2 className="text-4xl leading-20 tracking-normal font-medium uppercase">
        Urgent Attention Needed
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-[50px]">
        {/* Featured card */}
        <div>
          <Card
            title={featured.title}
            image={featured.image}
            raised={featured.raised}
            goal={featured.goal}
            donors={featured.donors}
            large
          />
        </div>

        {/* Other small cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>

      <div className="text-center">
        <Button text="View All Cases" />
      </div>
    </section>
  );
};

export default UrgentCases;
