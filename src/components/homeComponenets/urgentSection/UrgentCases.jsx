import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Button from "../../Button";
import data from "../../../data/urgentCases";

const UrgentCases = () => {
  const [showAll, setShowAll] = useState(false);
  const featured = data[0];
  const others = data.slice(1);

  return (
    <section className="py-10">
      <h2 className="md:text-4xl text-xl leading-15 md:leading-20 tracking-normal font-bold uppercase">
        Urgent Attention Needed
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:my-[50px]">
        {/* Featured card */}
        <div className="relative">
          <Card
            title={featured.title}
            desc={featured?.desc}
            image={featured.image}
            raised={featured.raised}
            goal={featured.goal}
            donors={featured.donors}
            large
          />
        </div>

        {/* Other small cards - control section height to hide overflow when collapsed */}
        <div   className="relative  max-h-[300px] overflow-hidden lg:max-h-full
                    ">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {others.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to="/donate" className="inline-block ml-4">
          <Button text="View all cases" />
        </Link>
      </div>
    </section>
  );
};

export default UrgentCases;
