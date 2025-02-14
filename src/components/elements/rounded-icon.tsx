import { FC } from "react";
import cs from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const RoundedIcon: FC<Props> = ({ children, className }) => {
  return (
    <div className={className}>
      <div className={cs("relative h-12 w-12 overflow-hidden rounded-md")}>
        <div className="absolute -inset-10 z-10 bg-gradient-to-tr from-[#C7DFF0] to-[#1476B7]"></div>
        <div className="absolute inset-[2px] z-20 flex items-center justify-center rounded bg-white dark:bg-p2dark-1000 dark:text-zinc-200">
          {children}
        </div>
      </div>
    </div>
  );
};

export default RoundedIcon;
