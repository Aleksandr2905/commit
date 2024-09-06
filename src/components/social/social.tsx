import sprite from "/images/icons/sprite.svg";

import { common } from "../../data";

export const Social: React.FC = () => {
  const { social } = common;
  return (
    <ul className="flex gap-[22px]">
      {social.map(({ icon, href, ariaLabel }) => (
        <li key={icon}>
          <a
            href={href}
            aria-label={ariaLabel}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="19" height="19">
              <use
                href={`${sprite}#${icon}`}
                className="fill-red hover:opacity-60  transition-all duration-300"
              />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};
