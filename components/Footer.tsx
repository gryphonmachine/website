import Image from "next/image";

export const Footer = () => {
  return (
    <div className="px-4 py-2 pb-12 mt-10 rounded-lg flex flex-col md:items-center md:justify-center md:text-center pl-10 md:pl-0">
      <div className="text-gray-300 text-sm uppercase mb-3">
        Copyright © {new Date().getFullYear()} ⎯{" "}
        <span className="text-gray-400 font-bold">Team 6070 Gryphon Machine</span>
      </div>

      <a
        href="https://www.vercel.com?utm_source=6070-gryphon-machine&utm_campaign=oss"
        target="_blank"
      >
        <Image
          src="/vercel.svg"
          height="175"
          width="175"
          alt="Vercel Powered By"
          priority={true}
          quality={1}
        />
      </a>
    </div>
  );
};
