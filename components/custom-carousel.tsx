import fs from "fs"
import path from "path";
import Image from "next/image";
import CarouselWrapper from "./carousel-wrapper";
import { CarouselProps } from "react-multi-carousel";

interface Props extends CarouselProps {
  src: string
  childClass?: string
}

function getSlides(src: string, className?: string) {
  if (!src) return []

  const res = fs.readdirSync(path.join(process.cwd(), "public", src)).map((file) => {
    return (
      <div className={`mx-auto relative ${className}`} key={file}>
        <Image
          src={path.join(src, file)}
          fill
          quality={100}
          alt=""
          className={`object-cover rounded-lg`}
        />
      </div>
    );
  })
  return res
}

export default function CustomCarousel(props: Props) {
  const slides = getSlides(props.src, props.childClass);

  return (
    <CarouselWrapper
      draggable={false}
      swipeable={false}
      pauseOnHover={false}
      {...props}
      className={`max-w-7xl mx-auto ${props.className}`}
    >
      {...slides}
    </CarouselWrapper>
  );
}
