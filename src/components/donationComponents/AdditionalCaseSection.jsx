import { useState } from "react";
import AdditionalCaseCard from "./AdditionalCaseCard";
import Button from "../Button";
import data from "../../data/cases";

const AdditionalCaseSection = () => {
  // Filter only normal cases
  const normalCasesData = data.filter((item) => item.status === "normal");

  const [visibleCount, setVisibleCount] = useState(6);

  const handleToggle = () => {
    if (visibleCount < normalCasesData.length) {
      // Show 3 more or all remaining
      setVisibleCount((prev) => Math.min(prev + 3, normalCasesData.length));
    } else {
      // Collapse back to 6
      setVisibleCount(6);
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-6">
  {normalCasesData.slice(0, visibleCount).map((caseItem) => (
    <AdditionalCaseCard
      key={caseItem.id}
      victimName={caseItem.title}
      imageSrc={caseItem.image} // can be empty if no image
      raisedAmount={caseItem.raised.toLocaleString()} // optional formatting
      goalAmount={caseItem.goal.toLocaleString()}
      progressPercent={Math.floor((caseItem.raised / caseItem.goal) * 100)}
    />
  ))}
</div>

      <div className="flex justify-center mt-4">
        <Button
          text={
            visibleCount < normalCasesData.length
              ? "SHOW MORE"
              : "SHOW LESS"
          }
          onClick={handleToggle}
        />
      </div>
    </>
  );
};

export default AdditionalCaseSection;
