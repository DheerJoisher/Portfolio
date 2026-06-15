import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import navLinks from '../data/navLinks.js';

const sections = navLinks;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const currentSection = sections.reduce((closest, section) => {
        const element = document.getElementById(section.href.slice(1));
        if (!element) return closest;
        const offset = Math.abs(window.scrollY - element.offsetTop + 120);
        return offset < closest.offset ? { id: section.href.slice(1), offset } : closest;
      }, { id: active, offset: Infinity });
      setActive(currentSection.id);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [active]);

  const handleLink = (id) => {
    setOpen(false);
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 mx-auto w-full backdrop-blur-xl transition duration-500 ${scrolled ? 'border-b border-white/10 bg-slate-900/80' : 'bg-transparent'}`}
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <button className="text-left text-sm font-semibold uppercase tracking-[0.28em] text-slate-200/80">
          DJ
        </button>
        <nav className="hidden items-center gap-8 md:flex">
          {sections.map((item) => (
            <button
              key={item.href}
              onClick={() => handleLink(item.href.slice(1))}
              className={`text-sm transition ${active === item.href.slice(1) ? 'text-white' : 'text-slate-400 hover:text-white'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLink('contact');
            }}
            className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-white/20 hover:bg-white/10 md:inline-flex"
          >
            Contact
          </a>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-white/20 hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          className="border-t border-white/10 bg-slate-950/95 md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex flex-col gap-2 px-6 py-4">
            {sections.map((item) => (
              <button
                key={item.href}
                onClick={() => handleLink(item.href.slice(1))}
                className={`text-left text-sm transition ${active === item.href.slice(1) ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleLink('contact'); }}
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-white/20 hover:bg-white/10"
            >
              Contact
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
