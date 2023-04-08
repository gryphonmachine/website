export const Title = (props: any) => {
  return (
    <h3
      className={`${props.className} text-primary text-2xl font-semibold mb-5`}
    >
      <b>{...props.children}</b>
    </h3>
  );
};
