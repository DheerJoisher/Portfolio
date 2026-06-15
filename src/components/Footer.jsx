import { ArrowUp } from 'lucide-react';
import socialLinks from '../data/socialLinks.js';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-slate-400">© 2026 Dheer Joisher. Crafted for modern teams and product-first engineering.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a href="#top" className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">
            <ArrowUp size={16} /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
