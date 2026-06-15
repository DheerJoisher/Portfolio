import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import heroData from '../data/heroData.js';
import socialLinks from '../data/socialLinks.js';
import Button from '../components/Button.jsx';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-slate-950/80 px-6 py-16 shadow-soft sm:px-10 lg:px-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.12),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.1),_transparent_28%)] opacity-90" />
      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/70">Hi, I’m {heroData.name}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {heroData.role} who builds beautiful digital products.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {heroData.headline}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {heroData.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${cta.variant === 'primary' ? 'bg-accent text-white shadow-soft hover:bg-violet-500' : 'border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10'}`}
              >
                {cta.label}
                {cta.variant === 'primary' && <ArrowRight size={16} />}
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
            <a href={heroData.resume.href} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-white/20 hover:bg-white/10">
              <Download size={16} /> {heroData.resume.label}
            </a>
            {socialLinks.slice(0, 2).map((item) => (
              <a key={item.label} href={item.href} className="text-slate-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute right-0 top-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/90 p-6 shadow-soft">
            <div className="flex h-full flex-col justify-between gap-6 rounded-[2rem] bg-slate-950 p-6">
              <div className="rounded-[1.75rem] border border-white/5 bg-white/5 p-5">
                <div className="h-72 w-full rounded-[1.5rem] bg-slate-800" />
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Profile snapshot</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-300">Product-minded engineering</div>
                  <div className="rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-300">Clean frontend systems</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
