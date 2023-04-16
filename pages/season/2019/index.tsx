import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Season } from "@/components/season/Season";
import { TabButton } from "@/components/TabButton";
import { useState } from "react";
import { GameRevealScreen2019 } from "@/components/screens/season/2019/GameRevealScreen";
import { EventsScreen2019 } from "@/components/screens/season/2019/EventsScreen";

export default function Season2019() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <Header title="Destination: Deep Space" season="2019" />

      <div className="flex items-center justify-center space-x-4 mb-8 mt-[-15px]">
        <TabButton active={activeTab} tab={1} onClick={() => handleTabClick(1)}>
          <span className="mr-2">🎮</span> Game Reveal
        </TabButton>
        <TabButton active={activeTab} tab={2} onClick={() => handleTabClick(2)}>
          <span className="mr-2">🎉</span> Events
        </TabButton>
      </div>

      <Season title="Pingu">
        {activeTab === 1 && <GameRevealScreen2019 />}
        {activeTab === 2 && <EventsScreen2019 />}
      </Season>

      <Footer />
    </>
  );
}
