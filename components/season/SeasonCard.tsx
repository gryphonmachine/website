export const SeasonCard = (props: any) => {
  return (
    <div
      className={`${props.className} ${
        props.className === "chargedUp" && "hover:bg-gray-400"
      } hover:cursor-pointer hover:bg-gray-400 border-solid border-2 border-primary rounded-lg md:w-[800px] w-[350px] px-10 py-24`}
    >
      <h1 className="text-4xl font-bold text-center mb-2">{props.title}</h1>
      <p className="text-center text-gray-300 font-bold">
        {props.subtitle} Season
      </p>
    </div>
  );
};
