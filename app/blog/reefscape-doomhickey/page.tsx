import Image from "next/image";

export default function Sponsor() {
  return (
    <div className="mx-auto mt-36 w-full max-w-5xl px-6 md:max-w-7xl">
      <div className="mb-10 mt-2 flex w-full flex-col items-center justify-between gap-2 md:gap-0">
        <h2 className="font-gradient mb-2 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-[3rem] leading-[120%] tracking-tight text-transparent md:text-[3.5rem]">
          Reefscape: Doomhickey
        </h2>
        <div className="mt-2.5 flex items-center gap-1.5 md:gap-2 lg:mt-3">
          <div className="flex gap-1">
            <p className="text-sm font-normal text-[#fcfdffef]">
              Absolute Robotics ·{" "}
            </p>
            <p className="text-sm font-normal text-[#f1f7feb5]">
              <time dateTime="2025-03-08">Mar 8, 2025</time>
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="mx-auto max-w-xl text-[#f1f7feb5]">
          We&apos;re proud to present our 2025 robot for the Reefscape season -
          Doomhickey!
          <br />
          <br />
          Doomhickey is a fast, offensive robot that focuses on L2, L3, and
          algae removal objectives.
          <br />
          <br />
          The robot consists of an agile swerve drivetrain, a speedy cascade
          elevator, a fixed end effector with a full 360 degree rotation arm,
          and a robust funnel.
          <br />
          <br />
          It stays ahead of the competition with advanced on-the-fly path
          planning auto alignment through vision processing and simultaneous
          coral scoring and algae removal.
          <br />
          <br />
          We&apos;re excited to see how Doomhickey performs in the 2025 season,
          and we hope to see you at our competitions.
        </p>
        <Image
          src="/reefscape-render.png"
          alt="Doomhickey robot render"
          width={800}
          height={600}
          className="mx-auto mt-12 rounded-lg"
        />
      </div>
    </div>
  );
}
