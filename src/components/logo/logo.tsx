import clsx from "clsx";

import { LogoProps } from "./types";

export const Logo: React.FC<LogoProps> = ({ className, header, mobile }) => {
  return (
    <div className={clsx("flex py-5", className)}>
      <a
        href="/"
        className={clsx(
          "font-syne text-[32px] font-bold leading-9 tracking-[0.5px] uppercase  hover:opacity-60 transition-all duration-300",
          header && "xl:text-6xl",
          mobile ? "text-black" : "text-whiteMilky"
        )}
        aria-label="logo"
      >
        COMMIT
      </a>
    </div>
  );
};
