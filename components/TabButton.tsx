import useSound from "use-sound";

export const TabButton = (props: any) => {
  const [play] = useSound("/switch-page.mp3");

    return (
      <button
        onClick={() => {
          props.onClick()
          play()
        }}
        className={`px-5 py-2 rounded-lg font-semibold ${
          props.active === props.tab
            ? "bg-gray-600 text-white"
            : "text-gray-400 bg-gray-800 hover:bg-gray-600 hover:text-white"
        }`}
      >
        {...props.children}
      </button>
    );
  };