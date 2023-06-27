import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type WrokCardProps = {
  title: string;
  technologies: string[];
  description: string;
  liveLink?: string;
  githubLink: string;
  imageUrl?: string;
};

export const WrokCard: FC<WrokCardProps> = ({
  title,
  technologies,
  description,
  liveLink,
  githubLink,
  imageUrl,
}) => {
  return (
    <div className="flex p-8 gap-6 flex-wrap shadow-md rounded-3xl">
      <div className="relative flex-work-card-img md:flex-none w-full h-work-card-img">
        <Image
          fill
          alt="nozomi_icon"
          className="object-contain"
          src={imageUrl || "/nozomi_work_icon.JPG"}
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg text-medium">{title}</h3>
        <p className="mt-2">
          Technologies Used:{" "}
          <span className="text-sky-500">{technologies.join(", ")}</span>
        </p>
        <p className="text-sm whitespace-pre-wrap mt-6">{description}</p>
        <div className="flex text-sky-500 gap-6 underline mt-6">
          {liveLink && (
            <Link target="_blank" href={liveLink}>
              Live
            </Link>
          )}
          <Link target="_blank" href={githubLink}>
            Repo
          </Link>
        </div>
      </div>
    </div>
  );
};
