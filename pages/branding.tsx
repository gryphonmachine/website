import { Header } from "@/components/Header";
import Image from "next/image";
import { RiDownloadCloudFill } from "react-icons/ri";

export default function Branding() {
  return (
    <>
      <Header
        title="🎨 Branding"
        subtitle="Check out our team's branding (ex. logos, banners, etc)"
      />

      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center flex-col mt-5 md:grid md:grid-cols-3 gap-16 bg-gray-800 border-2 border-gray-600 rounded-lg px-10 py-8 md:w-[750px] w-[350px]">
          <div>
            <Image
              src="/6070-logo.png"
              className="mb-5"
              alt="6070 Logo"
              height="175"
              width="175"
            />{" "}
            <a href="/6070-griffy-logo.png" download>
              <button className="bg-gray-700 hover:bg-gray-600 py-2 px-8 rounded-lg font-bold">
                <div className="flex mb-[-3px]">
                  <RiDownloadCloudFill className="mr-2 text-2xl" /> Download
                </div>
                <span className="text-gray-400 uppercase text-xs font-medium">
                  6070 Logo
                </span>
              </button>
            </a>
          </div>
          <div>
            <Image
              src="/6070-griffy-logo.png"
              className="mb-5 border-2 border-white rounded-full"
              alt="6070 Logo"
              height="175"
              width="175"
            />{" "}
            <a href="/6070-griffy-logo.png" download>
              <button className="bg-gray-700 hover:bg-gray-600 py-2 px-8 rounded-lg font-bold">
                <div className="flex mb-[-3px]">
                  <RiDownloadCloudFill className="mr-2 text-2xl" /> Download
                </div>
                <span className="text-gray-400 uppercase text-xs font-medium">
                  Griffy Logo
                </span>
              </button>
            </a>
          </div>
          <div>
            <Image
              src="/6070-griffydev-logo.png"
              className="mb-5 border-2 border-white rounded-full"
              alt="6070 Logo"
              height="175"
              width="175"
            />{" "}
            <a href="/6070-griffydev-logo.png" download>
              <button className="bg-gray-700 hover:bg-gray-600 py-2 px-8 rounded-lg font-bold">
                <div className="flex mb-[-3px]">
                  <RiDownloadCloudFill className="mr-2 text-2xl" /> Download
                </div>

                <span className="text-gray-400 uppercase text-xs font-medium">
                  Griffy Dev Logo
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
