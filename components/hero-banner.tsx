import Image from "next/image";
import path from "path";
import { Kdam_Thmor_Pro } from "next/font/google";
import { fontSize } from "@/utils/textStyles";

const kdamFont = Kdam_Thmor_Pro({
  weight: "400",
  subsets: ["latin"]
});

export default function HeroBanner({ src, title, desc, imgClass }: { src: string, title: string, desc?: string, imgClass?: string }) {
  return (
    <div className="w-full relative">
      <Image
        width={6000}
        height={4000}
        src={path.join("/hero-banner", src).replace(/\\/g, '/')}
        alt=""
        className={`w-screen h-[75vh] max-sm:h-120 object-cover brightness-67 saturate-30 ${imgClass}`}
      />

      <div className="absolute top-0 w-full h-full flex flex-row">
        <div className="my-auto w-full text-background text-center">
          <h1
            className={`${fontSize.x4l4} ${kdamFont.className} px-5`}
          >{title}</h1>
          <h2
            className={`${fontSize.xl3} px-10`}
          >{desc}</h2>
        </div>
      </div>
    </div>
  );
}
