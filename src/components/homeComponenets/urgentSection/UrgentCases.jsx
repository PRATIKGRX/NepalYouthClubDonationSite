import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Button from "../../Button";
import data from "../../../data/cases";

const UrgentCases = () => {
  const [displayCount, setDisplayCount] = useState(5);

  // Update display count based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setDisplayCount(3); // Mobile: show 3
      } else {
        setDisplayCount(5); // Desktop: show 5
      }
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter urgent cases and slice according to displayCount
  const urgentCases = data.filter((item) => item.status === "urgent").slice(0, displayCount);
  const featured = urgentCases[0];
  const others = urgentCases.slice(1);

  return (
    <section className="py-10">
      <h2 className="md:text-4xl text-xl leading-15 md:leading-20 tracking-normal font-bold uppercase">
        Urgent Attention Needed
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:my-[50px]">
        {/* Featured card */}
        {featured && (
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
        )}

        {/* Other small cards */}
        <div className="relative max-h-[300px] overflow-hidden lg:max-h-full">
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
