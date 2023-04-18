export const Season = (props: any) => {
  return (
    <div className="flex items-center justify-center p-5">
      <div
        className={`${props.className} bg-gray-900 rounded-lg md:w-[800px] px-10 py-10`}
      >
        <h1 className="md:text-3xl text-3xl font-bold text-left mb-10">
          <span className="text-gray-400">
            <span>{props.title && `Introducing... `}</span>
            <span className="text-white">
              {props.title && `${props.title}`}
            </span>
            {props.title && `!`}
          </span>
        </h1>

        {...props?.children}
      </div>
    </div>
  );
};
