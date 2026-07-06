import { createFileRoute } from "@tanstack/react-router";
import { Masthead } from "@/components/portfolio/Masthead";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { AchievementTimeline } from "@/components/portfolio/AchievementTimeline";
import { SelectedWork } from "@/components/portfolio/SelectedWork";

import { ContactSection } from "@/components/portfolio/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Laxman Acharya — Computer Engineering Student & Builder" },
      {
        name: "description",
        content:
          "Portfolio of Laxman Acharya — Computer Engineering student at Kathmandu University building practical software for digital health, language access, finance tools, and social impact.",
      },
      { property: "og:title", content: "Laxman Acharya — Builder of practical software" },
      {
        property: "og:description",
        content:
          "HackForUHC 2026 winner, openIMIS Community Meeting presenter, and Harvard Health Systems Innovation Lab Hackathon participant. Projects in digital health, language accessibility, and student finance.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Masthead />
      <main className="relative bg-paper text-ink">
        <HeroSection />
        <AboutSection />
        <AchievementTimeline />
        <SelectedWork />
        <ContactSection />
      </main>
    </>
  );
}
