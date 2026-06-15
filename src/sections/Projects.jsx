import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles } from 'lucide-react';
import SectionTitle from '../components/SectionTitle.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import projects from '../data/projects.js';

const filterOptions = ['All', 'Frontend', 'Backend', 'AI/ML', 'Full Stack', 'Other'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="mt-20">
      <SectionTitle icon={<Sparkles size={20} />} title="Featured work" subtitle="Selected projects" />
      <p className="max-w-2xl text-slate-400">Projects are the fastest way to understand how I solve problems, shape products, and deliver quality for real users.</p>

      <div className="mt-8 flex flex-wrap gap-3">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => setFilter(option)}
            className={`rounded-full border px-4 py-2 text-sm transition ${filter === option ? 'border-accent bg-accent/10 text-white' : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10'}`}
          >
            {option}
          </button>
        ))}
      </div>

      <motion.div className="mt-10 grid gap-8 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
