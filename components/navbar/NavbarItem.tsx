export const NavbarItem = (props: any) => {
  return (
    <span className="px-1 md:pr-6 space-x-3 md:space-x-6 hover:text-primary focus:text-primary hover:cursor-pointer">
      {props.title}
    </span>
  );
};
