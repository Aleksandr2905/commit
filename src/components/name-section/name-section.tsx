import { NameSectionProps } from "./types";

export const NameSection: React.FC<NameSectionProps> = ({ name }) => {
  return (
    <h2 className="chevron relative pl-10 text-2xl font-semibold leading-normal uppercase font-transforma text-red">
      {name}
    </h2>
  );
};
