
import * as Tabs from "@radix-ui/react-tabs";

const tabStyle =
  "px-4 py-2 text-xs bg-zinc-100 lg:text-[20px] rounded-sm hover:bg-zinc-200 hover:cursor-pointer text-black transition-all data-[state=active]:bg-[#DC241F] data-[state=active]:text-white";

// helper to create safe tab values
const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const GalleryTab = () => {
  
const images = [
  "https://i.pinimg.com/1200x/77/ee/90/77ee907b55ef1f48dae1d052cbe8dc99.jpg",
  "https://i.pinimg.com/736x/a2/d4/a4/a2d4a49978209f278b03290eb4484e08.jpg",
  "https://i.pinimg.com/736x/39/c7/ec/39c7ec7da24be5f23541f121d91519d4.jpg",
  "https://i.pinimg.com/736x/c5/af/d6/c5afd62745141227aa8d530d090d7bf1.jpg",
  "https://i.pinimg.com/736x/d1/fd/be/d1fdbe83b1ec80029c4affe352cca529.jpg",
  "https://i.pinimg.com/736x/4f/d9/21/4fd9211236bfb8b08aab83fcb6aab8fa.jpg",
  "https://i.pinimg.com/736x/29/5a/22/295a22a165b661cf44e06ec17f8ac6ed.jpg",
  "https://i.pinimg.com/1200x/91/4b/eb/914bebfe7b2088217ee37597569ce3c1.jpg",
];
  const tabData = [
    {
      title: "All",
      content: (
        <div className="columns-3 gap-2">
          {images.map((imgsrc,idx)=>(
            <img key={idx} src={imgsrc} alt="" className="mb-2"/>
          ))}
          
        </div>
      ),
    },
    {
      title: "Events",
      content: (
        <div className="columns-3 gap-2">
          {/* 🖼️ Add event images or descriptions */}
          <p className="text-center text-zinc-500">Event-related images go here.</p>
        </div>
      ),
    },
    {
      title: "Volunteer Works",
      content: (
        <div className="columns-3 gap-2">
          <p className="text-center text-zinc-500">
            Photos or details of volunteer works go here.
          </p>
        </div>
      ),
    },
    {
      title: "Social Campaigns",
      content: (
        <div className="columns-3 gap-2">
          <p className="text-center text-zinc-500">
            Add your social campaign gallery or write-up here.
          </p>
        </div>
      ),
    },
    {
      title: "Workshops And Training",
      content: (
        <div className="columns-3 gap-2">
          <p className="text-center text-zinc-500">
            Show photos or details of workshops/training programs.
          </p>
        </div>
      ),
    },
    {
      title: "GenZ Protest",
      content: (
        <div className="columns-3 gap-2">
          <p className="text-center text-zinc-500">
            Add your GenZ protest visuals or updates here.
          </p>
        </div>
      ),
    },
  ];

  return (
    <Tabs.Root
      defaultValue={slug(tabData[0].title)}
      className="w-full flex flex-col gap-6"
    >
      {/* --- Tab Buttons --- */}
      <Tabs.List className="flex gap-2 lg:gap-6 text-xs lg:text-sm flex-wrap">
        {tabData.map((tab) => (
          <Tabs.Trigger key={tab.title} value={slug(tab.title)} className={tabStyle}>
            {tab.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {/* --- Tab Panels --- */}
      {tabData.map((tab) => (
        <Tabs.Content key={tab.title} value={slug(tab.title)}>
          {tab.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default GalleryTab;
