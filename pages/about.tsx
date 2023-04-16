import Head from "next/head";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { GeneralScreen } from "@/components/screens/about/General";
import { CaptainsScreen } from "@/components/screens/about/Captains";
import { TabButton } from "@/components/TabButton";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <Head>
        <title>About [6070: Gryphon Machine]</title>
      </Head>

      <Header
        title="❔ About Us"
        subtitle="Discover the people, passion, and purpose behind Team 6070"
      />

      <div className="flex items-center justify-center space-x-4 mb-8 mt-[-15px]">
        <TabButton active={activeTab} tab={1} onClick={() => handleTabClick(1)}>
          <span className="mr-2">🤔</span> General
        </TabButton>
        <TabButton active={activeTab} tab={2} onClick={() => handleTabClick(2)}>
          <span className="mr-2">👥</span> Mentors & Captains
        </TabButton>
      </div>

      <div className="flex items-center justify-center pr-5 pl-5">
        {activeTab === 1 && <GeneralScreen />}
        {activeTab === 2 && <CaptainsScreen />}
      </div>

      <Footer />
    </>
  );
}
