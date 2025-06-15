import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-foreground text-background mt-auto flex w-full flex-row px-6 py-6 lg:px-[10%] xl:px-[15%] 2xl:px-[20%]">
      <div className="mx-auto flex flex-col items-center gap-4 md:flex-row md:gap-10">
        <ul className="flex flex-row gap-10">
          <Link href="https://instagram.com/frc4308/" target="_blank">
            <InstagramLogoIcon className="size-10" />
          </Link>
          <Link href="https://www.youtube.com/@TeamAbsoluteRobotics">
            <Image
              src="/yt_icon.png"
              alt=""
              width={734}
              height={518}
              className="size-10 object-contain"
            />
          </Link>
          <Link href="https://github.com/Team4308/" target="_blank">
            <GitHubLogoIcon className="size-10" />
          </Link>
        </ul>
        <div className="bg-background hidden md:flex md:h-14 md:w-px" />
        <Link
          href="mailto:contact@4308.ca"
          className="text-xl font-medium underline"
        >
          contact@4308.ca
        </Link>
      </div>
    </div>
  );
}
