import useSound from "use-sound";

interface Props {
  className?: string;
  isActive: boolean;
  title: string;
}

export const NavbarItem = (props: Props) => {
  const [play] = useSound("/switch-page.mp3");

  return (
    <button
      className={`${props.className} ${
        props.isActive ? "text-yellow-500" : ""
      } px-2 md:pr-6 space-x-3 transition delay-50 md:space-x-6 hover:text-primary hover:cursor-pointer`}
      onClick={() => play()}
    >
      {props.title}
    </button>
  );
};
