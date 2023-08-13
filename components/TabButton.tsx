import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  active: number;
  tab: number;
  children: ReactNode;
}

export const TabButton = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 ${
        props.active === props.tab
          ? "bg-gray-700 text-white"
          : "text-gray-400 bg-gray-800 hover:bg-gray-600 hover:text-white"
      }`}
    >
      {props.children}
    </button>
  );
};
