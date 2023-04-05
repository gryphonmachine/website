export const Title = (props: any) => {
  return (
    <h3 className="text-secondary text-2xl font-semibold mb-5">
      <b>{...props.children}</b>
    </h3>
  );
};
