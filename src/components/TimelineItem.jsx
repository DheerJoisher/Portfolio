import { motion } from 'framer-motion';

export default function TimelineItem({ experience }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-3xl border border-white/10 bg-slate-950/95 p-6 shadow-soft"
    >
      <div className="absolute left-6 top-6 h-3 w-3 rounded-full bg-accent shadow-accent" />
      <div className="ml-8 space-y-3">
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <span>{experience.company}</span>
          <span className="rounded-full border border-white/10 px-3 py-1">{experience.duration}</span>
        </div>
        <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
        <p className="text-sm leading-7 text-slate-300">{experience.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.tech.map((item) => (
            <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-200/70">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
