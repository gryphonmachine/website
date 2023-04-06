import Zoom from "react-medium-image-zoom"; 
import { Photo } from "./Photo";
import { Subtitle } from "./Subtitle";

export const MediaImage = (props: any) => {
    const styles = "text-center md:text-sm text-md mt-3";
  
    return (
      <Zoom>
        <Photo className="md:h-[200px] md:w-[500px]" img={props.img}/>
        <Subtitle className={styles}>
          <span className="text-white font-bold">{props.title}</span>
          <br /> {props.subtitle ?? ""}
        </Subtitle>
      </Zoom>
    );
  };