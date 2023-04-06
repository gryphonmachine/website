import Image from "next/image";

export const Photo = (props: any) => {
  return (
    <Image
      className={`rounded-lg ${props.className} border-2 border-primary`}
      width={1000}
      height={1000}
      src={props.img}
      alt="Season Photo"
      priority={true}
    />
  );
};
