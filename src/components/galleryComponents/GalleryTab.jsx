import * as Tabs from "@radix-ui/react-tabs";

const tabStyle =
  "px-4 py-2 text-xs bg-zinc-100 lg:text-[20px] rounded-sm hover:bg-zinc-200 hover:cursor-pointer text-black transition-all data-[state=active]:bg-[#DC241F] data-[state=active]:text-white";

const GalleryTab = () => {
  const tabItems = [
    "All",
    "Events",
    "Volunteer Works",
    "Social Campaigns",
    "Workshops And Training",
    "GenZ Protest",
  ];
  return (
    <>
      <Tabs.Root defaultValue="all" className="w-full flex flex-col gap-15 ">
        {/* --- Tab Buttons --- */}

        <Tabs.List className="flex gap-2 lg:gap-6 text-xs lg:text-sm flex-wrap">
          {tabItems.map((item) => (
            <Tabs.Trigger key={item || index} value={item.toLowerCase()} className={tabStyle}>
              {item}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {/* <Tabs.List className="flex lg:gap-6 text-xs lg:text-sm flex-wrap">
          <Tabs.Trigger value="all" className={tabStyle}>
            All
          </Tabs.Trigger>
          <Tabs.Trigger value="events" className={tabStyle}>
            Events
          </Tabs.Trigger>
          <Tabs.Trigger value="volunteerWorks" className={tabStyle}>
            Volunteer Works
          </Tabs.Trigger>
          <Tabs.Trigger value="socialCampaigns" className={tabStyle}>
            Social Campaigns
          </Tabs.Trigger>
          <Tabs.Trigger value="workshopsAndTraining" className={tabStyle}>
            Workshops & Training
          </Tabs.Trigger>
          <Tabs.Trigger value="genZProtest" className={tabStyle}>
            Gen-Z Protest
          </Tabs.Trigger>
        </Tabs.List> */}

        {/* --- Tab Panels --- */}
        <Tabs.Content value="all" className="">
          <div key="all" className="columns-3 gap-2">
            <img
              src="https://i.pinimg.com/1200x/77/ee/90/77ee907b55ef1f48dae1d052cbe8dc99.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/a2/d4/a4/a2d4a49978209f278b03290eb4484e08.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/39/c7/ec/39c7ec7da24be5f23541f121d91519d4.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/1200x/77/ee/90/77ee907b55ef1f48dae1d052cbe8dc99.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/c5/af/d6/c5afd62745141227aa8d530d090d7bf1.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/d1/fd/be/d1fdbe83b1ec80029c4affe352cca529.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/4f/d9/21/4fd9211236bfb8b08aab83fcb6aab8fa.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/29/5a/22/295a22a165b661cf44e06ec17f8ac6ed.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/1200x/91/4b/eb/914bebfe7b2088217ee37597569ce3c1.jpg"
              className="mb-2 w-full rounded-lg"
            />
          </div>
        </Tabs.Content>

        <Tabs.Content value="events" className="">
          <div key="events" className="columns-3 gap-2">
            <img
              src="https://i.pinimg.com/736x/d1/fd/be/d1fdbe83b1ec80029c4affe352cca529.jpg"
              className="mb-2 w-full rounded-lg"
            />

            <img
              src="https://i.pinimg.com/1200x/91/4b/eb/914bebfe7b2088217ee37597569ce3c1.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/39/c7/ec/39c7ec7da24be5f23541f121d91519d4.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/1200x/77/ee/90/77ee907b55ef1f48dae1d052cbe8dc99.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/c5/af/d6/c5afd62745141227aa8d530d090d7bf1.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/4f/d9/21/4fd9211236bfb8b08aab83fcb6aab8fa.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/29/5a/22/295a22a165b661cf44e06ec17f8ac6ed.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/1200x/77/ee/90/77ee907b55ef1f48dae1d052cbe8dc99.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/a2/d4/a4/a2d4a49978209f278b03290eb4484e08.jpg"
              className="mb-2 w-full rounded-lg"
            />
          </div>
        </Tabs.Content>

        <Tabs.Content value="volunteerWorks" className="">
          <div key="volunteerWorks" className="columns-3 gap-2">
            <img
              src="https://i.pinimg.com/1200x/77/ee/90/77ee907b55ef1f48dae1d052cbe8dc99.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/a2/d4/a4/a2d4a49978209f278b03290eb4484e08.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/39/c7/ec/39c7ec7da24be5f23541f121d91519d4.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/1200x/77/ee/90/77ee907b55ef1f48dae1d052cbe8dc99.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/c5/af/d6/c5afd62745141227aa8d530d090d7bf1.jpg"
              className="mb-2 w-full rounded-lg"
            />

            <img
              src="https://i.pinimg.com/736x/29/5a/22/295a22a165b661cf44e06ec17f8ac6ed.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/1200x/91/4b/eb/914bebfe7b2088217ee37597569ce3c1.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/d1/fd/be/d1fdbe83b1ec80029c4affe352cca529.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/4f/d9/21/4fd9211236bfb8b08aab83fcb6aab8fa.jpg"
              className="mb-2 w-full rounded-lg"
            />
          </div>
        </Tabs.Content>
        <Tabs.Content value="socialCampaigns" className="">
          <div key="socialCampaigns" className="columns-3 gap-2">
            <img
              src="https://i.pinimg.com/1200x/77/ee/90/77ee907b55ef1f48dae1d052cbe8dc99.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/a2/d4/a4/a2d4a49978209f278b03290eb4484e08.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/39/c7/ec/39c7ec7da24be5f23541f121d91519d4.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/1200x/77/ee/90/77ee907b55ef1f48dae1d052cbe8dc99.jpg"
              className="mb-2 w-full rounded-lg"
            />

            <img
              src="https://i.pinimg.com/736x/29/5a/22/295a22a165b661cf44e06ec17f8ac6ed.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/1200x/91/4b/eb/914bebfe7b2088217ee37597569ce3c1.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/c5/af/d6/c5afd62745141227aa8d530d090d7bf1.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/d1/fd/be/d1fdbe83b1ec80029c4affe352cca529.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/4f/d9/21/4fd9211236bfb8b08aab83fcb6aab8fa.jpg"
              className="mb-2 w-full rounded-lg"
            />
          </div>
        </Tabs.Content>
        <Tabs.Content value="workshopsAndTraining" className="">
          <div key="workshopsAndTraining" className="columns-3 gap-2">
            <img
              src="https://i.pinimg.com/736x/29/5a/22/295a22a165b661cf44e06ec17f8ac6ed.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/1200x/91/4b/eb/914bebfe7b2088217ee37597569ce3c1.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/1200x/77/ee/90/77ee907b55ef1f48dae1d052cbe8dc99.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/a2/d4/a4/a2d4a49978209f278b03290eb4484e08.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/39/c7/ec/39c7ec7da24be5f23541f121d91519d4.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/1200x/77/ee/90/77ee907b55ef1f48dae1d052cbe8dc99.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/c5/af/d6/c5afd62745141227aa8d530d090d7bf1.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/d1/fd/be/d1fdbe83b1ec80029c4affe352cca529.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/4f/d9/21/4fd9211236bfb8b08aab83fcb6aab8fa.jpg"
              className="mb-2 w-full rounded-lg"
            />
          </div>
        </Tabs.Content>
        <Tabs.Content value="genZProtest" className="">
          <div key="genZProtest" className="columns-3 gap-2">
            <img
              src="https://i.pinimg.com/1200x/77/ee/90/77ee907b55ef1f48dae1d052cbe8dc99.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/a2/d4/a4/a2d4a49978209f278b03290eb4484e08.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/39/c7/ec/39c7ec7da24be5f23541f121d91519d4.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/1200x/77/ee/90/77ee907b55ef1f48dae1d052cbe8dc99.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/c5/af/d6/c5afd62745141227aa8d530d090d7bf1.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/d1/fd/be/d1fdbe83b1ec80029c4affe352cca529.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/4f/d9/21/4fd9211236bfb8b08aab83fcb6aab8fa.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/736x/29/5a/22/295a22a165b661cf44e06ec17f8ac6ed.jpg"
              className="mb-2 w-full rounded-lg"
            />
            <img
              src="https://i.pinimg.com/1200x/91/4b/eb/914bebfe7b2088217ee37597569ce3c1.jpg"
              className="mb-2 w-full rounded-lg"
            />
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
};

export default GalleryTab;
