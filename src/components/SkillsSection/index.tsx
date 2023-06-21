import { SectionTitle } from "../SectionTitle";
import { IconBox } from "./IconBox";

export const SkillsSection = () => {
  return (
    <section className="py-20" id="skills">
      <SectionTitle title="SKILLS" subtitle="CHECK OUT MY" />
      <div>
        <ul className="grid gap-12 grid-cols-auto-fill">
          <li>
            <IconBox
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="js_icon"
                />
              }
              language="JavaScript"
            />
          </li>
          <li>
            <IconBox
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="react_icon"
                />
              }
              language="React"
            />
          </li>
          <li>
            <IconBox
              icon={
                <svg viewBox="0 0 128 128">
                  <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm32.7 114.4L48.4 41.8h-6.8v50.1h6.8V55.3l44.2 61.5c-8.5 4.6-18.2 7.2-28.6 7.2-33.2.1-60.1-26.8-60.1-60S30.8 3.9 64 3.9s60.1 26.9 60.1 60.1c0 21.1-10.9 39.7-27.4 50.4z"></path>
                  <path d="M78.6 73.3l7.5 11.3V41.8h-7.5z"></path>
                </svg>
              }
              language="Nextjs"
            />
          </li>
          <li>
            <IconBox
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="ts_icon"
                />
              }
              language="TypeScript"
            />
          </li>
          <li>
            <IconBox
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                  alt="vue_icon"
                />
              }
              language="Vuejs"
            />
          </li>
          <li>
            <IconBox
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg"
                  alt="rails_icon"
                />
              }
              language="Rails"
            />
          </li>
          <li>
            <IconBox
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="node_icon"
                />
              }
              language="Nodejs"
            />
          </li>
          <li>
            <IconBox
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                  alt="postgresql_icon"
                />
              }
              language="PostgreSQL"
            />
          </li>
          <li>
            <IconBox
              icon={<img src="/apollo_icon.svg" alt="apollo" />}
              language="Apollo"
            />
          </li>
          <li>
            <IconBox
              icon={<img src="/hasura_icon.svg" alt="apollo" />}
              language="Hasura"
            />
          </li>
          <li>
            <IconBox
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                  alt="figma_icon"
                />
              }
              language="Figma"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
