import Link from "next/link";
import { NavbarItem } from "./NavbarItem";
import Image from "next/image";

export const Navbar = () => {
  const navbarItems = ["About", "Builds", "Awards", "Events", "Media", "Sponsors"];

  return (
    <>
      <div className="flex flex-col mt-10 4 space-y-2 text-gray-300">
        <div className="flex-wrap flex justify-center items-center md:pr-0 md:pl-0 pr-10 pl-10">
          <Link href="/" legacyBehavior>
            <a>
              <Image
                className="mr-5 logo6070"
                src="/6070-logo.png"
                alt="6070 Logo"
                width="25"
                height="25"
              />
            </a>
          </Link>

          {navbarItems.map((item: any, key: number) => {
            return (
              <Link href={`/${item.toLowerCase()}`} legacyBehavior key={key}>
                <a>
                  <NavbarItem title={item} />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};