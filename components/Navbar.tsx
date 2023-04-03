import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-center mt-10 items-center text-gray-300">
        <Link href="/" legacyBehavior>
          <a className="mt-2 px-3 pr-3 md:pr-6 space-x-3 md:space-x-6 hover:text-primary focus:text-primary">
            🤖
          </a>
        </Link>

        <Link href="/team" legacyBehavior>
          <a className="mt-2 px-3 pr-3 md:pr-6 space-x-3 md:space-x-6 hover:text-primary focus:text-primary">
            Team
          </a>
        </Link>

        <Link href="/builds" legacyBehavior>
          <a className="mt-2 px-3 pr-3 md:pr-6 space-x-3 md:space-x-6 hover:text-primary focus:text-primary">
            Builds
          </a>
        </Link>

        <Link href="/media" legacyBehavior>
          <a className="mt-2 px-3 pr-3 md:pr-6 space-x-3 md:space-x-6 hover:text-primary focus:text-primary">
            Media
          </a>
        </Link>

        <Link href="/sponsors" legacyBehavior>
          <a className="mt-2 px-3 pr-3 md:pr-6 space-x-3 md:space-x-6 hover:text-primary focus:text-primary">
            Sponsors
          </a>
        </Link>
      </div>
    </>
  );
};
