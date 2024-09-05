import clsx from "clsx";
import { TitleProps } from "./types";

export const Title: React.FC<TitleProps> = ({ title, className }) => {
  return (
    <h3
      className={clsx(
        "text-[28px] font-semibold leading-none text-black font-mustica xl:text-5xl",
        className
      )}
    >
      {title}
    </h3>
  );
};
