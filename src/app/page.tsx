import { AboutSection } from "@/components/AboutSection";
import { HomeSection } from "@/components/HomeSection";
import { NavigationBar } from "@/components/NavigationBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-bg">
      <NavigationBar />
      <div className="px-page">
        <HomeSection />
        <AboutSection />
      </div>
    </main>
  );
}
