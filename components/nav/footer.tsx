import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-nav text-background mt-auto w-full py-6">
      <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-10">
        <ul className="flex flex-row items-center gap-10">
          <Link href="https://instagram.com/frc4308/" target="_blank">
            <InstagramLogoIcon className="size-10" />
          </Link>
          <Link
            href="https://www.youtube.com/@TeamAbsoluteRobotics"
            target="_blank"
            prefetch={false}
          >
            <Image
              src="/yt_icon.png"
              alt=""
              width={512}
              height={512}
              className="size-10 object-contain"
            />
          </Link>
          <Link
            href="https://github.com/Team4308/"
            target="_blank"
            prefetch={false}
          >
            <GitHubLogoIcon className="size-10" />
          </Link>
        </ul>
        <div
          className="bg-background max-sm:w-35 max-sm:h-px sm:w-px sm:h-14" />
        <Link
          href="mailto:contact@4308.ca"
          className="text-xl font-medium underline text-center"
          prefetch={false}
        >
          contact@4308.ca
        </Link>
      </div>
    </div>
  );
}
