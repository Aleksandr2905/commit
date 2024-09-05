import clsx from "clsx";

import { LogoProps } from "./types";

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={clsx("flex py-5", className)}>
      <a
        href="/"
        className=" font-syne text-[32px] font-bold leading-9 tracking-[0.5px] uppercase text-whiteMilky hover:opacity-60 transition-all duration-300"
        aria-label="logo"
      >
        COMMIT
      </a>
    </div>
  );
};
