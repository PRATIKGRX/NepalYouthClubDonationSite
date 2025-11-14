import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import data from "../data/cases";
const DonateDetail = () => {
    const navigate=useNavigate();
  const { id } = useParams();
 const item = data.find((d) => d.id === Number(id)); // convert id to number

  if (!item) {
    return <h1>Not Found</h1>;
  }
  return (
     <div className="p-4">
      <button
        onClick={() => navigate("/donate")}
        className="hover:cursor-pointer text-[12px] md:text-[16px] px-3 py-2 rounded-[5px] text-white bg-[#DC241F]"
      >
        Go Back
      </button>

      <h1 className="text-2xl font-bold mt-4">{item.title}</h1>

      <img
        src={item.image}
        alt={item.title}
        className="w-full max-w-md mt-4 rounded-lg"
      />

      <p className="mt-4 text-lg">{item.desc}</p>

      <p className="mt-2">
        <strong>Raised:</strong> {item.raised}
      </p>

      <p className="mt-1">
        <strong>Goal:</strong> {item.goal}
      </p>

      <p className="mt-1">
        <strong>Status:</strong> {item.status}
      </p>
    </div>
  );
};

export default DonateDetail;
