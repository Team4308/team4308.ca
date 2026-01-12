import Table from "@/components/sponsors/sponsor-table"
import HeroBanner from "@/components/hero-banner";
import SponsorsCarousel from "@/components/sponsors/sponsors-carousel";

export default function Sponsors() {
  return (
    <>
      <HeroBanner
        src="big-image.jpg"
        title="Sponsors"
      />

      <h1 className="text-center max-sm:text-3xl sm:text-4xl md:text-5xl mt-15 font-medium">Sponsorship tiers</h1>
      <Table />

      <h1 className="text-center max-sm:text-3xl sm:text-4xl md:text-5xl font-medium mt-10 mb-2">Join our generous sponsors</h1>
      <SponsorsCarousel />
      <div className="h-10" />
    </>
  );
}
