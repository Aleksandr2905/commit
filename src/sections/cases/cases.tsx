import { NameSection } from "../../components/name-section";
import { Subtitle } from "../../components/subtitle";
import { Title } from "../../components/title";

import { cases } from "../../data";

export const Cases: React.FC = () => {
  const { name, title, subtitle } = cases;
  return (
    <section className="mt-[60px] xl:mt-5">
      <div className="container">
        <div className="p-[10px] xl:p-0">
          <div className="flex flex-col gap-6 mb-6 xl:flex-row xl:justify-between xl:px-10 xl:py-20 xl:mb-0">
            <NameSection name={name} />
            <Title title={title} className="xl:max-w-[565px]" />
            <Subtitle subtitle={subtitle} className="xl:max-w-[409px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
