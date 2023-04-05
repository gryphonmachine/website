import Image from "next/image";

export const SeasonPhoto = (props: any) => {
  return (
    <Image
      className={`rounded-lg ${props.className}`}
      width="1000"
      height="1000"
      src={props.img}
      alt="Season Photo"
    />
  );
};
