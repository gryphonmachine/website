import Link from "next/link";
import { NavbarItem } from "./NavbarItem";
import Image from "next/image";
import { useRouter } from "next/router";

export const Navbar = (props: any) => {
  const navbarItems = [
    { title: "About", path: "/about" },
    { title: "Builds", path: "/builds" },
    { title: "Awards", path: "/awards" },
    { title: "Events", path: "/events" },
    { title: "Media", path: "/media" },
    { title: "Sponsors", path: "/sponsors" },
  ];

  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <div
        className={`${props.className} flex flex-col mt-10 4 space-y-2 text-gray-300`}
      >
        <div className="flex-wrap flex justify-center items-center md:pr-0 md:pl-0 pr-10 pl-10 transition delay-50 hover:text-gray-400">
          <Link href="/" legacyBehavior>
            <a>
              <Image
                className="mr-5 logo6070"
                src="/6070-logo.png"
                alt="6070 Logo"
                width="25"
                height="25"
                priority={true}
                quality={1}
              />
            </a>
          </Link>

          {navbarItems.map((item: any, key: number) => {
            const isActive = item.path === currentPath;

            return (
              <Link href={item.path} legacyBehavior key={key}>
                <a>
                  <NavbarItem title={item.title} isActive={isActive} />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
