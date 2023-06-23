import { SectionTitle } from "../SectionTitle";
import { WrokCard } from "./WorkCard";

export const WorksSection = () => {
  return (
    <section className="py-20" id="works">
      <SectionTitle title="PROJECTS" subtitle="TAKE A LOOK AT MY" />
      <div className="p-12 rounded-3xl bg-white">
        <WrokCard
          title="Test"
          description="Test"
          technologies={["Nextjs", "Contentful"]}
          githubLink="https://github.com/nozomi-iida/nozo-blog"
        />
      </div>
    </section>
  );
};
