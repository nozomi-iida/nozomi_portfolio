import { FC, ReactElement } from "react";

type IconBoxProps = {
  icon: ReactElement;
  language: string;
};
export const IconBox: FC<IconBoxProps> = ({ icon, language }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg flex flex-col items-center transition-shadow hover:shadow-2xl">
      <div className="w-9 h-9">{icon}</div>
      <p className="text-xs mt-2 w-14 text-center">{language}</p>
    </div>
  );
};
