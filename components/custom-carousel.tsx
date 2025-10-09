import fs from "fs"
import path from "path";
import Image from "next/image";
import CarouselWrapper from "./carousel-wrapper";
import { ResponsiveType, StateCallBack } from "react-multi-carousel";

interface Props {
  src: string
  childClass?: string

  responsive: ResponsiveType;
  deviceType?: string;
  ssr?: boolean;
  slidesToSlide?: number;
  draggable?: boolean;
  arrows?: boolean;
  renderArrowsWhenDisabled?: boolean;
  swipeable?: boolean;
  removeArrowOnDeviceType?: string | Array<string>;
  customLeftArrow?: React.ReactElement<any> | null;
  customRightArrow?: React.ReactElement<any> | null;
  customDot?: React.ReactElement<any> | null;
  customButtonGroup?: React.ReactElement<any> | null;
  infinite?: boolean;
  minimumTouchDrag?: number;
  afterChange?: (previousSlide: number, state: StateCallBack) => void;
  beforeChange?: (nextSlide: number, state: StateCallBack) => void;
  sliderClass?: string;
  itemClass?: string;
  itemAriaLabel?: string;
  containerClass?: string;
  className?: string;
  dotListClass?: string;
  keyBoardControl?: boolean;
  centerMode?: boolean;
  autoPlay?: boolean;
  autoPlaySpeed?: number;
  showDots?: boolean;
  renderDotsOutside?: boolean;
  renderButtonGroupOutside?: boolean;
  partialVisible?: boolean;
  partialVisbile?: boolean;
  customTransition?: string;
  transitionDuration?: number;
  focusOnSelect?: boolean;
  additionalTransfrom?: number;
  pauseOnHover?: boolean;
  shouldResetAutoplay?: boolean;
  rewind?: boolean;
  rewindWithAnimation?: boolean;
  rtl?: boolean;
}

function getSlides(src: string, className?: string) {
  if (!src) return []

  const res = fs.readdirSync(path.join(process.cwd(), "public", src)).map((file) => {
    return (
      <div className={`mx-auto relative ${className}`} key={file}>
        <Image
          src={path.join(src, file)}
          fill
          quality={100}
          alt=""
          className={`object-cover rounded-lg`}
        />
      </div>
    );
  })
  return res
}

export default function CustomCarousel(props: Props) {
  const slides = getSlides(props.src, props.childClass);

  return (
    <CarouselWrapper
      draggable={false}
      swipeable={false}
      pauseOnHover={false}
      {...props}
      className={`max-w-7xl mx-auto ${props.className}`}
    >
      {...slides}
    </CarouselWrapper>
  );
}
