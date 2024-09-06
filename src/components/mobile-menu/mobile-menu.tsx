import { useState, useEffect } from "react";
import sprite from "/images/icons/sprite.svg";
import { Logo } from "../logo";
import { NavMenu } from "../nav-menu";

export const MobileMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMobileMenu]);

  const handleBackdrop = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (event.currentTarget === event.target) {
      setShowMobileMenu(!showMobileMenu);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleMobileMenu}
        aria-label="burger button"
      >
        <svg width="32" height="32">
          <use href={`${sprite}#burger`} />
        </svg>
      </button>

      {showMobileMenu && (
        <div
          onClick={handleBackdrop}
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50"
        >
          <div className="mx-auto w-[370px] h-screen bg-whiteMilky border-4 border-black rounded-[40px] pt-10 px-5">
            <div className="flex mb-[60px]">
              <button
                type="button"
                onClick={toggleMobileMenu}
                aria-label="close button"
                className="mr-[60px] "
              >
                <svg width="32" height="32">
                  <use href={`${sprite}#close`} className="stroke-black" />
                </svg>
              </button>
              <Logo mobile />
            </div>
            <NavMenu mobile onClick={toggleMobileMenu} />
          </div>
        </div>
      )}
    </>
  );
};
