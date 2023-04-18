import { Subtitle } from "../Subtitle";

export const SeasonEvent = (props: any) => {
  return (
    <div className="group/arrow bg-gray-700 border-2 border-gray-500 px-10 py-7 rounded-lg hover:bg-gray-600 hover:text-white">
      <h1 className="text-gray-200 text-2xl font-bold mb-3">
        {props.title}{" "}
        <span className="hidden group-hover/arrow:inline-block">➡️</span>
      </h1>

      <Subtitle className="mt-[-10px]">{props.date}</Subtitle>
    </div>
  );
};
