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
    <Link className="flex-1 aspect-3/2 mx-[20%]" href={props.href} target="_blank">
      <Image
        alt=""
        width={props.width}
        height={props.height}
        src={imgSrc || '/'}
        className={`size-full ${props.object ? props.object : "object-contain"}`}
      />
    </Link>
  );
}
