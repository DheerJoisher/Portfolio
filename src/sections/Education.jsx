import SectionTitle from '../components/SectionTitle.jsx';
import education from '../data/education.js';

export default function Education() {
  return (
    <section id="education" className="mt-20">
      <SectionTitle icon={<span>🎓</span>} title="Education & certifications" subtitle="Academic background" />
      <p className="max-w-2xl text-slate-400">A modern view of education and academic milestones supporting my technical journey.</p>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {education.map((item) => (
          <article key={item.institution} className="rounded-3xl border border-white/10 bg-slate-950/95 p-6 shadow-soft">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{item.duration}</p>
            <h3 className="mt-4 text-xl font-semibold text-white">{item.institution}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.program}</p>
            <p className="mt-4 text-sm leading-7 text-slate-400">{item.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
