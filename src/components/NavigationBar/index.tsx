"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const NavigationBar = () => {
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const addShadow = () => {
      if (window.pageYOffset === 0) {
        setShowShadow(false);
      } else {
        setShowShadow(true);
      }
    };

    window.addEventListener("scroll", addShadow);
    return () => window.removeEventListener("scroll", addShadow);
  }, [setShowShadow]);

  return (
    <div
      className={`flex justify-between fixed top-0 w-full z-docked bg-sky-500 transition-shadow px-16 lg:px-8 md:px-4 ${
        showShadow ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="relative w-20">
        <Image
          fill
          alt="portfolio_log"
          className="object-contain"
          src="/portfolio_log.png"
        />
      </div>
      <div className="flex gap-4">
        <Link
          href={"#home"}
          className="leading-nav text-white box-xl hover:underline"
        >
          Home
        </Link>
        <Link
          href={"#about"}
          className="leading-nav text-white box-xl hover:underline"
        >
          About
        </Link>
        <Link
          href={"#skills"}
          className="leading-nav text-white box-xl hover:underline"
        >
          Skills
        </Link>
        <Link
          href={"#works"}
          className="leading-nav text-white hover:underline"
        >
          Works
        </Link>
        <Link
          href={"#contact"}
          className="leading-nav text-white hover:underline"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
