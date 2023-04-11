import Head from "next/head";
import { useState, useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import Image from "next/image";
import { phrases } from "@/lib/lists/Phrases";
import Link from "next/link";
import { bgImages } from "@/lib/lists/bgImages";

export default function Home() {
  const [phrase, setPhrase] = useState("Gryphon Machine");
  const [usedPhrases, setUsedPhrases] = useState<string[]>([]);
  const [bgImageIndex, setBgImageIndex] = useState(
    Math.floor(Math.random() * bgImages.length)
  );
  const [bgImageOpacity, setBgImageOpacity] = useState(0.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImageOpacity(0);
      setTimeout(() => {
        setBgImageIndex(Math.floor(Math.random() * bgImages.length));

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

        setBgImageOpacity(0.2);
      }, 3000);
    }, 5000);

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
            className="backgroundImage absolute inset-0 w-full h-full object-cover"
            src={bgImages[bgImageIndex]}
            alt="Background Image"
            priority={true}
            fill
            style={{ opacity: bgImageOpacity, transition: "opacity 1s" }}
          />
          <div className="flex flex-col min-h-screen z-10">
            <Navbar />
            <div className="flex-grow">
              <div className="flex flex-col md:items-center md:justify-center mt-[150px] md:mt-[225px] md:pl-0 md:pr-0 pl-10 pr-10 flex-grow">
                <div className="flex">
                  <a href="https://www.firstroboticscanada.org">
                    {" "}
                    <Image
                      className="mr-3"
                      src="/first-logo.png"
                      height="150"
                      width="150"
                      alt="FIRST Robotics Logo"
                    />
                  </a>
                  <p className="font-black text-3xl">x</p>
                  <Link href="/" legacyBehavior>
                    <a>
                      <Image
                        className="logo6070 ml-3"
                        src="/6070-logo.png"
                        height="30"
                        width="40"
                        alt="6070 Logo"
                      />
                    </a>
                  </Link>
                </div>
                <h1 className="font-black text-white text-8xl md:text-9xl">
                  WE ARE
                  <a
                    href="https://frc-events.firstinspires.org/team/6070"
                    target="_blank"
                  >
                    <span className="text-primary hover:cursor-pointer">
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
