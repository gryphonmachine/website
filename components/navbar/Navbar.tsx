import Link from "next/link";
import { NavbarItem } from "./NavbarItem";
import { useState } from "react";

export const Navbar = () => {
  return (
    <>
      <div className="flex flex-col justify-center mt-10 4 space-y-2 items-center text-gray-300">
        <div>
          <Link href="/" legacyBehavior>
            <a>
              <NavbarItem title="🤖" />
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

          <Link href="/awards" legacyBehavior>
            <a>
              <NavbarItem title="Awards" />
            </a>
          </Link>

          <Link href="/sponsors" legacyBehavior>
            <a>
              <NavbarItem title="Sponsors" />
            </a>
          </Link>
        </div>

        <div className="md:pl-10">
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

          <Link href="/case-studies" legacyBehavior>
            <a>
              <NavbarItem title="Case Studies" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
