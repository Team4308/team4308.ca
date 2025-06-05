import Carousel from "@/components/c2";

export default function ClubFair() {
  return (
    <div className="mx-auto mt-36 w-full max-w-5xl px-6 md:max-w-7xl">
      <div className="mb-10 mt-2 flex w-full flex-col items-center justify-between gap-2 md:gap-0">
        <h2 className="font-gradient mb-2 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-[3rem] leading-[120%] tracking-tight text-transparent md:text-[3.5rem]">
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
      <div>
        <p className="mx-auto max-w-xl text-[#f1f7feb5]">
          Thank you to everyone who visited Absolute Robotics at the 2024-2025
          club fair!
          <br />
          <br />
          We were so excited to see all the new and returning faces at our
          booth.
          <br />
          We hope to see you at our information meeting this{" "}
          <b>Wednesday, September 11</b> and at our first official meeting on{" "}
          <b>Thursday, September 19.</b>
          <br />
          It has been an awesome start of the season and we had such a fun time
          meeting you all!
          <br />
          <br />
          P.S. Goosifer and his new friend had lots of fun as well!
        </p>
      </div>
      <div className="mx-auto mt-8 max-w-96">
        <Carousel />
      </div>
    </div>
  );
}
