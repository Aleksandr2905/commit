import { useMediaQuery } from "react-responsive";

import { NameSection } from "../../components/name-section";
import { Statistics } from "../../components/statistics";
import { Subtitle } from "../../components/subtitle";
import { Title } from "../../components/title";

import { about } from "../../data";

export const About: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const { name, title, subtitle, imgMan, imgKeyboard } = about;

  return (
    <section id="about" className="mt-[60px] xl:mt-5">
      <div className="container">
        <div className="p-[10px] xl:p-0">
          <div className="flex flex-col gap-6 mb-6 xl:flex-row xl:justify-between xl:px-10 xl:py-20 xl:mb-0">
            <NameSection name={name} />
            <Title title={title} className="xl:max-w-[565px]" />
            <Subtitle subtitle={subtitle} className="xl:max-w-[409px]" />
          </div>
          <div className="flex flex-col gap-[10px] xl:flex-row-reverse xl:gap-5 xl:px-10 xl:pb-10">
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet={`${imgMan.desktop1x} 1x, ${imgMan.desktop2x} 2x`}
              />
              <source
                media="(max-width: 390px)"
                srcSet={`${imgMan.mobile1x} 1x, ${imgMan.mobile2x} 2x`}
              />
              <img src={imgMan.mobile1x} alt={imgMan.alt} />
            </picture>
            <div>
              {isDesktop && (
                <img
                  src={imgKeyboard.img1x}
                  srcSet={`${imgKeyboard.img1x} 1x, ${imgKeyboard.img2x} 2x`}
                  alt={imgKeyboard.alt}
                  className="mb-5"
                />
              )}
              <Statistics />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
