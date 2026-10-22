// app/portfolio/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import ProjectCase from "@/components/portfolio/ProjectCase";
import { projects } from "@/data/projects";
import { contentWidth, panel } from "@/lib/styles";
import HeroBar from "@/components/layout/herobar";

const pageTitle = "Portfolio";
export const metadata: Metadata = {
  title: pageTitle,
  description: "Selected web projects designed and developed by Camilo.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <HeroBar title={pageTitle} />

      <main className="px-4 py-8">
        <div className={`${contentWidth} space-y-12`}>
          {projects.map((project) => (
            <ProjectCase key={project.id} project={project} />
          ))}
        </div>
      </main>
    </>
  );
}
