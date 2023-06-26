import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

export const HomeSection = () => {
  return (
    <section className="min-h-screen flex mt-header" id="home">
      <div className="flex w-full items-center flex-wrap justify-cente">
        <div className="flex-1/2 w-full py-4 pr-10 pl-4">
          <div className="relative w-80 h-80 flex mx-auto transform-style-3d duration-700 ease-in hover:rotate-y-180">
            <Image
              fill
              alt="nozomi_icon"
              className="object-contain shadow-home-icon rounded-full backface-hidden	z-10"
              src="/nozomi_private.JPG"
            />
            <Image
              fill
              alt="nozomi_icon"
              className="object-contain shadow-home-icon rounded-full backface-hidden rotate-y-180"
              src="/nozomi_work_icon.JPG"
            />
          </div>
        </div>
        <div className="flex-1/2 w-full">
          <p>Hi THERE! I&apos;M</p>

          <h1 className="my-6 text-4xl">
            <span className="text-sky-500">NOZOMI</span> IIDA
          </h1>
          <p>
            A <span className="text-sky-500">Front-End Web Developer</span>{" "}
            passionate about creating interactive applications and experiences
            on the web.
          </p>
          <div className="flex gap-6 mt-6 gap-6 items-center">
            <div>
              <Link
                href="/NozomiIida_cv.pdf"
                className="bg-sky-500 text-white rounded-3xl py-3 px-8 text-sm hover:shadow-xl transition-shadow"
                target="_blank"
              >
                RESUME
              </Link>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center">
                <Link
                  href="https://www.linkedin.com/in/nozomi-iida"
                  target="_blank"
                  className="block p-3 bg-white rounded-xl shadow-md transition-shadow hover:shadow-xl"
                >
                  <AiFillLinkedin className="text-sky-500 w-5 h-5" />
                </Link>
              </div>
              <div className="flex items-center">
                <Link
                  href="https://github.com/nozomi-iida"
                  target="_blank"
                  className="p-3 bg-white rounded-xl shadow-md transition-shadow hover:shadow-xl"
                >
                  <AiOutlineGithub className="text-sky-500 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};
