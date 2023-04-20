import Link from "next/link";
import { NavbarItem } from "./NavbarItem";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  className?: string;
}

export const Navbar = (props: Props) => {
  const navbarItems = [
    { title: "About", path: "/about" },
    { title: "Builds", path: "/builds" },
    { title: "Awards", path: "/awards" },
    { title: "Events", path: "/events" },
    { title: "Media", path: "/media" },
    { title: "Sponsors", path: "/sponsors" },
    { title: "Contact Us" , path: "/contact"},
  ];

  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <div
        className={`${props.className} flex flex-col mt-10 space-y-2 text-gray-300`}
      >
        <div className="flex-wrap md:flex justify-center items-center md:pr-0 md:pl-0 pr-10 pl-10 transition delay-50 hover:text-gray-500">
          <Link href="/" legacyBehavior>
            <a>
              <Image
                className="md:mr-5 mr-1 md:mb-0 mb-3 logo6070 px-2"
                src="/6070-logo.png"
                alt="6070 Logo"
                width="40"
                height="40"
                priority={true}
                quality={1}
              />
            </a>
          </Link>
         

          {navbarItems.map(
            (item: { title: string; path: string }, key: number) => {
              const isActive = item.path === currentPath;

              if (item.title === "Media") {
                return (
                  <>
<div className="absolute top-full left-0 z-10 w-full bg-gray-800 py-2 rounded-b-lg group-hover:block hidden">
                    aaa
                  </div></>
                )
              }
              return (
                <Link href={item.path} legacyBehavior key={key}>
                  <a>
                    <NavbarItem title={item.title} isActive={isActive} />
                  </a>
                </Link>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};
