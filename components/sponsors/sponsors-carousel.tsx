"use client"

import Carousel from "react-multi-carousel";
import SponsorImage from "./sponsor-image";

export default function SponsorsCarousel({ className }: { className?: string }) {
  return (
    <Carousel
      responsive={{
        allOthers: {
          breakpoint: { max: 100000, min: 0 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 640, min: 0 },
          items: 2
        }
      }}
      itemClass="flex flex-row"
      arrows={false}
      autoPlay
      autoPlaySpeed={4000}
      customTransition="transform 1500ms ease-in-out"
      transitionDuration={1500}
      infinite
      pauseOnHover={false}
      draggable={false}
      className={className}
    >
      <SponsorImage src="rotary.png" width={615} height={240} href="https://rotaryclubofmississauga.com/" />
      <SponsorImage src="ready-set-cut.png" width={1910} height={330} href="https://www.readysetcut.ca/" />
      <SponsorImage src="weston.webp" width={891} height={210} href="https://www.westonforest.com/" />
      <SponsorImage src="pervices.png" width={748} height={294} href="https://www.pervices.com/" />
      <SponsorImage src="sable-metal.png" width={3062} height={1369} href="https://sablemetal.com/" />
    </Carousel>
  );
}
