import clsx from "clsx";

import { SlideProps } from "./types";

export const Slide: React.FC<SlideProps> = ({ slide, isMobile }) => {
  return (
    <div className={clsx("relative", isMobile ? "mb-3" : "xl:mb-8")}>
      <img
        src={slide.img1x}
        srcSet={`${slide.img1x} 1x, ${slide.img2x} 2x`}
        alt={slide.alt}
        width={isMobile ? "370" : "1400"}
        height={isMobile ? "664" : "897"}
        className="w-full xl:rounded-3xl"
      />
      <div
        className={clsx(
          "absolute left-0 bottom-0 bg-[rgba(0,0,0,0.20)]",
          isMobile
            ? "px-5 pb-6 pt-[30px] rounded-b-3xl"
            : "xl:p-10 rounded-b-3xl xl:w-full backdrop-blur-[100px]"
        )}
      >
        <h4
          className={clsx(
            "font-mustica text-whiteMilky",
            isMobile
              ? "text-[40px] font-semibold leading-tight mb-5"
              : "xl:text-[64px] font-semibold xl:leading-[48px] xl:mb-10"
          )}
        >
          {slide.title}
        </h4>
        <ul
          className={clsx(
            "flex",
            isMobile ? "flex-col gap-2" : "xl:flex-row xl:gap-5 xl:flex-wrap"
          )}
        >
          {slide.list.map((item, index) => (
            <li
              key={index}
              className={clsx(
                "relative point pl-6 font-darkerMedium font-medium text-whiteMilky",
                isMobile
                  ? "text-xl leading-[1.1]"
                  : "xl:text-3xl xl:leading-[27px]"
              )}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
