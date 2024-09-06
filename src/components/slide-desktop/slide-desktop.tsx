import { SlideProps } from "../slide-mobile";

export const SlideDesktop: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="relative xl:mb-8">
      <img
        src={slide.img1x}
        srcSet={`${slide.img1x} 1x, ${slide.img2x} 2x`}
        alt={slide.alt}
        width="1400"
        height="897"
        className="w-full xl:rounded-3xl"
      />
      <div className="xl:p-10 absolute left-0 bottom-0  bg-[rgba(0,0,0,0.20)] backdrop-blur-[100px] rounded-b-3xl xl:w-full">
        <h4 className="font-mustica xl:text-[64px] font-semibold xl:leading-[48px] text-whiteMilky xl:mb-10">
          {slide.title}
        </h4>
        <ul className="flex xl:flex-row xl:gap-5 xl:flex-wrap">
          {slide.list.map((item, index) => (
            <li
              key={index}
              className="relative point pl-6 font-darkerMedium xl:text-3xl font-medium xl:leading-[27px] text-whiteMilky"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
