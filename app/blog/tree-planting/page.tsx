import CarouselPlugin from "@/components/c3";
import { CarouselItem } from "@/components/ui/carousel";

export default function TreePlanting() {
  return (
    <div className="mx-auto mt-36 w-full max-w-5xl px-6 md:max-w-7xl">
      <div className="mb-10 mt-2 flex w-full flex-col items-center justify-between gap-2 md:gap-0">
        <h2 className="font-gradient mb-2 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-[3rem] leading-[120%] tracking-tight text-transparent md:text-[3.5rem]">
          4308 Tree Planting Event
        </h2>
        <div className="mt-2.5 flex items-center gap-1.5 md:gap-2 lg:mt-3">
          <div className="flex gap-1">
            <p className="text-sm font-normal text-[#fcfdffef]">
              Absolute Robotics ·{" "}
            </p>
            <p className="text-sm font-normal text-[#f1f7feb5]">
              <time dateTime="2024-09-13">May 27, 2025</time>
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-xl text-[#f1f7feb5]">
        <video controls>
          <source src="/tree-planting-video.mp4" type="video/mp4" />
        </video>
        <p className="mt-12">
          On a cloudy weekday in Mississauga, Absolute Robotics 4308 traded
          gears and circuits for shovels and soil. As part of our ongoing
          community initiative, 15 of our dedicated team members and volunteers
          came together to plant 200 trees in just 3 hours. Partnering with the
          City of Mississauga, this event allowed us to connect our passion for
          STEM with environmental stewardship. Whether it&apos;s building robots
          or helping restore green spaces, our team is committed to making a
          meaningful impact both on and off the competition field. According to
          rough estimates, these 200 trees will offset approximately 7 metric
          tons of carbon dioxide over the next 10 years. That’s equivalent to
          around 27,500 km of car travel! We’re proud to support a greener
          future and thank everyone who joined us. Stay tuned for more updates
          as we continue combining technology, teamwork, and community spirit!
        </p>
      </div>
      <div className="mx-auto mt-8 max-w-96">
        <CarouselPlugin />
      </div>
    </div>
  );
}
