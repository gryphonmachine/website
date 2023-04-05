export const Subtitle = (props: any) => {
  return (
    <p className={`text-xl text-gray-400 ${props.className}`}>{...props.children}</p>
  );
};
