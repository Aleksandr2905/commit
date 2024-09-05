import { hero } from "../../data";

export const Hero: React.FC = () => {
  const { title, subTitle } = hero;

  return (
    <section className="mt-[10px] xl:mt-5">
      <div className="container">
        <div className="flex hero-bg h-[740px] rounded-[40px] xl:h-[920px]">
          <div className="flex flex-col gap-6 px-5 pb-[60px] justify-end xl:px-7 xl:py-10 ">
            <h1 className="text-5xl font-semibold font-transforma text-whiteMilky xl:text-[120px] xl:leading-none ">
              {title}
            </h1>
            <p className="text-[22px] leading-7 font-semibold font-mustica text-whiteMilky xl:text-[40px] xl:leading-[1.2] xl:w-[966px]">
              {subTitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
