import fs from "fs"
import path from "path";
import Image from "next/image";
import CarouselWrapper from "./carousel-wrapper";

type Props = {
  src: string
  width: number
  height: number
  className?: string
}

function getSlides(src: string, width: number, height: number) {
  if (!src) return []

  const res = fs.readdirSync(path.join(process.cwd(), "public", src)).map((file) => {
    return (
      <Image
        src={path.join(src, file)}
        width={width}
        height={height}
        alt=""
        className="w-120 h-80 mx-auto object-cover rounded-lg"
      />
    );
  })
  return res
}

export default function CustomCarousel(props: Props) {
  const { src, width, height, className } = props
  const slides = getSlides(src, width, height);

  return (
    <CarouselWrapper className={`max-w-7xl mx-auto ${className}`}>
      {...slides}
    </CarouselWrapper>
  );
}
