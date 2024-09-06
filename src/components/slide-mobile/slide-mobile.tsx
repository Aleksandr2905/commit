import { SlideMobileProps } from "./types";

export const SlideMobile: React.FC<SlideMobileProps> = ({ slide }) => {
  return (
    <div className="relative mb-3">
      <img
        src={slide.img1x}
        srcSet={`${slide.img1x} 1x, ${slide.img2x} 2x`}
        alt={slide.alt}
        className="w-full "
      />
      <div className="px-5 pb-6 absolute left-0 bottom-0  bg-[rgba(0,0,0,0.20)] rounded-b-[26px]">
        <h4 className="font-mustica text-[40px] font-semibold leading-tight text-whiteMilky mb-5">
          {slide.title}
        </h4>
        <ul className="flex flex-col gap-2">
          {slide.list.map((item) => (
            <li
              key={item}
              className="relative point pl-6 font-darkerMedium text-xl font-medium leading-[1.1 text-whiteMilky"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
