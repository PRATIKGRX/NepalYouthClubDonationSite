import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import data from "../data/cases";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import DonateForm from "../components/donationComponents/DonateForm";

const DonateDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const item = data.find((d) => d.id === Number(id)); // convert id to number
  const [openForm, setOpenForm] = useState(false);
  const victimTitle = item.title;
  const victimName = victimTitle.slice(11);
  const victimImagePath = item.image;
  const victimDescription = item.desc;
  const victimRaisedAmount = item.raised;
  const victimAmountGoal = item.goal;
  const victimStatus = item.status;
  const victimProgressPercentage = Math.floor(
    100 * (victimRaisedAmount / victimAmountGoal)
  );
  const esewaQr = item.esewa;
  if (!item) {
    return <h1>Not Found</h1>;
  }
  useEffect(() => {
    if (openForm) {
      document.body.style.overflow = "hidden"; // stop scrolling
    } else {
      document.body.style.overflow = "auto"; // enable scrolling again
    }

    // cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openForm]);

  return (
    <div className="w-full relative ">
      <DonateForm
        esewaQr={esewaQr}
        openForm={openForm}
        setOpenForm={setOpenForm}
      />
      <button
        onClick={() => navigate("/donate")}
        className="hover:cursor-pointer absolute top-2 left-2 text-[12px] md:text-[16px] px-3 py-2 rounded-[5px] text-white bg-[#DC241F]"
      >
        Go Back
      </button>
      <header>
        <div className="bg-gray-200 2xl:h-[400px] md:h-[250px] h-[225px] flex flex-col items-center  justify-center">
          <div className="w-full text-center 2xl:px-24 2xl:py-24 xl:px-15 xl:py-12 lg:px-12 lg:py-13 sm:px-8 sm:py-10 px-4 py-5">
            <h1 className="lg:text-4xl sm:text-2xl text-lg font-medium">
              VERIFIED VICTIMS DETAILS
            </h1>
            <h6 className="mt-4 lg:text-3xl sm:text-lg text-md  text-gray-500">
              100% of your donation goes directly to the victims
            </h6>
          </div>
        </div>
      </header>
      <section className="2xl:px-24 2xl:py-24 xl:px-15 xl:py-12 lg:px-12 lg:py-13 sm:px-8 sm:py-10 px-4 py-5">
        <div className="flex flex-col sm:flex-row   gap-2 justify-center items-center sm:items-start p-2">
          <div className="grid md:grid-cols-2 grid-cols-1 sm:gap-4 lg:gap-8 gap-2">
            <div className="flex flex-col h-full gap-3">
              <div className="relative w-full rounded-lg">
                <div className="absolute hidden md:block top-2 right-2">
                  <Button onClick={() => setOpenForm(true)} text={"Donate"} />
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-lg object-cover aspect-video md:aspect-auto"
                />
              </div>
              <div className="flex flex-col gap-1">
                {/*  Goal and status */}
                <div className="text-medium md:text-base text-[10px] ">
                  <p className="text-[#c41919] text-sm sm:text-xl md:text-2xl font-bold">{`${victimStatus}!`}</p>
                </div>
                {/* Progress Bar */}
                <div className="md:h-[15px] h-[10px] relative w-full rounded-[15px] bg-[#D9D9D9] overflow-hidden">
                  <div
                    className="md:h-[15px] h-[10px] absolute left-0 top-0 rounded-[15px] bg-gradient-to-r from-[#022D73CC] to-[#6196EB66]"
                    style={{ width: `${victimProgressPercentage}%` }}
                  ></div>
                </div>
                {/*  Raised */}
                <div className="text-medium 2xl:text-2xl sm:text-base text-[10px] flex justify-between items-center">
                  <p className="text-black  font-bold">
                    Raised: {victimAmountGoal}
                  </p>
                  <p className="text-[#3f3f3f] ">Goal: {victimAmountGoal}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:gap-6 md:gap-8 gap-3 h-full">
              <div className="flex items-center justify-between text-left text-2xl">
                <p className="font-bold">Name:{victimName}</p>
                <p className="font-medium">Age:18</p>{" "}
                {/*fetch from backend and display here*/}
              </div>
              <div className="text-lg flex sm:h-[220px] h-[200px] md:h-[280px] lg:h-[350px] xl:h-[380px]  overflow-auto ">
                <p>{victimDescription}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-4 md:my-8 w-full">
          <Button
            onClick={() => setOpenForm(true)}
            text={"Donate"}
            className="md:w-min w-full text-center"
          />
        </div>
      </section>
    </div>
  );
};

export default DonateDetail;
