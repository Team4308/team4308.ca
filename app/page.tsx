import CustomCarousel from "@/components/carousel/custom-carousel";
import EventCountdown from "@/components/event-countdown";
import HeroBanner from "@/components/hero-banner";
import SponsorsCarousel from "@/components/sponsors/sponsors-carousel";

export default function Home() {
  return (
    <>
      <HeroBanner
        src="big-image.jpg"
        title="Team 4308 - Absolute Robotics"
        desc="A FIRST robotics team from Mississauga, Ontario"
      />

      <h2 className="text-center max-sm:text-2xl sm:text-3xl md:text-4xl font-medium mt-12 px-5">More photos of us and our bots</h2>

      <CustomCarousel
        childClass="mx-[10%] aspect-3/2"
        src="/carousel-images"
        responsive={{
          allOthers: {
            breakpoint: { max: 100000, min: 641 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1
          }
        }}
        className="pt-2"
        arrows={false}
        autoPlay
        autoPlaySpeed={4000}
        customTransition="transform 800ms ease-in-out"
        transitionDuration={800}
        infinite
      />

      <EventCountdown />

      <h3 className="text-center text-3xl max-sm:text-2xl mt-20 mb-3">Generously sponsored by:</h3>

      <SponsorsCarousel className="mb-10" />
    </>
  );
}
