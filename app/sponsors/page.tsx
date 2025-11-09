import Image from "next/image";
import SponsorImage from "@/components/sponsor-image";
import Table from "@/components/sponsor-table"


export default function Sponsors() {
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
            >Sponsors</h1>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-4">
        <h1 className="text-center text-5xl mt-10 font-medium">Sponsorship Tiers</h1>
        <Table />
      </div>
      <h1 className="text-center text-5xl font-medium">Join Our Generous Sponsors</h1>
      <div className="mx-[15vw] mb-10 flex flex-row flex-wrap justify-center gap-x-20">
        <SponsorImage src="rotary.png" width={1065} height={338} href="https://rotaryclubofmississauga.com/" />
        <SponsorImage src="weston-forest.png" width={837} height={322} href="https://www.westonforest.com/" />
        <SponsorImage src="jukebox.png" width={1080} height={1080} object="object-cover" href="https://www.jukeboxprint.com/" />
        <SponsorImage src="ready-set-cut.png" width={1910} height={330} href="https://www.readysetcut.ca/" />
        <SponsorImage src="pervices.png" width={748} height={294} href="https://www.pervices.com/" />
        <SponsorImage src="sable-metal.png" width={3062} height={1369} href="https://sablemetal.com/" />
      </div>
    </>
  );
}
