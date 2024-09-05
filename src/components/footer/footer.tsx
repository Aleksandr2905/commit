import { Logo } from "../logo";
import { Address } from "../address";
import { Phone } from "../phone";
import { Contacts } from "../contacts";
import { Social } from "../social";

import { common } from "../../data";

export const Footer: React.FC = () => {
  const { footer, copyright } = common;
  return (
    <footer id="contacts" className="bg-black">
      <div className="container p-5 xl:py-[60px] xl:px-[100px]">
        <div className="flex flex-col gap-10 xl:flex-row xl:justify-between">
          <div>
            <Logo className="py-[10px]" />
            <p className="text-white font-mustica text-2xl font-semibold leading-[1.2] mt-10 xl:mt-5">
              {footer.slogan}
            </p>
          </div>
          <div className="flex flex-col gap-10 mb-10 xl:flex-row">
            <Address />
            <Phone />
            <Contacts />
          </div>
        </div>
        <div className="flex flex-row pt-10 border-t border-grey xl:justify-between">
          <p className="font-sans text-sm font-normal text-grey max-w-64 xl:text-lg xl:leading-5 xl:max-w-none">
            {copyright}
          </p>
          <Social />
        </div>
      </div>
    </footer>
  );
};
