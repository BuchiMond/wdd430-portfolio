interface SkillsCardProps {
  heading: string;
  skills: string[];
}

export default function SkillsCard({ heading, skills }: SkillsCardProps) {
  return (
    <section className="mt-8 p-6 bg-gray-50 border border-gray-300 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold mb-3 text-gray-900">{heading}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
