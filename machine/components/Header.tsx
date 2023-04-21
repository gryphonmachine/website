import Link from "next/link";

export const Header = () => {
  return (
    <>
      <Link href="/" legacyBehavior>
        <a>
          <h1 className="text-center text-primary hover:text-white md:text-5xl text-3xl font-black mt-16 mb-2">
            Machine: Scouting Simplified
          </h1>
        </a>
      </Link>
      <p className="text-gray-400 text-center">
        6070 presents Machine - I need to rewrite this.
      </p>
    </>
  );
};
