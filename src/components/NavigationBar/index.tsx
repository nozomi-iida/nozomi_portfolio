"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { useRouter } from "next/navigation";

export const NavigationBar = () => {
  const [showShadow, setShowShadow] = useState(false);
  const router = useRouter();
  const onScrollPage = (href: string) => {
    window.requestAnimationFrame(() => {
      const offsetTop = document.getElementById(href.substring(1))?.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    });
    window.history.pushState({}, "", href);
  };

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
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <button className="hidden md:block fixed top-9 right-9 z-docked">
            <AiOutlineMenu className="w-9 h-9" />
          </button>
        </SheetTrigger>
        <SheetContent className="bg-sky-500 w-56">
          <div className="flex gap-4 flex-col">
            <SheetClose
              onClick={() => onScrollPage("#home")}
              className="text-white box-xl hover:underline"
            >
              Home
            </SheetClose>
            <SheetClose
              onClick={() => onScrollPage("#about")}
              className="text-white box-xl hover:underline"
            >
              About
            </SheetClose>
            <SheetClose
              onClick={() => onScrollPage("#skills")}
              className="text-white box-xl hover:underline"
            >
              Skills
            </SheetClose>
            <SheetClose
              onClick={() => onScrollPage("#works")}
              className="text-white box-xl hover:underline"
            >
              Works
            </SheetClose>
            <SheetClose
              onClick={() => {
                onScrollPage("#contact");
              }}
              className="text-white box-xl hover:underline"
            >
              Contact
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
      <div
        className={`flex justify-between fixed top-0 w-full z-docked bg-sky-500 transition-shadow px-16 lg:px-8 md:hidden ${
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
          <a
            href={"#home"}
            className="leading-nav text-white box-xl hover:underline"
          >
            Home
          </a>
          <a
            href={"#about"}
            className="leading-nav text-white box-xl hover:underline"
          >
            About
          </a>
          <a
            href={"#skills"}
            className="leading-nav text-white box-xl hover:underline"
          >
            Skills
          </a>
          <a href={"#works"} className="leading-nav text-white hover:underline">
            Works
          </a>
          <a
            href={"#contact"}
            className="leading-nav text-white hover:underline"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};
