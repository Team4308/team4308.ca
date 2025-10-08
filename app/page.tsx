import Image from "next/image";
import SponsorImage from "@/components/sponsor-image";
import CustomCarousel from "@/components/custom-carousel";
import EventCountdown from "@/components/event-countdown";

export default function Home() {
  return (
    <>
      <div className="w-full relative">
        <Image
          width={6000}
          height={4000}
          src={"/big-image.jpg"}
          alt=""
          className="w-screen h-[calc(100vh-16*var(--spacing))] object-cover brightness-67"
        />

        <div className="absolute top-0 w-full h-full flex flex-row">
          <div className="my-auto w-full">
            <h1
              className="text-7xl font-medium text-background text-center"
            >Team 4308 - Absolute Robotics</h1>
            <h2
              className="text-3xl text-background text-center"
            >A First Robotics team from Mississauga, Ontario</h2>
          </div>
        </div>
      </div>

      <CustomCarousel
        childClass="w-120 h-80"
        className="mt-12"
        src="/carousel-images"
        responsive={{
          all: {
            breakpoint: { max: 100000, min: 0 },
            items: 2
          }
        }}
        arrows={false}
        autoPlay
        autoPlaySpeed={2000}
        infinite
      />

      <EventCountdown />

      <h3 className="text-center text-2xl mt-30 mb-3">Generously sponsored by:</h3>

      <div className="mx-[15vw] mb-10 flex flex-row flex-wrap justify-center gap-x-20">
        <SponsorImage src="rotary.png" width={1065} height={338} />
        <SponsorImage src="weston-forest.png" width={837} height={322} />
        <SponsorImage src="jukebox.png" width={1080} height={1080} object="object-cover" />
        <SponsorImage src="ready-set-cut.png" width={1910} height={330} />
        <SponsorImage src="pervices.png" width={748} height={294} />
        <SponsorImage src="sable-metal.png" width={3062} height={1369} />
      </div>
    </>
  );
}
