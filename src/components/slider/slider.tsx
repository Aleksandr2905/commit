import { useRef } from "react";

import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { SlideMobile } from "../slide-mobile";
import { SlideDesktop } from "../slide-desktop";

import sprite from "/images/icons/sprite.svg";

import { cases } from "../../data";

export const Slider: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 1439 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const refSlider = useRef<SwiperCore | null>(null);

  const { slideMob, slideDesktop } = cases;

  const handlePrev = () => {
    if (refSlider.current) {
      refSlider.current.slidePrev(500);
    }
  };

  const handleNext = () => {
    if (refSlider.current) {
      refSlider.current.slideNext(500);
    }
  };

  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper) => {
          refSlider.current = swiper;
        }}
        modules={[Scrollbar, Navigation]}
        slidesPerView={"auto"}
        spaceBetween={24}
        centeredSlides={true}
        grabCursor={true}
        scrollbar={{ draggable: true }}
        className="pb-5"
      >
        {isMobile &&
          slideMob.map((slide) => (
            <SwiperSlide key={slide.id}>
              <SlideMobile slide={slide} />
            </SwiperSlide>
          ))}

        {isDesktop &&
          slideDesktop.map((slide) => (
            <SwiperSlide key={slide.id}>
              <SlideDesktop slide={slide} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="flex py-5 justify-between absolute top-[39%] left-5 right-5 z-20 xl:top-[45%]">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="button prev"
          className="flex justify-center items-center rounded-full border border-whiteMilky w-10 h-10 xl:w-[60px] xl:h-[60px] xl:border-2 bg-[rgba(255, 255, 255, 0.10)]"
        >
          <svg width="14" height="14" className="xl:w-6 xl:h-6">
            <use href={`${sprite}#arrow-left`} className="fill-whiteMilky" />
          </svg>
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="button next"
          className="flex justify-center items-center rounded-full border border-whiteMilky w-10 h-10 xl:w-[60px] xl:h-[60px] xl:border-2 bg-[rgba(255, 255, 255, 0.10)]"
        >
          <svg width="14" height="14" className="xl:w-6 xl:h-6">
            <use href={`${sprite}#arrow-right`} className="fill-whiteMilky " />
          </svg>
        </button>
      </div>
    </div>
  );
};
