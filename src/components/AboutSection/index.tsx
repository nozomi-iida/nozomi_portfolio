import { SectionTitle } from "../SectionTitle";

export const AboutSection = () => {
  return (
    <section className="py-20" id="about">
      <SectionTitle title="ABOUT ME" subtitle="SOME INFO" />
      <article className="p-12 rounded-3xl bg-white">
        <p className="text-xl	leading-normal">
          I&apos;m a front-end web developer with a background in computer
          systems and network infrastructure. My 8 years of IT experience has
          given me a strong foundation for web development and building complex
          solutions. Recently, I graduated from the Juno College Immersive Web
          Development Bootcamp. I am passionate about coding and solving
          problems through code, and I am excited to work alongside other
          amazing programmers and learn so much more!
        </p>
      </article>
    </section>
  );
};
