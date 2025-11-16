import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import data from "../data/cases";
const DonateDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const item = data.find((d) => d.id === Number(id)); // convert id to number

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

  if (!item) {
    return <h1>Not Found</h1>;
  }
  return (
    <div className="p-4 w-full min-w-[318px]">
      <button
        onClick={() => navigate("/donate")}
        className="hover:cursor-pointer text-[12px] md:text-[16px] px-3 py-2 rounded-[5px] text-white bg-[#DC241F]"
      >
        Go Back
      </button>
      <header>
        <div className="bg-gray-200 sm:h-90 h-80 md:h-114 flex flex-col items-center  justify-center min-w-[318px]">
          <div className="w-full text-center">
            <h1 className="lg:text-4xl sm:text-2xl text-lg font-medium">
              VERIFIED VICTIMS DETAILS
            </h1>
            <h6 className="mt-4 lg:text-3xl sm:text-lg text-md  text-gray-500">
              100% of your donation goes directly to the victims
            </h6>
          </div>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row bg-gray-200 gap-2 justify-center items-center sm:items-start p-2">
        <div className="flex flex-col gap-2 md:gap-3 p-2 w-1/2">
          <div>
            {/* <h1 className="text-2xl font-bold mt-4">{item.title}</h1> */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full  mt-4 rounded-lg object-cover"
            />
          </div>

          <div className="flex flex-col gap-1">
            {/*  Goal and status */}
            <div className="text-medium md:text-base text-[10px] flex justify-between items-center">
              <p className="text-[#7D7C7C] text-xs">Goal: {victimAmountGoal}</p>
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
            <div className="text-medium md:text-base text-[10px] flex justify-between items-center">
              <p className="text-black text-xs font-bold">
                Raised: {victimAmountGoal}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 w-1/2">
          <div className="flex items-center justify-center text-left">
            <p className="w-1/2">Name:{victimName}</p>
            <p className="w-1/2">Age:18</p>{" "}
            {/*fetch from backend and display here*/}
          </div>
          <div className="text-balance overflow-scroll md:overflow-hidden  h-[300px] sm:h-full ">
            <p>{victimDescription}</p>
          </div>
        </div>
      </div>
      <div id="qr_part" className="w-full flex gap-2 p-1 mb-4">
        <div className="flex flex-col gap-2 w-1/4">
          <div className="bg-amber-300 h-[80px] sm:h-[90px] md:h-[200px]  text-center flex justify-center items-center">
             QR
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/../src/assets/Khalti_logo.png"
              alt="Khalti_logo"
              className="object-cover w-[90px] sm:w-[110px] md:w-[150px] bg-transparent border-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-1/4">
          <div className="bg-amber-300 h-[80px] sm:h-[90px] md:h-[200px]  text-center flex justify-center items-center">
            QR
          </div>
          <img
            src="/../src/assets/logo_connectIPS.png"
            alt="ConnectIPS_logo"
            className="object-cover w-[90px] sm:w-[110px] md:w-[150px] bg-transparent border-none"
          />
        </div>
        <div className="flex flex-col gap-2 w-1/4">
          <div className="bg-amber-300 h-[80px] sm:h-[90px] md:h-[200px]  text-center flex justify-center items-center">
            QR
          </div>
          <img
            src="/../src/assets/esewa-logo.png"
            alt="esewa_logo"
            className="object-cover w-[90px] sm:w-[110px] md:w-[150px] bg-transparent border-none"
          />
        </div>
        <div className="flex flex-col gap-2 w-1/4">
          <div className="bg-amber-300 h-[80px] sm:h-[90px] md:h-[200px]  text-center flex justify-center items-center">
            QR
          </div>
          <div className="flex h-auto justify-center items-center">
            <img
              src="/../src/assets/Nepal_Rastra_Bank_Logo.jpeg"
              alt="NRB_logo"
              className="object-cover w-[80px] sm:w-[90px] md:w-[100px] bg-transparent border-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateDetail;
