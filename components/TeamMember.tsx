import Image from "next/image";

export const TeamMember = (props: any) => {
    return (
      <Image
        className="rounded-full"
        src={props.src}
        alt={props.name}
        width={60}
        height={60}
        priority={true}
      />
    );
  };