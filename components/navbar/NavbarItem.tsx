export const NavbarItem = (props: any) => {
  return (
    <span
      className={`${props.className} ${
        props.isActive ? "text-yellow-500" : ""
      } px-2 md:pr-6 space-x-3 transition delay-50 md:space-x-6 hover:text-primary hover:cursor-pointer`}
    >
      {props.title}
    </span>
  );
};
