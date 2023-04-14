import Head from "next/head";
import { useState, useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { bgImages } from "@/lib/lists/bgImages";

export default function Home() {
  const [bgImageIndex, setBgImageIndex] = useState(
    Math.floor(Math.random() * bgImages.length)
  );
  const [bgImageOpacity, setBgImageOpacity] = useState(0.2);
  const [loaded, setLoaded] = useState(false);
  const [screenLoaded, setScreenLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setScreenLoaded(true);
    }, 4000);

    const interval = setInterval(() => {
      setBgImageOpacity(0);
      setLoaded(false);
      setTimeout(() => {
        setBgImageIndex(Math.floor(Math.random() * bgImages.length));

        setBgImageOpacity(0.2);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>6070: Gryphon Machine</title>
      </Head>
      <div className="bg-sky-300 bg-opacity-10">
        <div className="relative h-screen">
          {!screenLoaded && (
            <div className="fadeOut flex items-center justify-center absolute bg-black inset-0 z-50">
              <div className="loading-screen">
                <div className="curtain left"></div>
                <div className="curtain right"></div>
                <div className="flex items-center animate-bounce">
                  <Image
                    className="mr-5"
                    src="/6070-logo.png"
                    height="40"
                    width="50"
                    alt="6070 Logo"
                    priority={true}
                  />
                  <p className="font-black text-white text-4xl md:text-5xl">
                    TEAM 6070
                  </p>
                </div>
              </div>
            </div>
          )}
          <Image
            className="backgroundImage absolute inset-0 w-full h-full object-cover"
            src={bgImages[bgImageIndex]}
            alt="Background Image"
            priority={true}
            fill
            onLoad={() => setLoaded(true)}
            style={{
              opacity: loaded ? bgImageOpacity : 0,
              transition: "opacity 1s",
            }}
          />
          <div className="flex flex-col min-h-screen z-10">
            <Navbar className="mb-[100px] md:mb-[205px]" />
            <div className="flex-grow">
              <div className="flex flex-col md:items-center md:justify-center pl-10 pr-10 flex-grow">
                <div className="flex md:mb-5 mb-[50px]">
                  <a href="https://www.firstroboticscanada.org">
                    {" "}
                    <Image
                      className="mr-3"
                      src="/first-logo.png"
                      height="150"
                      width="150"
                      alt="FIRST Robotics Logo"
                      priority={true}
                    />
                  </a>
                  <p className="font-black text-white text-3xl">x</p>
                  <Link href="/" legacyBehavior>
                    <a>
                      <Image
                        className="logo6070 ml-3"
                        src="/6070-logo.png"
                        height="30"
                        width="40"
                        alt="6070 Logo"
                        priority={true}
                      />
                    </a>
                  </Link>
                </div>

                <div className="text-white font-black text-8xl md:text-[100px]">
                  WE ARE{" "}
                  <a
                    href="https://frc-events.firstinspires.org/team/6070"
                    target="_blank"
                  >
                    <span className=" text-primary">6070.</span>
                  </a>
                  <span className=" text-blue-400"></span>
                </div>
                <p className="text-xl md:text-3xl font-medium mt-5 text-gray-400 pl-2">
                  A{" "}
                  <a href="https://www.firstinspires.org/" target="_blank">
                    <span className="italic mr-1">FIRST®</span>
                  </a>{" "}
                  Robotics Team
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
