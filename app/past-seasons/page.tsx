import React from "react";

export default function PastSeasons() {
  return (
    <div className="mx-auto max-w-7xl bg-[#050505] text-white">
      <div className="mx-auto my-32 w-11/12">
        <p className="mb-2 mb-3 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-center text-[3.25rem] leading-tight tracking-tight text-transparent md:text-left md:text-[3.5rem]">
          Past Seasons
        </p>
        <p className="sans mb-12 text-center text-base font-normal text-[#f1f7feb5] md:text-left md:text-[1.125rem] md:leading-[1.5]">
          <span
            style={{
              display: "inline-block",
              verticalAlign: "top",
              textDecoration: "inherit",
              textWrap: "balance",
            }}
          >
            Our team&apos;s journey through previous FIRST Robotics Competition
            seasons.
          </span>
        </p>
        {/* Content will be added here in the future */}
      </div>
    </div>
  );
}
