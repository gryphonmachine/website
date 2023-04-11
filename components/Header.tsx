import { Navbar } from "./navbar/Navbar";

export const Header = (props: any) => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col px-4 mt-16 mb-8">
        <p className="h text-center text-5xl font-black text-primary">
          {props.title}
        </p>
        <p className="text-center text-xl text-gray-400 py-3">
          {props.subtitle}
        </p>
      </div>
    </>
  );
};
