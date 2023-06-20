import { HomeSection } from "@/components/HomeSection";
import { NavigationBar } from "@/components/NavigationBar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <HomeSection />
    </main>
  );
}
