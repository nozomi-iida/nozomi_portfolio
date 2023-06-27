import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { HomeSection } from "@/components/HomeSection";
import { NavigationBar } from "@/components/NavigationBar";
import { SkillsSection } from "@/components/SkillsSection";
import { WorksSection } from "@/components/WorksSection";

export default function Home() {
  return (
    <main className="bg-bg">
      <NavigationBar />
      <div className="px-16 lg:px-8 md:px-4">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <WorksSection />
        <ContactSection />
      </div>
    </main>
  );
}
