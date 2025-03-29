import FancyDivider from "./fancyDivider";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mx-auto max-w-7xl bg-[#050505] text-white">
      <FancyDivider curve={false} sharp={true} />
      <div className="mx-auto mb-10 flex w-11/12 flex-row flex-wrap justify-around gap-x-8 text-sm *:space-y-4 *:pr-12 md:-mt-8 md:justify-start md:gap-x-12">
        <ul className="*:text-[#f1f7feb5]">
          <li className="!text-[#fcfdffef]">Pages</li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/join">Students</Link>
          </li>
          <li>
            <Link href="/sponsor">Sponsors</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
        <ul className="*:text-[#f1f7feb5]">
          <li className="!text-[#fcfdffef]">Contact</li>
          <li>
            <a href="https://www.instagram.com/frc4308/" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="mailto:contact@team4308.ca" target="_blank">
              contact@team4308.ca
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
