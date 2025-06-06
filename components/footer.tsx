import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-screen bg-foreground text-background px-6 lg:px-[10%] xl:px-[15%] 2xl:px-[20%] py-4 mt-auto flex-row flex py-6">
      <div className="flex flex-col md:flex-row mx-auto gap-4 md:gap-10 items-center">
        <ul className="flex flex-row gap-10">
          <Link href="https://instagram.com/frc4308/" target="_blank">
            <InstagramLogoIcon className="size-10"/>
          </Link>
          <Link href="https://www.youtube.com/@TeamAbsoluteRobotics">
            <Image src="/yt_icon.png" alt="" width={734} height={518} className="size-10 object-contain"/>
          </Link>
          <Link href="https://github.com/Team4308/" target="_blank">
            <GitHubLogoIcon className="size-10"/>
          </Link>
        </ul>
        <div className="hidden md:flex md:w-px md:h-14 bg-background"/>
        <Link href="mailto:contact@4308.ca" className="text-xl font-medium underline">contact@4308.ca</Link>
      </div>
    </div>
  );
}
