import Image from "next/image";
import Link from "next/link";
import path from "path"

type Props = {
  src: string,
  width: number,
  height: number,
  href: string,
  object?: "object-contain" | "object-cover",
  fill?: string,
};

export default function SponsorImage(props: Props) {
  const imgSrc = path.join("/sponsors", props.src).replace(/\\/g, '/');
  return (
    <Link className="flex-1 aspect-3/2 max-sm:mx-[14%] max-md:mx-[16%] max-lg:mx-[18%] lg:mx-[20%]" href={props.href} target="_blank">
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
