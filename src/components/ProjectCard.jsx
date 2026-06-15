import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Badge from './Badge.jsx';

export default function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 shadow-soft"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-400/5 opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative p-6 sm:p-8">
        <div className="mb-5 overflow-hidden rounded-3xl bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          {project.featured && <Badge className="bg-slate-800 text-slate-100 border-white/10">Featured</Badge>}
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-white/20 hover:bg-white/10"
          >
            Demo
            <ExternalLink size={16} />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-white/20 hover:bg-white/10"
          >
            Code
            <Github size={16} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
