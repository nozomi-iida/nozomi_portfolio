import { SectionTitle } from "../SectionTitle";

export const AboutSection = () => {
  return (
    <section className="py-20" id="about">
      <SectionTitle title="ABOUT ME" subtitle="SOME INFO" />
      <article className="p-12 rounded-3xl bg-white">
        <p className="text-xl	leading-normal whitespace-pre-wrap">
          {`I'm a front-end web developer for two and half years.\nI have had the opportunity to work on various projects and with various teams,deepening both my technical skills and my ability to work in a team environment.\nMy goal is to understand the problems users face and provide the best solutions to address them.\nI am proficient in utilizing agile development methodologies and thrive in a team environment, focusing on bringing projects to successful conclusions through rapid feedback and iterations.\nI also pride myself on my self-learning capabilities and the ability to quickly grasp new technologies and trend.`}
        </p>
      </article>
    </section>
  );
};
