export const Season = (props: any) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-[#232936] rounded-lg md:w-[800px] w-[350px] px-10 py-8">
        <h1 className="text-secondary md:text-4xl text-3xl font-bold text-center mb-10">
          <span className="text-gray-400">
            {props.title && "We named it ... "}{" "}
            <span className="text-white">{props.title && `${props.title}!`}</span>
          </span>
        </h1>

        {...props?.children}
      </div>
    </div>
  );
};
