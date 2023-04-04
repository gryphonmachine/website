export const Header = (props: any) => {
  return (
    <div className="flex flex-col px-4 mt-16 mb-8">
      <p className="h text-center text-5xl font-bold text-primary">
        {props.title}
      </p>
      <p className="text-center text-xl text-gray-400 py-3">{props.subtitle}</p>
    </div>
  );
};
