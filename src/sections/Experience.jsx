import SectionTitle from '../components/SectionTitle.jsx';
import TimelineItem from '../components/TimelineItem.jsx';
import experience from '../data/experience.js';

export default function Experience() {
  return (
    <section id="experience" className="mt-20">
      <SectionTitle icon={<span>⏳</span>} title="Experience" subtitle="Career and leadership" />
      <p className="max-w-2xl text-slate-400">A curated timeline of roles where I’ve grown my communication, execution, and technical craft.</p>
      <div className="mt-10 space-y-6">
        {experience.map((item) => (
          <TimelineItem key={`${item.company}-${item.role}`} experience={item} />
        ))}
      </div>
    </section>
  );
}
