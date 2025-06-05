"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="mx-auto p-4 text-black"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi}
      >
        <CarouselContent>
          <Item src="/tree-planting (1).jpg" />
          <Item src="/tree-planting (2).jpg" />
          <Item src="/tree-planting (3).jpg" />
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
      <div className="invisible mt-4 text-center text-sm text-[#f1f7feb5] sm:visible">
        Image {current} of {count}
      </div>
    </>
  );
}

function Item({ src }: { src: string }) {
  return (
    <CarouselItem>
      <Image
        src={src}
        alt=""
        className="h-full rounded-lg object-cover"
        width={3024}
        height={4032}
      />
    </CarouselItem>
  );
}
