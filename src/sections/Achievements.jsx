import SectionTitle from '../components/SectionTitle.jsx';
import achievements from '../data/achievements.js';

export default function Achievements() {
  return (
    <section id="achievements" className="mt-20">
      <SectionTitle icon={<span>🏆</span>} title="Achievements" subtitle="Recognition & impact" />
      <p className="max-w-2xl text-slate-400">Highlights from leadership, volunteer work, and event delivery rooted in real initiative and execution.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {achievements.map((item) => (
          <article key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/95 p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
