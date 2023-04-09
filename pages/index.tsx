import Head from "next/head";
import { useState, useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import Image from "next/image";
import { phrases } from "@/lib/lists/Phrases";

export default function Home() {
  const [phrase, setPhrase] = useState("Gryphon Machine");
  const [usedPhrases, setUsedPhrases] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      let randomIndex = Math.floor(Math.random() * phrases.length);
      while (usedPhrases.includes(phrases[randomIndex])) {
        randomIndex = (randomIndex + 1) % phrases.length;
      }
      const newPhrase = phrases[randomIndex];
      setPhrase(newPhrase);
      setUsedPhrases([...usedPhrases, newPhrase]);
      if (usedPhrases.length === phrases.length) {
        setUsedPhrases([]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [usedPhrases]);

  return (
    <>
      <Head>
        <title>6070: Gryphon Machine</title>
      </Head>
      <div className="bg-sky-300 bg-opacity-10">
        <div className="relative h-screen">
          <Image
            className="absolute inset-0 w-full h-full object-cover opacity-25"
            src="/season/6070-steamworks.jpg"
            alt="Background Image"
            priority={true}
            fill
            style={{ zIndex: -1 }}
          />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">
              <div className="flex flex-col md:items-center md:justify-center mt-[150px] md:mt-[225px] md:pl-0 md:pr-0 pl-10 pr-10 flex-grow">
                <h1 className="font-black text-white text-8xl md:text-9xl">
                  WE ARE
                  <a
                    href="https://frc-events.firstinspires.org/team/6070"
                    target="_blank"
                  >
                    <span className="text-primary hover:text-white hover:cursor-pointer group-hover:text-white">
                      {" "}
                      6070
                    </span>
                    .
                  </a>
                </h1>
                <p className="text-xl font-bold uppercase mt-5 text-gray-400 pl-2">
                  {phrase}
                </p>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
