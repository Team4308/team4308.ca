export default function Sponsor() {
  return (
    <div className="mx-auto mt-36 w-full max-w-5xl px-6 md:max-w-7xl">
      <div className="mb-10 mt-2 flex w-full flex-col items-center justify-between gap-2 md:gap-0">
        <h2 className="font-gradient mb-2 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-[3rem] leading-[120%] tracking-tight text-transparent md:text-[3.5rem]">
          Crescendo: Whiplash
        </h2>
        <div className="mt-2.5 flex items-center gap-1.5 md:gap-2 lg:mt-3">
          <div className="flex gap-1">
            <p className="text-sm font-normal text-[#fcfdffef]">
              Absolute Robotics ·{" "}
            </p>
            <p className="text-sm font-normal text-[#f1f7feb5]">
              <time dateTime="2024-03-08">Mar 8, 2024</time>
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="mx-auto max-w-xl text-[#f1f7feb5]">
          We're excited to unveil our 2024 FRC robot for the Crescendo
          competition - Whiplash!
          <br />
          <br />
          Whiplash features a high-scoring shooter mechanism capable of
          consistently hitting the speaker from various positions on the field.
          Our focus this year was on combining speed with precision.
          <br />
          <br />
          The robot's innovative design includes a quick intake system and a
          stable shooting platform that maintains accuracy even while in motion.
          <br />
          <br />
          Stay tuned for more detailed breakdowns of our design process and
          competition performance!
        </p>
      </div>
    </div>
  );
}
