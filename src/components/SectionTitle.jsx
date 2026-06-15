import { motion } from 'framer-motion';

export default function SectionTitle({ icon, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="section-title mb-8 max-w-xl"
    >
      <span aria-hidden="true">{icon}</span>
      <div>
        <p className="text-xs uppercase tracking-[0.32em] text-slate-400">{subtitle}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      </div>
    </motion.div>
  );
}
