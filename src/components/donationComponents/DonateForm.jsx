import * as Tabs from "@radix-ui/react-tabs";
import { IoClose } from "react-icons/io5";
import { useRef, useEffect } from "react";
import esewa from '../../assets/donation/esewa.png';
import khalti from '../../assets/donation/khalti.png';
const tabStyle =
  "px-4 py-2 text-xs bg-zinc-100 lg:text-[14px] rounded-sm hover:bg-zinc-200 hover:cursor-pointer text-black transition-all data-[state=active]:bg-[#DC241F] data-[state=active]:text-white flex items-center gap-1";

const slug = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const DonateForm = ({ openForm, setOpenForm ,esewaQr}) => {
  const ref = useRef();

  // ------------------------------
  // 🔥 Close on outside click
  // ------------------------------
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenForm(false);
      }
    };

    if (openForm) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [openForm, setOpenForm]);
  // ------------------------------

  const tabData = [
    {
      title: "Esewa",
      logo: esewa,
      content: (
        <div className="p-4">
          <p className="text-zinc-600 text-center">
            <div className="flex w-full justify-center">
                <img src={esewaQr} alt='victim qr' className="h-[50vh]" />
            </div>
          </p>
        </div>
      ),
    },
    {
      title: "Khalti",
       logo: khalti,
      content: (
        <div className="p-4">
          <p className="text-zinc-600 text-center">
             <div className="flex w-full justify-center">
                <img src={esewaQr} alt='victim qr' className="h-[50vh]" />
            </div>
          </p>
        </div>
      ),
    },
    {
      title: "Ebank",
       logo: esewa,
      content: (
        <div className="p-4">
          <p className="text-zinc-600 text-center">
            <div className="flex w-full justify-center">
                <img src={esewaQr} alt='victim qr' className="h-[50vh]" />
            </div>
          </p>
        </div>
      ),
    },
    {
      title: "Other",
       logo: esewa,
      content: (
        <div className="p-4">
          <p className="text-zinc-600 text-center">
             <div className="flex w-full justify-center">
                <img src={esewaQr} alt='victim qr' className="h-[50vh]" />
            </div>
          </p>
        </div>
      ),
    },
  ];

  return (
    <div
      className={`h-screen w-screen fixed top-0 right-0 bg-white/70 backdrop-blur-sm flex justify-center items-center z-50 ${
        openForm ? "" : "hidden"
      }`}
    >
      <div
        ref={ref}
        className="bg-white shadow-xl p-6 rounded-lg w-full sm:w-[90%] md:max-w-lg relative"
      >
        <button
          className="absolute top-4 right-4 sm:top-3 sm:right-3 text-xl hover:cursor-pointer"
          onClick={() => setOpenForm(false)}
        >
          <IoClose />
        </button>

        <Tabs.Root
          defaultValue={slug(tabData[0].title)}
          className="w-full flex flex-col gap-6"
        >
          <Tabs.List className="flex gap-2 justify-center flex-wrap">
            {tabData.map((tab) => (
              <Tabs.Trigger
                key={tab.title}
                value={slug(tab.title)}
                className={tabStyle}
              >
                <img src={tab.logo} alt={tab.title} className="h-5 w-5" />{tab.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {tabData.map((tab) => (
            <Tabs.Content
              key={tab.title}
              value={slug(tab.title)}
              className="text-center"
            >
              {tab.content}
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </div>
  );
};

export default DonateForm;
