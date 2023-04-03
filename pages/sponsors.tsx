import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Season = (props: any) => {
  return (
    <div
      className={`${props.className} ${
        props.className === "chargedUp" && "hover:bg-gray-400"
      } hover:cursor-pointer border-solid border-2 border-primary rounded-lg md:w-[800px] w-[350px] px-10 py-24`}
    >
      <h1 className="text-4xl font-bold text-center mb-2">{props.title}</h1>
      <p className="text-center text-gray-300 font-bold">
        {props.subtitle} Season
      </p>
    </div>
  );
};

export default function SponsorsPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col px-4 mt-16">
        <p className="h text-center text-5xl font-bold text-primary">
          Sponsors
        </p>
        <p className="text-center text-xl text-gray-400 py-3">
          We wouldn&apos;t be here without you. Thank you.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="rounded-xl w-[1200px] px-10 ">
          <div className="hero container max-w-screen-lg mx-auto flex justify-center">
            <img
              width="1000"
              height="6000"
              src="https://i.ibb.co/vHWy13g/Screenshot-2023-04-03-at-6-47-38-PM.png"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
