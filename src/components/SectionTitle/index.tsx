import { FC } from "react";

type SectionTitleProps = {
  title: string;
  subtitle: string;
};
export const SectionTitle: FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="relative mb-12">
      <span className="text-xs pl-20 pb-6 block before:content-[' '] before:absolute before:w-12 before:h-px	before:bg-black before:left-0 before:top-1.5">
        {subtitle}
      </span>
      <h2 className="text-2xl font-medium	">{title}</h2>
    </div>
  );
};
