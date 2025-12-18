import Image from "next/image";
import Link from "next/link";
import path from "path"

type Props = {
  src: string,
  width: number,
  height: number,
  href: string,
  object?: "object-contain" | "object-cover"
};

export default function SponsorImage(props: Props) {
  const imgSrc = path.join("/sponsors", props.src).replace(/\\/g, '/');
  return (
    <Link href={props.href} target="_blank">
      <Image
        alt=""
        width={props.width}
        height={props.height}
        src={imgSrc || '/'}
        className={`w-80 h-40 ${props.object ? props.object : "object-contain"} inline-block`}
      />
    </Link>
  );
}
