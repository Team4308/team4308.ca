import Image from "next/image";

export default function Spoonsors() {
  return (
    <div className="mx-auto w-11/12">
      <p className="mb-6 text-center text-neutral-400 md:-mt-6 md:mb-12">
        Generously sponsored by
      </p>
      <div className="flex flex-row flex-wrap place-content-around gap-x-5 gap-y-4">
        <a
          target="_blank"
          href="https://www.westonforest.com/"
          className="flex"
        >
          <Image
            src="/westonForest.png"
            width={120}
            height={100}
            alt="logo of lorem"
            className="object-contain"
          />
        </a>
        <a
          target="_blank"
          href="https://www.zebra.com/us/en.html"
          className="flex"
        >
          <Image
            src="/zebra.png"
            width={120}
            height={100}
            alt="logo of lorem"
            className="object-contain"
          />
        </a>
        <a
          target="_blank"
          href="https://www.asc-csa.gc.ca/eng/"
          className="flex"
        >
          <Image
            src="/csa.png"
            width={80}
            height={80}
            alt="logo of lorem"
            className="object-contain"
          />
        </a>
        <a target="_blank" href="https://www.utm.utoronto.ca/" className="flex">
          <Image
            src="/utm.png"
            width={120}
            height={100}
            alt="logo of lorem"
            className="object-contain"
          />
        </a>
        <a target="_blank" href="https://sablemetal.com" className="flex">
          <Image
            src="/sable.png"
            width={120}
            height={100}
            alt="logo of lorem"
            className="object-contain"
          />
        </a>
      </div>
    </div>
  );
}
