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
        <a target="_blank" href="https://sablemetal.com" className="flex">
          <Image
            src="/sable.png"
            width={120}
            height={100}
            alt="logo of lorem"
            className="object-contain"
          />
        </a>
        <a target="_blank" href="https://www.pervices.com/" className="flex">
          <Image
            src="/pervices.png"
            width={120}
            height={100}
            alt="logo of lorem"
            className="object-contain"
          />
        </a>
        <a target="_blank" href="https://www.readysetcut.ca/" className="flex">
          <Image
            src="/ready-set-cut.svg"
            width={120}
            height={100}
            alt="logo of lorem"
            className="object-contain"
          />
        </a>
        <a
          target="_blank"
          href="https://www.jukeboxprint.com/"
          className="flex"
        >
          <Image
            src="/jukebox.svg"
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
