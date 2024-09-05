import { about } from "../../data";

export const Statistics: React.FC = () => {
  const { statistics } = about;

  return (
    <ul className="flex flex-wrap gap-[10px] xl:gap-5 xl:max-w-[898px]">
      {statistics.map(({ id, value, text }) => (
        <li
          key={id}
          className="w-[170px] p-5 bg-whiteMilky rounded-3xl xl:w-[439px]"
        >
          <p className="font-mustica text-[40px] font-semibold leading-[1.2] text-red mb-2 xl:text-[68px]  xl:mb-5">
            {value}
          </p>
          <p className="font-mustica text-xl font-semibold leading-none text-black opacity-80 xl:text-[34px] ">
            {text}
          </p>
        </li>
      ))}
    </ul>
  );
};
