import CustomCarousel from "@/components/carousel/custom-carousel";
import EventCountdown from "@/components/event-countdown";
import HeroBanner from "@/components/hero-banner";
import SponsorsCarousel from "@/components/sponsors/sponsors-carousel";
import { fontSize } from "@/utils/textStyles";

export default function Home() {
  return (
    <>
      <HeroBanner
        src="home.jpg"
        title="Team 4308 - Absolute Robotics"
        desc="A FIRST robotics team from Mississauga, Ontario"
      />

      <h2
        className={`text-center ${fontSize.xl4} mt-12 px-5`}
      >Photos of us and our bots</h2>

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

      <h3 className={`text-center ${fontSize.xl4} mt-14 mb-3`}>Generously sponsored by:</h3>

      <SponsorsCarousel className="mb-6" />
    </>
  );
}
