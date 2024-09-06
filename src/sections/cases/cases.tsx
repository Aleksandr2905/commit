import { NameSection } from "../../components/name-section";
import { Slider } from "../../components/slider";
import { Subtitle } from "../../components/subtitle";
import { Title } from "../../components/title";

import { cases } from "../../data";

export const Cases: React.FC = () => {
  const { name, title, subtitle } = cases;
  return (
    <section id="cases" className="mt-[60px] xl:mt-5">
      <div className="container mb-10">
        <div className="p-[10px] xl:p-0">
          <div className="flex flex-col gap-6 mb-6 xl:flex-row xl:justify-between xl:px-10 xl:py-20 xl:mb-0">
            <NameSection name={name} />
            <Title title={title} className="xl:max-w-[365px]" />
            <Subtitle subtitle={subtitle} className="xl:max-w-[678px]" />
          </div>
        </div>
        <Slider />
      </div>
    </section>
  );
};
