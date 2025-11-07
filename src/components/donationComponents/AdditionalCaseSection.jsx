import { useState } from "react";
import AdditionalCaseCard from "./AdditionalCaseCard";
import Button from "../Button";

const AdditionalCaseSection = () => {
  const additionalCasesData = [
    {
      id: 1,
      victimName: "Ramesh Shrestha",
      imageSrc: "",
      raisedAmount: "1.5 lakhs",
      goalAmount: "2.5 lakhs",
      progressPercent: 60,
    },
    {
      id: 2,
      victimName: "Sita Gurung",
      imageSrc: "",
      raisedAmount: "90,000",
      goalAmount: "2 lakhs",
      progressPercent: 45,
    },
    {
      id: 3,
      victimName: "Bishal Rai",
      imageSrc: "",
      raisedAmount: "3 lakhs",
      goalAmount: "4 lakhs",
      progressPercent: 75,
    },
    {
      id: 4,
      victimName: "Anita Thapa",
      imageSrc: "",
      raisedAmount: "60,000",
      goalAmount: "2 lakhs",
      progressPercent: 30,
    },
    {
      id: 5,
      victimName: "Kiran Lama",
      imageSrc: "",
      raisedAmount: "1.7 lakhs",
      goalAmount: "2 lakhs",
      progressPercent: 85,
    },
    {
      id: 6,
      victimName: "Mina Shrestha",
      imageSrc: "",
      raisedAmount: "2.2 lakhs",
      goalAmount: "3 lakhs",
      progressPercent: 73,
    },
    {
      id: 7,
      victimName: "Rajesh Adhikari",
      imageSrc: "",
      raisedAmount: "50,000",
      goalAmount: "1.5 lakhs",
      progressPercent: 33,
    },
    {
      id: 8,
      victimName: "Sabina Tamang",
      imageSrc: "",
      raisedAmount: "1.8 lakhs",
      goalAmount: "2 lakhs",
      progressPercent: 90,
    },
    {
      id: 9,
      victimName: "Ganesh Khadka",
      imageSrc: "",
      raisedAmount: "70,000",
      goalAmount: "2 lakhs",
      progressPercent: 35,
    },
    {
      id: 10,
      victimName: "Puja KC",
      imageSrc: "",
      raisedAmount: "1.2 lakhs",
      goalAmount: "2 lakhs",
      progressPercent: 60,
    },
  ];

  const [visibleCount, setVisibleCount] = useState(6);

  const handleToggle = () => {
    if (visibleCount < additionalCasesData.length) {
      // Show 3 more or all remaining
      setVisibleCount((prev) => Math.min(prev + 3, additionalCasesData.length));
    } else {
      // Collapse back to 6
      setVisibleCount(6);
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        {additionalCasesData.slice(0, visibleCount).map((caseItem) => (
          <AdditionalCaseCard key={caseItem.id} {...caseItem} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Button
          text={
            visibleCount < additionalCasesData.length
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
