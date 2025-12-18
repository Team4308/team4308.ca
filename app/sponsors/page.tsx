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

      <div className="pt-4 pb-4">
        <h1 className="text-center text-5xl mt-10 font-medium">Sponsorship tiers</h1>
        <Table />
      </div>
      <h1 className="text-center text-5xl font-medium mb-10">Join our generous sponsors</h1>
      <SponsorsCarousel />
      <div className="h-10" />
    </>
  );
}
