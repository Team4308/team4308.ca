import Sponsors from "@/components/sponsorCarousel";
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
            Sponsor Us
          </span>
        </p>
        <p className="mx-auto max-w-4xl text-balance px-1 text-neutral-400 md:text-[1.125rem] md:leading-[1.5]">
          Support our mission of giving high quality training and hands-on
          engineering work to all.
        </p>
      </div>
      <div className="mx-auto flex h-auto w-11/12 max-w-5xl grid-cols-2 flex-wrap items-stretch justify-center gap-x-8 gap-y-8">
        <div className="flex w-full flex-col rounded-3xl border border-[#d6ebfd30] text-center md:w-[300px] md:w-[400px] lg:w-[450px]">
          <p className="mb-8 mt-6">Bronze</p>
          <p className="mb-8 text-4xl">$250+</p>
          <ul className="mx-auto w-10/12 space-y-3 text-sm text-[#f1f7feb5]">
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
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
              <p className="pt-[0.11em]">Name & logo on team shirts</p>
            </li>
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
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
              <p className="pt-[0.11em]">Name & logo on team social media</p>
            </li>
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
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
              <p className="pt-[0.11em]">Name & logo on team website</p>
            </li>
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
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
              <p className="pt-[0.11em]">Name & logo on team banner</p>
            </li>
          </ul>
          <div className="mt-auto">
            <div>
              <a
                href="mailto:contact@team4308.ca"
                target="_blank"
                className="mx-auto mb-6 mt-8 inline-block w-10/12 rounded-full bg-white py-2 text-sm font-semibold text-black"
              >
                contact@team4308.ca
              </a>
            </div>
          </div>
        </div>
        <div className="flex h-auto w-full flex-col rounded-3xl border border-[#d6ebfd30] text-center md:w-[300px] md:w-[400px] lg:w-[450px]">
          <p className="mb-8 mt-6">Silver</p>
          <p className="mb-8 text-4xl">$1000+</p>
          <ul className="mx-auto w-10/12 space-y-3 text-sm text-[#f1f7feb5]">
            <li className="flex flex-row space-x-2 text-left">
              <p className="pt-[0.11em] text-base text-white">
                Everything in Bronze, plus:
              </p>
            </li>
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
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
              <p className="pt-[0.11em]">Name & logo on robot</p>
            </li>
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
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
              <p className="pt-[0.11em]">Shoutout at competition ceremonies</p>
            </li>
          </ul>
          <div className="mt-auto">
            <div>
              <a
                href="mailto:contact@team4308.ca"
                target="_blank"
                className="mx-auto mb-6 mt-8 inline-block w-10/12 rounded-full bg-white py-2 text-sm font-semibold text-black"
              >
                contact@team4308.ca
              </a>
            </div>
          </div>
        </div>
        <div className="flex h-auto w-full flex-col rounded-3xl border border-[#d6ebfd30] text-center md:w-[300px] md:w-[400px] lg:w-[450px]">
          <p className="mb-8 mt-6">Gold</p>
          <p className="mb-8 text-4xl">$2000+</p>
          <ul className="mx-auto w-10/12 space-y-3 text-sm text-[#f1f7feb5]">
            <li className="flex flex-row space-x-2 text-left">
              <p className="pt-[0.11em] text-base text-white">
                Everything in Silver, plus:
              </p>
            </li>
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
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
              <p className="pt-[0.11em]">
                Custom monthly updates on team and community efforts
              </p>
            </li>
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
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
              <p className="pt-[0.11em]">Robot demonstration to company</p>
            </li>
          </ul>
          <div className="mt-auto">
            <div>
              <a
                href="mailto:contact@team4308.ca"
                target="_blank"
                className="mx-auto mb-6 mt-8 inline-block w-10/12 rounded-full bg-white py-2 text-sm font-semibold text-black"
              >
                contact@team4308.ca
              </a>
            </div>
          </div>
        </div>
        <div className="flex h-auto w-full flex-col rounded-3xl border border-[#d6ebfd30] text-center md:w-[300px] md:w-[400px] lg:w-[450px]">
          <p className="mb-8 mt-6">Title Sponsor</p>
          <p className="mb-8 text-4xl">$3000+</p>
          <ul className="mx-auto w-10/12 space-y-3 text-sm text-[#f1f7feb5]">
            <li className="flex flex-row space-x-2 text-left">
              <p className="pt-[0.11em] text-base text-white">
                Everything in Gold, plus:
              </p>
            </li>
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
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
              <p className="pt-[0.11em]">Large name & logo on robot</p>
            </li>
            <li className="flex flex-row space-x-2 text-left">
              <svg
                className="min-w-[24px] text-[#43fea4ab]"
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
              <p className="pt-[0.11em]">Anodized robot to company colours</p>
            </li>
          </ul>
          <div className="mt-auto">
            <div>
              <a
                href="mailto:contact@team4308.ca"
                target="_blank"
                className="mx-auto mb-6 mt-8 inline-block w-10/12 rounded-full bg-white py-2 text-sm font-semibold text-black"
              >
                contact@team4308.ca
              </a>
            </div>
          </div>
        </div>
      </div>
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
              Yes! We can provide our charitable registration number on request,
              and you will be able to file a tax deductible for the full amount!
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
    </>
  );
}
