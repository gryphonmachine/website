import Image from "next/image";

export const SeasonPhoto = (props: any) => {
  return (
    <Image
      className="rounded-lg"
      width="1000"
      height="1000"
      src={`/season/${props.img}`}
      alt="Season Photo"
    />
  );
};
