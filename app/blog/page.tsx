export default function Sponsor() {
  return (
    <div className="mx-auto mt-36 w-full max-w-5xl px-6 md:max-w-7xl">
      <div className="mb-16 mt-2 flex w-full flex-col items-center justify-between gap-2 md:flex-row md:gap-0">
        <h2 className="font-gradient mb-2 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-[3rem] leading-[120%] tracking-tight text-transparent md:text-[3.5rem]">
          Blog
        </h2>
      </div>
      <ul className="grid gap-8 md:grid-cols-2">
        <li className="">
          <a href="/blog/reefscape-doomhickey">
            <div className="space-y-2">
              <img
                alt="goosifer(s)"
                fetchPriority="high"
                decoding="async"
                data-nimg="1"
                className="col-span-2 max-h-96 w-full rounded-lg border border-[#d6ebfd30] object-cover object-[50%_25%] md:rounded-xl"
                style={{ color: "transparent" }}
                src="/reefscape-render.png"
              />
              <div className="mt-2 lg:mt-1">
                <h2 className="font-book font-styling font-display mt-4 line-clamp-5 text-balance text-[2.25rem] text-[28px] leading-[130%] leading-tight tracking-tight text-[#fcfdffef]">
                  Reefscape: Doomhickey
                </h2>
                <div className="mt-2.5 flex items-center gap-1.5 md:gap-2 lg:mt-3">
                  <div className="flex gap-1">
                    <p className="text-sm font-normal text-[#fcfdffef]">
                      Absolute Robotics ·{" "}
                    </p>
                    <p className="text-sm font-normal text-[#f1f7feb5]">
                      <time dateTime="2024-09-13">Mar 8, 2025</time>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a href="/blog/4308-at-club-fair">
            <div className="space-y-2">
              <img
                alt="goosifer(s)"
                fetchPriority="high"
                decoding="async"
                data-nimg="1"
                className="col-span-2 max-h-96 w-full rounded-lg border border-[#d6ebfd30] object-cover object-[50%_25%] md:rounded-xl"
                style={{ color: "transparent" }}
                src="/geese.jpg"
              />
              <div className="mt-2 lg:mt-1">
                <h2 className="font-book font-styling font-display mt-4 line-clamp-5 text-balance text-[2.25rem] text-[28px] leading-[130%] leading-tight tracking-tight text-[#fcfdffef]">
                  4308 at Club Fair
                </h2>
                <div className="mt-2.5 flex items-center gap-1.5 md:gap-2 lg:mt-3">
                  <div className="flex gap-1">
                    <p className="text-sm font-normal text-[#fcfdffef]">
                      Absolute Robotics ·{" "}
                    </p>
                    <p className="text-sm font-normal text-[#f1f7feb5]">
                      <time dateTime="2024-09-13">Sep 13, 2024</time>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="">
          <a href="/blog/crescendo-whiplash">
            <div className="space-y-2">
              <img
                alt="Crescendo robot"
                fetchPriority="high"
                decoding="async"
                data-nimg="1"
                className="col-span-2 max-h-96 w-full rounded-lg border border-[#d6ebfd30] object-cover object-[50%_25%] md:rounded-xl"
                style={{ color: "transparent" }}
                src="/robot.png"
              />
              <div className="mt-2 lg:mt-1">
                <h2 className="font-book font-styling font-display mt-4 line-clamp-5 text-balance text-[2.25rem] text-[28px] leading-[130%] leading-tight tracking-tight text-[#fcfdffef]">
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
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
