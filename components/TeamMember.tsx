import Image from "next/image";

export const TeamMember = (props: any) => {
  return (
    <Image
      className="rounded-full w-[50px] h-[50px] hover:opacity-75"
      src={props.src}
      alt={props.name}
      width={60}
      height={60}
      priority={true}
    />
  );
};
