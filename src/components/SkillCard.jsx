import { motion } from 'framer-motion';

export default function SkillCard({ title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="rounded-3xl border border-white/10 bg-slate-950/95 p-6 shadow-soft"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-5 grid gap-3 text-sm leading-6 text-slate-300 sm:grid-cols-2">
        {items.map((skill) => (
          <div key={skill} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-accent/30 hover:bg-white/10">
            {skill}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
