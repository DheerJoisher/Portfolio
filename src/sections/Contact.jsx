import { Mail, Phone, Github, Linkedin, ArrowRight } from 'lucide-react';
import socialLinks from '../data/socialLinks.js';

export default function Contact() {
  return (
    <section id="contact" className="mt-20 rounded-[2.5rem] border border-white/10 bg-slate-950/95 p-10 shadow-soft">
      <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Let’s build together</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Reach out for product-led engineering, strong design systems, and reliable delivery.</h2>
          <p className="mt-6 text-base leading-8 text-slate-300">I’m available for internships, collaborations, and roles that value thoughtful software craftsmanship and a polished developer experience.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {socialLinks.map((item) => {
              const icon =
                item.label === 'Email'
                  ? <Mail size={18} />
                  : item.label === 'Phone'
                  ? <Phone size={18} />
                  : item.label === 'GitHub'
                  ? <Github size={18} />
                  : <Linkedin size={18} />;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-900/80 p-5 text-sm text-slate-200 transition hover:border-accent/30 hover:bg-white/5"
                >
                  <span className="rounded-full bg-white/5 p-3 text-cyan-300">
                    {icon}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{item.label}</p>
                    <p className="text-xs text-slate-400">{item.label === 'GitHub' || item.label === 'LinkedIn' ? item.href : item.href.replace(/^mailto:|^tel:/, '')}</p>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-slate-400 transition group-hover:text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
