import Link from "next/link";
import { NavbarItem } from "./NavbarItem";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-center mt-10 items-center text-gray-300">
        <Link href="/" legacyBehavior>
          <a>
            <NavbarItem title="🤖" />
          </a>
        </Link>

        <Link href="/about" legacyBehavior>
          <a>
            <NavbarItem title="About" />
          </a>
        </Link>

        <Link href="/team" legacyBehavior>
          <a>
            <NavbarItem title="Team" />
          </a>
        </Link>

        <Link href="/builds" legacyBehavior>
          <a>
            <NavbarItem title="Builds" />
          </a>
        </Link>

        <Link href="/sponsors" legacyBehavior>
          <a>
            <NavbarItem title="Sponsors" />
          </a>
        </Link>
      </div>
    </>
  );
};
