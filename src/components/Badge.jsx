export default function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-200/80 ${className}`}>
      {children}
    </span>
  );
}
