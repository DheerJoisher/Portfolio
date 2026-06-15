import SectionTitle from '../components/SectionTitle.jsx';

export default function About() {
  return (
    <section id="about" className="mt-20 rounded-[2.5rem] border border-white/10 bg-slate-950/90 p-10 shadow-soft">
      <SectionTitle icon={<span>📖</span>} title="About me" subtitle="My story" />
      <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
        <div className="space-y-6 text-slate-300">
          <p>
            I’m a software engineer building applications with an emphasis on clarity, polished interactions, and long-term maintainability. My work is shaped by a product-first mindset: I ask who will use it, why it matters, and how the experience can feel effortless.
          </p>
          <p>
            I enjoy bringing order to complex problems by connecting user intent with clean frontend systems and thoughtful architecture. I contribute to open-source workflows and maintain a public GitHub profile with 14 repositories, including collaboration tools and utility experiences.
          </p>
          <p>
            Today, I’m focused on building scalable web experiences, improving development workflows, and learning modern AI/ML integration patterns that make products smarter, faster, and more human.
          </p>
        </div>
        <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/80 p-8">
          <div className="grid gap-4 text-slate-300">
            <div className="rounded-3xl bg-white/5 p-6">
              <p className="text-2xl font-semibold text-white">Leadership across campus</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">Multiple coordination roles in debate, entrepreneurship, design, and events that sharpen planning, execution, and communication.</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-6">
              <p className="text-2xl font-semibold text-white">Built for product impact</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">I’m motivated by building software that feels premium, solves real problems, and gives teams confidence in delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
