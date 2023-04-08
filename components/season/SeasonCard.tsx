export const SeasonCard = (props: any) => {
  return (
    <div
      className={`${props.className} group/arrow hover:cursor-pointer border-solid border-2 border-primary hover:border-white rounded-lg md:w-[800px] px-10 py-24`}
    >
      <h1 className="text-4xl text-white font-bold text-center mb-2">
        {props.title}{" "}
        <span className="hidden group-hover/arrow:inline-block">
          →
        </span>
      </h1>
      <p className="text-center text-gray-300 font-bold">
        {props.subtitle} Season
      </p>
    </div>
  );
};
