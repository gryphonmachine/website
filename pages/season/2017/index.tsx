import { Header } from "@/components/Header";
import { Season } from "@/components/season/Season";
import { Footer } from "@/components/Footer";
import { TabButton } from "@/components/TabButton";
import { useState } from "react";
import { GameRevealScreen2017 } from "@/components/screens/season/2017/GameRevealScreen";
import { EventsScreen2017 } from "@/components/screens/season/2017/EventsScreen";

export default function Season2017() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <Header title="FIRST Steamworks" season="2017" />

      <div className="flex items-center justify-center space-x-4 mb-8 mt-[-15px]">
        <TabButton active={activeTab} tab={1} onClick={() => handleTabClick(1)}>
          <span className="mr-2">🎮</span> Game Reveal
        </TabButton>
        <TabButton active={activeTab} tab={2} onClick={() => handleTabClick(2)}>
          <span className="mr-2">🎉</span> Events
        </TabButton>
      </div>

      <Season title="Prattbot A.K.A Geary">
        {activeTab === 1 && <GameRevealScreen2017 />}
        {activeTab === 2 && <EventsScreen2017 />}
      </Season>

      <Footer />
    </>
  );
}
