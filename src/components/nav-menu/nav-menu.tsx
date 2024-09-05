import { NavMenuProps } from "./types";

import { common } from "../../data";
import clsx from "clsx";

export const NavMenu: React.FC<NavMenuProps> = ({ onClick, mobile }) => {
  const { navigation } = common;
  return (
    <nav className="min-w-56">
      <ul className="flex flex-col gap-6">
        {navigation.map(({ href, name }) => (
          <li key={name}>
            <a
              href={href}
              className={clsx(
                "font-brotesk text-2xl font-semibold leading-4  uppercase transition-all duration-300 hover:opacity-60",
                mobile ? "text-black" : "text-whiteMilky"
              )}
              onClick={onClick}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
