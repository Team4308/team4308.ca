import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Sponsor() {
  return (
    <>
      <div className="mx-auto mb-12 mt-36 w-11/12 space-y-2 text-center">
        <p className="text-5xl font-semibold leading-tight tracking-tight">
          <span className="bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
            Join Us
          </span>
        </p>
        <p className="mx-auto max-w-4xl text-balance px-1 text-neutral-400 md:text-[1.125rem] md:leading-[1.5]">
          Register with Absolute Robotics for the Reefscape 24/25 FRC season.
        </p>
      </div>
      <div className="mx-auto w-11/12 max-w-5xl">
        <ol className="relative border-s border-neutral-400/40">
          {/* Past event: bg-neutral-600 */}
          {/* Current event: bg-green-500 */}
          {/* Future event: bg-neutral-400 */}
          <li className="mb-10 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-neutral-600"></div>
            <time className="mb-1 text-sm font-normal leading-none text-neutral-400">
              November 10
            </time>
            <h3 className="text-lg font-semibold text-white">
              Subteam Decisions Released
            </h3>
            <p className="mb-4 text-base font-normal text-neutral-400">
              Congratulations! After receiving your subteam offers, you will be
              able to finalize your subteam choice for the season.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-green-500"></div>
            <time className="mb-1 text-sm font-normal leading-none text-neutral-400">
              January 4
            </time>
            <h3 className="text-lg font-semibold text-white">Season Kickoff</h3>
            <p className="mb-4 text-base font-normal text-neutral-400">
              The team will be heading over to UTM to watch the FRC Reefscape
              kickoff livestream and learn how this year&apos;s game will be
              played. We will also begin discussions on how we will approach the
              game and what our strategy will be.
            </p>
          </li>
          <li className="ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-neutral-400"></div>
            <time className="mb-1 text-sm font-normal leading-none text-neutral-400">
              January 5 - March XX
            </time>
            <h3 className="text-lg font-semibold text-white">Build Season</h3>
            <p className="mb-4 text-base font-normal text-neutral-400">
              Immediately after the kickoff meeting, the team will begin the
              build season. During this time, we will design, prototype, and
              build our robot for the upcoming competitions. Each subteam will
              stick to their own schedule and work on their own tasks to ensure
              the robot is competition ready!
            </p>
          </li>
        </ol>
      </div>
      <div className="mx-auto mt-36 w-11/12 lg:max-w-5xl">
        <div>
          <p className="mx-auto max-w-[860px] text-center text-[3rem] leading-[120%] tracking-tight text-[#fcfdffef] md:text-[3.5rem]">
            Subteams Summarized
          </p>
          <p className="sans mx-auto max-w-[760px] text-center text-base font-normal text-[#f1f7feb5] md:text-[1.125rem] md:leading-[1.5]">
            Team members are organized into specialized subteams. Despite the
            separation, cross-subteam collaboration is emphasized to ensure
            robot quality.
          </p>
        </div>
        <div className="mt-16 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:max-w-7xl md:flex-row lg:grid-cols-3">
          <div className="group px-3 py-4 md:rounded-xl md:border md:border-[#d6ebfd30] md:px-5 md:py-6">
            <p className="mb-4 text-xl leading-8 leading-[130%] text-[#fcfdffef] md:leading-none">
              Build
            </p>
            <ul className="list-inside list-disc space-y-2 marker:text-white">
              <li className="pl-2 text-sm leading-[1.6] text-[#f1f7feb5] group-hover:whitespace-normal md:truncate">
                Designs the robot
              </li>
              <li className="pl-2 text-sm leading-[1.6] text-[#f1f7feb5] group-hover:whitespace-normal md:truncate">
                Prototype mechanisms to finalize design
              </li>
              <li className="pl-2 text-sm leading-[1.6] text-[#f1f7feb5] group-hover:whitespace-normal md:truncate">
                Design the robot using CAD software
              </li>
              <li className="pl-2 text-sm leading-[1.6] text-[#f1f7feb5] group-hover:whitespace-normal md:truncate">
                Manufacture and assemble the robot
              </li>
              <li className="pl-2 text-sm leading-[1.6] text-[#f1f7feb5] group-hover:whitespace-normal md:truncate">
                Construct game pieces for each season
              </li>
            </ul>
          </div>
          <div className="group px-3 py-4 md:rounded-xl md:border md:border-[#d6ebfd30] md:px-5 md:py-6">
            <p className="mb-4 text-xl leading-8 leading-[130%] text-[#fcfdffef] md:leading-none">
              Controls
            </p>
            <ul className="list-inside list-disc space-y-2 marker:text-white">
              <li className="pl-2 text-sm leading-[1.6] text-[#f1f7feb5] group-hover:whitespace-normal md:truncate">
                Code robot control mechanisms
              </li>
              <li className="pl-2 text-sm leading-[1.6] text-[#f1f7feb5] group-hover:whitespace-normal md:truncate">
                Wire the robot&apos;s electrical systems
              </li>
              <li className="pl-2 text-sm leading-[1.6] text-[#f1f7feb5] group-hover:whitespace-normal md:truncate">
                Test and troubleshoot hardware and software issues
              </li>
              <li className="pl-2 text-sm leading-[1.6] text-[#f1f7feb5] group-hover:whitespace-normal md:truncate">
                Design electronics layout with build team
              </li>
              <li className="pl-2 text-sm leading-[1.6] text-[#f1f7feb5] group-hover:whitespace-normal md:truncate">
                Configure robot sensors and vision systems
              </li>
            </ul>
          </div>
          <div className="group px-3 py-4 md:rounded-xl md:border md:border-[#d6ebfd30] md:px-5 md:py-6">
            <p className="mb-4 text-xl leading-8 leading-[130%] text-[#fcfdffef] md:leading-none">
              Competition
            </p>
            <ul className="list-inside list-disc space-y-2 marker:text-white">
              <li className="pl-2 text-sm leading-[1.6] text-[#f1f7feb5] group-hover:whitespace-normal md:truncate">
                Ensures robot meets regulations
              </li>
              <li className="pl-2 text-sm leading-[1.6] text-[#f1f7feb5] group-hover:whitespace-normal md:truncate">
                Plans robot design criteria
              </li>
              <li className="pl-2 text-sm leading-[1.6] text-[#f1f7feb5] group-hover:whitespace-normal md:truncate">
                Plans match strategy
              </li>
              <li className="pl-2 text-sm leading-[1.6] text-[#f1f7feb5] group-hover:whitespace-normal md:truncate">
                Develops scouting app
              </li>
              <li className="pl-2 text-sm leading-[1.6] text-[#f1f7feb5] group-hover:whitespace-normal md:truncate">
                Develops scouting website
              </li>
            </ul>
          </div>
          <div className="group px-3 py-4 md:rounded-xl md:border md:border-[#d6ebfd30] md:px-5 md:py-6">
            <p className="mb-4 text-xl leading-8 leading-[130%] text-[#fcfdffef] md:leading-none">
              Marketing
            </p>
            <ul className="list-inside list-disc space-y-2 marker:text-white">
              <li className="pl-2 text-sm leading-[1.6] text-[#f1f7feb5] group-hover:whitespace-normal md:truncate">
                Networks for sponsorships
              </li>
              <li className="pl-2 text-sm leading-[1.6] text-[#f1f7feb5] group-hover:whitespace-normal md:truncate">
                Cold calls for sponsorships
              </li>
              <li className="pl-2 text-sm leading-[1.6] text-[#f1f7feb5] group-hover:whitespace-normal md:truncate">
                Cold emails for sponsorships
              </li>
              <li className="pl-2 text-sm leading-[1.6] text-[#f1f7feb5] group-hover:whitespace-normal md:truncate">
                Door to door for sponsorships
              </li>
            </ul>
          </div>
          <div className="group px-3 py-4 md:rounded-xl md:border md:border-[#d6ebfd30] md:px-5 md:py-6">
            <p className="mb-4 text-xl leading-8 leading-[130%] text-[#fcfdffef] md:leading-none">
              Media
            </p>
            <ul className="list-inside list-disc space-y-2 marker:text-white">
              <li className="pl-2 text-sm leading-[1.6] text-[#f1f7feb5] group-hover:whitespace-normal md:truncate">
                Takes photos & videos of team events
              </li>
              <li className="pl-2 text-sm leading-[1.6] text-[#f1f7feb5] group-hover:whitespace-normal md:truncate">
                Creates social media posts
              </li>
              <li className="pl-2 text-sm leading-[1.6] text-[#f1f7feb5] group-hover:whitespace-normal md:truncate">
                Creates advertising videos
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-36 w-11/12 lg:max-w-5xl">
        <p className="mx-auto mb-8 text-[2.25rem] leading-[130%] tracking-tight">
          Frequently Asked Questions
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-[#d6ebfd30]">
            <AccordionTrigger>
              Help! I&apos;m having problems with something!
            </AccordionTrigger>
            <AccordionContent className="text-[#f1f7feb5]">
              Most issues can be resolved with a quick message to our teacher
              sponsor, captains, or leads. You can contact us through{" "}
              <a
                href="mailto:contact@team4308.ca"
                target="_blank"
                className="text-white underline"
              >
                contact@team4308.ca
              </a>
              ,{" "}
              <a
                href="https://www.instagram.com/frc4308/"
                target="_blank"
                className="text-white underline"
              >
                social media
              </a>
              , or in person.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-[#d6ebfd30]">
            <AccordionTrigger>
              What if I can&apos;t afford the registration fee?
            </AccordionTrigger>
            <AccordionContent className="text-[#f1f7feb5]">
              Our goal is to make robotics accessible to everyone. If you are
              struggling with the registration fee, please reach out to a
              captain or our teacher sponsor to apply for financial aid. We
              review each application on a case-by-case basis and will do our
              best to accomodate your needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
