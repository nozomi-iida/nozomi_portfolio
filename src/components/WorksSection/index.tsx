import { SectionTitle } from "../SectionTitle";
import { WrokCard } from "./WorkCard";

export const WorksSection = () => {
  return (
    <section className="py-20" id="works">
      <SectionTitle title="PROJECTS" subtitle="TAKE A LOOK AT MY" />
      <div className="p-12 rounded-3xl bg-white flex flex-col gap-8">
        <WrokCard
          title="Diary for Australia working woliday"
          description={`- Wanted to make a working holiday diary - Try to use app router with nextjs@13.\n- Manage content with contentful as CMS.`}
          technologies={["Nextjs", "Contentful", "Tailwind CSS"]}
          githubLink="https://github.com/nozomi-iida/nozo-blog"
          liveLink="https://nozo-blog-one.vercel.app"
          imageUrl="/nozo_blog.png"
        />
        <WrokCard
          title="Meeting scheduler with Google calendar"
          description={`- A chrome extension that opens the meeting url in your browser when it's time so you don't be late for MTG\n- Use Google Calendar API.\n- Use Chakra UI.`}
          technologies={[
            "Chrome Extension",
            "React",
            "Google Calendar API",
            "Chackra UI",
          ]}
          imageUrl="/meeting_scheduler.png"
          githubLink="https://github.com/nozomi-iida/meeting-scheduler-with-google-calender"
          // liveLink="https://chrome.google.com/webstore/detail/meeting-scheduler-with-go/mkildadmiffilfedeghakgbjldpbjflk?hl=ja&authuser=0"
        />
        <WrokCard
          title="Kindle daily sale twitter bot(Currently stopped)"
          description={`- Wanted to learn about Rust.\n- Wanted to know the daily sale of kindle books.`}
          technologies={["Rust", "Twitter API"]}
          imageUrl="/kindle_daily_sale.png"
          githubLink="https://github.com/nozomi-iida/kindle_daily_sale_twitter_bot"
          liveLink="https://twitter.com/kindleDailyBot"
        />
        {/* <WrokCard
          title="Attendance management system"
          description={`- Be used as an attendance management system at my preview job\n- Study to use backend with Golang.`}
          technologies={["Golang", "React", "PostgreSQL"]}
          githubLink="https://github.com/nozomi-iida/attendance-management"
        /> */}
      </div>
    </section>
  );
};
