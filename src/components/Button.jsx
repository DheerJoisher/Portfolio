export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-accent/50';
  const variants = {
    primary: 'bg-accent text-white shadow-soft hover:bg-violet-500',
    secondary: 'border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10',
    ghost: 'text-slate-100/90 hover:text-white',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
