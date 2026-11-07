import ProjectList from "@/components/ProjectList";

// IMPORTANT: replace these with projects you have actually built,
// with real descriptions and working GitHub / live demo links.
const projects = [
  {
    title: "Quizzly",
    description: "Interactive quiz platform testing knowledge through categories, difficulty levels, and question formats.",
    technologies: ["HTML", "JavaScript", "CSS"],
    link: "https://buchimond.github.io/quizzly",
  },
  {
    title: "ChamberMond",
    description: "Lagos business chamber connecting entrepreneurs through networking, events, resources, and business opportunities.",
    technologies: ["HTML", "JavaScript", "CSS"],
    link: "https://buchimond.github.io/wdd231/chamber/index.html",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m a developer learning Next.js and React. Here are some of my
          recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
