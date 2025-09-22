"use client"

import { ReactNode } from "react"
import Carousel from "react-multi-carousel"

type Props = {
  children?: ReactNode
  className?: string
}

export default function CarouselWrapper(props: Props) {
  const { children, className } = props;
  return (
    <Carousel
      ssr={true}
      responsive={{
        all: {
          breakpoint: { max: 10000, min: 0 },
          items: 2
        }
      }}
      infinite={true}
      autoPlay={true}
      draggable={false}
      swipeable={false}
      arrows={false}
      autoPlaySpeed={2000}
      pauseOnHover={false}
      className={className}
    >
      {children}
    </Carousel>
  );
}
