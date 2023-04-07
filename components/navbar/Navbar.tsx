import Link from "next/link";
import { NavbarItem } from "./NavbarItem";
import Image from "next/image";

export const Navbar = () => {
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

          <Link href="/builds" legacyBehavior>
            <a>
              <NavbarItem title="Builds" />
            </a>
          </Link>

          <Link href="/awards" legacyBehavior>
            <a>
              <NavbarItem title="Awards" />
            </a>
          </Link>

          <Link href="/events" legacyBehavior>
            <a>
              <NavbarItem title="Events" />
            </a>
          </Link>

          <Link href="/media" legacyBehavior>
            <a>
              <NavbarItem title="Media" />
            </a>
          </Link>

          <Link href="/sponsors" legacyBehavior>
            <a>
              <NavbarItem title="Sponsors" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
