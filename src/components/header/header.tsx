import { useMediaQuery } from "react-responsive";
import { Button } from "../button";
import { Logo } from "../logo";
import { NavMenu } from "../nav-menu";
import { MobileMenu } from "../mobile-menu";

export const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  return (
    <header className="absolute w-full">
      <div className="container flex justify-between px-5 py-10 xl:px-12 xl:py-7">
        {isDesktop ? <NavMenu /> : <MobileMenu />}
        <Logo header />
        <Button />
      </div>
    </header>
  );
};
