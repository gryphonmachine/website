import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Season } from "@/components/season/Season";
import { useState } from "react";
import { GameRevealScreen2024 } from "@/components/screens/season/2024/GameRevealScreen";
import { EventsScreen2024 } from "@/components/screens/season/2024/EventsScreen";
import { RobotsScreen2024 } from "@/components/screens/season/2024/RobotsScreen";
import { TabButton } from "@/components/TabButton";

export default function Season2024() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <Header title="Crescendo presented by Haas" season="2024" />

      <div className="flex flex-wrap items-center justify-center gap-4 mb-2 mt-[-15px]">
        <TabButton active={activeTab} tab={1} onClick={() => handleTabClick(1)}>
          <span className="mr-2">🎮</span> Game Reveal
        </TabButton>
        <TabButton active={activeTab} tab={2} onClick={() => handleTabClick(2)}>
          <span className="mr-2">🤖</span> Robots
        </TabButton>
        <TabButton active={activeTab} tab={3} onClick={() => handleTabClick(3)}>
          <span className="mr-2">🎉</span> Events
        </TabButton>
      </div>

      <Season
        title="SAM Bluey"
        manual="https://firstfrc.blob.core.windows.net/frc2024/Manual/2024GameManual.pdf"
        code="https://github.com/gryphonmachine/2024"
        isSeason={true}
      >
        {activeTab === 1 && <GameRevealScreen2024 />}
        {activeTab === 2 && <RobotsScreen2024 />}
        {activeTab === 3 && <EventsScreen2024 />}
      </Season>

      <Footer />
    </>
  );
}
