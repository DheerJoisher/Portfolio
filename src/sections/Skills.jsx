import SectionTitle from '../components/SectionTitle.jsx';
import SkillCard from '../components/SkillCard.jsx';
import skills from '../data/skills.js';

export default function Skills() {
  return (
    <section id="skills" className="mt-20">
      <SectionTitle icon={<span>🛠️</span>} title="Skills" subtitle="Technology categories" />
      <p className="max-w-2xl text-slate-400">Organized skill groups that reflect a product-focused engineering practice.</p>
      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        {skills.map((block) => (
          <SkillCard key={block.category} title={block.category} items={block.items} />
        ))}
      </div>
    </section>
  );
}
