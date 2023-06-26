import { SectionTitle } from "../SectionTitle";
import { WrokCard } from "./WorkCard";

export const WorksSection = () => {
  return (
    <section className="py-20" id="works">
      <SectionTitle title="PROJECTS" subtitle="TAKE A LOOK AT MY" />
      <div className="p-12 rounded-3xl bg-white flex flex-col gap-6">
        <WrokCard
          title="Diary for Australia working woliday"
          description={`- Wanted to make a working holiday diary - Try to use app router with nextjs@13.\n- Manage content with contentful as CMS.`}
          technologies={["Nextjs", "Contentful"]}
          githubLink="https://github.com/nozomi-iida/nozo-blog"
          liveLink="https://nozo-blog-one.vercel.app"
        />
        <WrokCard
          title="Meeting scheduler with Google calendar"
          description={`- A chrome extension that opens the MTG url in your browser when it's time so you don't be late for MTG\n- Use Google Calendar API.\n- Use Chakra UI.`}
          technologies={[
            "Chrome Extension",
            "React",
            "Google Calendar API",
            "Chackra UI",
          ]}
          githubLink="https://github.com/nozomi-iida/meeting-scheduler-with-google-calender"
          liveLink="https://chrome.google.com/webstore/detail/meeting-scheduler-with-go/mkildadmiffilfedeghakgbjldpbjflk?hl=ja&authuser=0"
        />
        <WrokCard
          title="Kindle daily sale twitter bot"
          description={`- Wanted to learn about Rust.\n- Wanted to know the daily sale of kindle books.`}
          technologies={["Rust", "Twitter API"]}
          githubLink="https://github.com/nozomi-iida/kindle_daily_sale_twitter_bot"
          liveLink="https://twitter.com/kindleDailyBot"
        />
        <WrokCard
          title="Attendance management system"
          description={`- Be used as an attendance management system at my preview job\n- Study to use backend with Golang.`}
          technologies={["Golang", "React", "PostgreSQL"]}
          githubLink="https://github.com/nozomi-iida/attendance-management"
        />
      </div>
    </section>
  );
};
