import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { SlideMobile } from "../slide-mobile";
import sprite from "/images/icons/sprite.svg";

import { cases } from "../../data";

export const Slider: React.FC = () => {
  const refSlider = useRef<SwiperCore | null>(null);

  const { slideMob } = cases;

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
        wrapperTag="ul"
        modules={[Scrollbar, Navigation]}
        slidesPerView={"auto"}
        spaceBetween={24}
        centeredSlides={true}
        draggable={true}
        scrollbar={{ draggable: true }}
        className="pb-5"
      >
        {slideMob.map((slide, index) => (
          <SwiperSlide key={index}>
            <SlideMobile slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex py-5 justify-between absolute top-[39%] left-5 right-5 z-20">
        <button
          type="button"
          onClick={handlePrev}
          className="flex justify-center items-center rounded-full border border-whiteMilky w-10 h-10 bg-[rgba(255, 255, 255, 0.10)]"
        >
          <svg width="14" height="14">
            <use href={`${sprite}#arrow-left`} className="fill-whiteMilky" />
          </svg>
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="flex justify-center items-center rounded-full border border-whiteMilky w-10 h-10 bg-[rgba(255, 255, 255, 0.10)]"
        >
          <svg width="14" height="14">
            <use href={`${sprite}#arrow-right`} className="fill-whiteMilky " />
          </svg>
        </button>
      </div>
    </div>
  );
};
