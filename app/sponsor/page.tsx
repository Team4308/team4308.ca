import Sponsors from "@/components/sponsorCarousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Pi } from "lucide-react";
import { join } from "path";
import { rootCertificates } from "tls";

export default function Sponsor() {
  function Checkmark() {
    return (
      <svg
        className="min-w-[24px] justify-self-center text-[#43fea4ab]"
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
          fill="currentColor"
        ></path>
      </svg>
    );
  }

  function ContactButton() {
    return (
      <div className={""}>
        <a
          href="mailto:contact@team4308.ca"
          target="_blank"
          className="mx-auto mb-6 mt-8 inline-block w-10/12 rounded-full bg-white py-2 pl-1 pr-3 text-center text-sm font-semibold text-black hover:bg-[#dddddd]"
        >
          contact@team4308.ca
        </a>
      </div>
    );
  }
  const rotateAmount = "23deg";

  const GridEl =
    "px-3 py-2 min-h-10 border border-color-white first:border-l-0 last:border-r-0";
  const Colorchange = "";
  const gradFunc = "bg-origin-content text-transparent bg-clip-text";

  return (
    <>
      <div className="mx-auto mb-12 mt-36 w-11/12 space-y-2 text-center">
        <p className="text-5xl font-semibold leading-tight tracking-tight">
          <span className="bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
            Sponsor Us
          </span>
        </p>
        <p className="mx-auto max-w-4xl text-balance px-1 text-neutral-400 md:text-[1.125rem] md:leading-[1.5]">
          Support our mission of giving high quality training and hands-on
          engineering work to all.
        </p>
      </div>

      <div className="mx-auto flex h-auto w-11/12 max-w-5xl grid-cols-1 flex-wrap items-stretch justify-center gap-x-8 gap-y-8">
        {/*code i need to change*/}
        <div className={"object-center"}>
          <div className="overflow-hidden rounded-md border">
            <table
              className={
                "border-color-white border-collapse place-self-center p-1"
              }
            >
              <thead>
                <tr>
                  <th className={`${GridEl} border-t-0`}>Reward</th>
                  <th
                    className={`${GridEl} border-t-0 bg-gradient-to-r from-orange-400 to-[#694A09] ${gradFunc}`}
                  >
                    Bronze
                  </th>
                  <th
                    className={`${GridEl} border-t-0 bg-gradient-to-r from-[#dddddd] to-[#aaaaaa] ${gradFunc}`}
                  >
                    Silver
                  </th>
                  <th
                    className={`${GridEl} border-t-0 bg-gradient-to-r from-amber-300 to-[#BF9400] ${gradFunc}`}
                  >
                    Gold
                  </th>
                  <th
                    className={`${GridEl} animate-hue border-t-0 bg-gradient-to-r from-[#ff7777] via-[#ffff11] to-[#77ff77] ${gradFunc} hue-rotate-[var(--color-shift)]`}
                  >
                    {Colorchange}Title Sponsor
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={`${GridEl}`}>Name & logo on team shirts</td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                </tr>
                <tr>
                  <td className={`${GridEl}`}>
                    Name & logo on team social media
                  </td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                </tr>
                <tr>
                  <td className={`${GridEl}`}>Name & logo on team website</td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                </tr>
                <tr>
                  <td className={`${GridEl}`}>Name & logo on team banner</td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                </tr>
                <tr>
                  <td className={`${GridEl}`}>Name & logo on robot</td>
                  <td className={`${GridEl}`}></td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                </tr>
                <tr>
                  <td className={`${GridEl}`}>
                    Shoutout at competition ceremonies
                  </td>
                  <td className={`${GridEl}`}></td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                </tr>
                <tr>
                  <td className={`${GridEl}`}>
                    Custom monthly updates on team and community efforts
                  </td>
                  <td className={`${GridEl}`}></td>
                  <td className={`${GridEl}`}></td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                </tr>
                <tr>
                  <td className={`${GridEl}`}>
                    Robot demonstration to company
                  </td>
                  <td className={`${GridEl}`}></td>
                  <td className={`${GridEl}`}></td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                </tr>
                <tr>
                  <td className={`${GridEl}`}>Large name & logo on robot</td>
                  <td className={`${GridEl}`}></td>
                  <td className={`${GridEl}`}></td>
                  <td className={`${GridEl}`}></td>
                  <td className={`${GridEl}`}>
                    <Checkmark></Checkmark>
                  </td>
                </tr>
                <tr>
                  <td className={`${GridEl} border-b-0`}>
                    Anodized robot to company colours
                  </td>
                  <td className={`${GridEl} border-b-0`}></td>
                  <td className={`${GridEl} border-b-0`}></td>
                  <td className={`${GridEl} border-b-0`}></td>
                  <td className={`${GridEl} border-b-0`}>
                    <Checkmark></Checkmark>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ContactButton></ContactButton>
        </div>
        {/*end of code changes*/}
        <div className="mx-auto my-36 max-w-5xl">
          <Sponsors />
        </div>
        <div className="mx-auto w-11/12 lg:max-w-5xl">
          <p className="mx-auto mb-8 text-[2.25rem] leading-[130%] tracking-tight">
            Frequently Asked Questions
          </p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-[#d6ebfd30]">
              <AccordionTrigger>
                Are your sponsorship packages tax deductable?
              </AccordionTrigger>
              <AccordionContent className="text-[#f1f7feb5]">
                Yes! We can provide our charitable registration number on
                request, and you will be able to file a tax deductible for the
                full amount!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mx-auto mt-36 w-11/12 space-y-6 text-center">
          <p className="text-4xl font-semibold leading-[120%] tracking-tight">
            <span className="bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
              Need something else?
            </span>
          </p>
          <p className="px-1 text-neutral-400">
            Our team is happy to work with you to create a custom sponsorship
            package that fits your needs.
          </p>
          <a
            className="mx-auto flex h-10 w-max flex-row items-center justify-center rounded-full bg-white pl-5 pr-2 font-semibold text-black"
            href="mailto:contact@team4308.ca"
            target="_blank"
          >
            contact@team4308.ca
            <svg
              className="text-[#70757E]"
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
