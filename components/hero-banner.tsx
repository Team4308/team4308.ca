import Image from "next/image";
import path from "path";
import { Kdam_Thmor_Pro } from "next/font/google";

const kdamFont = Kdam_Thmor_Pro({
  weight: "400",
  subsets: ["latin"]
});

export default function HeroBanner({ src, title, desc }: { src: string, title: string, desc?: string }) {
  return (
    <div className="w-full relative">
      <Image
        width={6000}
        height={4000}
        src={path.join("/hero-banner", src).replace(/\\/g, '/')}
        alt=""
        className="w-screen h-[75vh] max-sm:h-120 object-cover brightness-67 saturate-30"
      />

      <div className="absolute top-0 w-full h-full flex flex-row">
        <div className="my-auto w-full">
          <h1
            className={`max-sm:text-5xl sm:text-6xl md:text-7xl text-background text-center ${kdamFont.className}`}
          >{title}</h1>
          <h2
            className="text-3xl max-sm:text-2xl text-background text-center"
          >{desc}</h2>
        </div>
      </div>
    </div>
  );
}
