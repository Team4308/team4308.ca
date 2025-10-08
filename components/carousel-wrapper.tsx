"use client"

import Carousel, { CarouselProps } from "react-multi-carousel"

export default function CarouselWrapper(props: CarouselProps) {
  return (
    <Carousel
      {...props}
      ssr={true}
    />
  );
}
