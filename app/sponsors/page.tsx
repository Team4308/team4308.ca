import Table from "@/components/sponsors/sponsor-table"
import HeroBanner from "@/components/hero-banner";
import SponsorsCarousel from "@/components/sponsors/sponsors-carousel";
import { fontSize } from "@/utils/textStyles";

export default function Sponsors() {
  return (
    <>
      <HeroBanner
        src="big-image.jpg"
        title="Sponsors"
      />

      <h1 className={`text-center ${fontSize.x3l3} mt-15 font-medium`}>Sponsorship tiers</h1>
      <Table />

      <h1 className={`text-center ${fontSize.x3l3} font-medium mt-10 mb-2`}>Join our generous sponsors</h1>
      <SponsorsCarousel />
      <div className="h-10" />
    </>
  );
}
