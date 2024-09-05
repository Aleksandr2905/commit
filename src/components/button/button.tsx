import { useMediaQuery } from "react-responsive";

export const Button: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  return (
    <div>
      {isDesktop && (
        <a
          href="#contacts"
          className="flex justify-center items-center rounded-[100px] py-[14px] px-10 border-2 border-whiteMilky font-darkerBold text-2xl font-bold leading-normal text-whiteMilky uppercase transition-all duration-300 hover:bg-whiteMilky hover:text-red"
        >
          Замовити
        </a>
      )}
    </div>
  );
};
