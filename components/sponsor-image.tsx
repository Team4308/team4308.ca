import Image from "next/image";
import path from "path"

type Props = { src: string, width: number, height: number, object?: "object-contain" | "object-cover" };

export default function SponsorImage(props: Props) {
  return (
    <Image
      alt=""
      width={props.width}
      height={props.height}
      src={path.join("/sponsors", props.src)}
      className={`w-60 h-40 ${props.object ? props.object : "object-contain"} inline-block`}
    />
  );
}
