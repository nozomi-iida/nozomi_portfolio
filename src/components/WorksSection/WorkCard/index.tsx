import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type WrokCardProps = {
  title: string;
  technologies: string[];
  description: string;
  liveLink?: string;
  githubLink: string;
};

export const WrokCard: FC<WrokCardProps> = ({
  title,
  technologies,
  description,
  liveLink,
  githubLink,
}) => {
  return (
    <div className="flex p-8 gap-6 flex-wrap shadow-lg rounded-3xl">
      {/* TODO: ADD RESPONSIV */}
      <div className="relative max-w-work-card-img w-full h-work-card-img">
        <Image
          fill
          alt="nozomi_icon"
          className="object-contain"
          src="/nozomi_icon.JPG"
        />
      </div>
      <div className="">
        <h3 className="text-lg text-medium">{title}</h3>
        <p>
          Technologies Used:{" "}
          <span className="text-sky-500">{technologies.join(", ")}</span>
        </p>
        <p className="text-sm whitespace-pre-line">{description}</p>
        <div className="flex text-sky-500">
          {liveLink && <Link href={liveLink}>Live</Link>}
          <Link href={githubLink}>Repo</Link>
        </div>
      </div>
    </div>
  );
};
