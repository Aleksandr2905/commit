import clsx from "clsx";

import { SubtitleProps } from "./types";

export const Subtitle: React.FC<SubtitleProps> = ({ subtitle, className }) => {
  return (
    <h3
      className={clsx(
        "font-darkerMedium text-base font-medium leading-snug text-grey xl:text-xl xl:leading-[1.35] xl:tracking-wide",
        className
      )}
    >
      {subtitle}
    </h3>
  );
};
