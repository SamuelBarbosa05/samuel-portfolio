function App() {
  const projects = [
  {
    name: "TaskFlow Dashboard",
    description:
      "Aplicação estilo Kanban com drag and drop, modo escuro, prioridades, busca e persistência local.",
    stack: ["React", "Vite", "Tailwind", "dnd-kit"],
    demo: "https://taskflow-dashboard-two.vercel.app/",
    github: "https://github.com/SamuelBarbosa05",
  },
  {
    name: "WeatherNow Dashboard",
    description:
      "Aplicação de clima com consumo de API REST, histórico de buscas, loading, tratamento de erros e dark mode.",
    stack: ["React", "Vite", "Tailwind", "API REST"],
    demo: "https://weathernow-dashboard.vercel.app/",
    github: "https://github.com/SamuelBarbosa05",
  },
];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-10">
        <nav className="mb-20 flex items-center justify-between">
          <h1 className="text-xl font-bold">Samuel Barbosa Chaves Brandão</h1>

          <div className="flex gap-4 text-sm text-slate-300">
            <a href="#projects" className="hover:text-white">
              Projetos
            </a>
            <a href="#about" className="hover:text-white">
              Sobre
            </a>
            <a href="#contact" className="hover:text-white">
              Contato
            </a>
          </div>
        </nav>

        <header className="mb-24 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-4 inline-block rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-300">
              Desenvolvedor Frontend | React | JavaScript | APIs | Interfaces modernas
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-6xl">
              Criando interfaces modernas com React e JavaScript.
            </h2>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
              Sou estudante de Engenharia de Software, focado em desenvolvimento
              frontend, construção de aplicações responsivas, consumo de APIs e
              experiências digitais com boa usabilidade.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/SamuelBarbosa05"
                target="_blank"
                className="rounded-2xl bg-sky-500 px-6 py-3 font-medium text-white transition hover:bg-sky-600"
              >
                Ver GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/samuel-barbosa-1a5732380/"
                target="_blank"
                className="rounded-2xl border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:bg-slate-900"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
            <h3 className="mb-4 text-xl font-semibold">Stack principal</h3>

            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "APIs REST",
                "Git",
                "GitHub",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </header>

        <section id="projects" className="mb-24">
          <div className="mb-10">
            <p className="mb-2 text-sm font-medium text-sky-400">
              Portfólio
            </p>
            <h2 className="text-3xl font-bold">Projetos em destaque</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-sky-500/50"
              >
                <h3 className="mb-2 text-xl font-semibold">{project.name}</h3>

<p className="mb-2 text-xs text-sky-400">
  Projeto em produção
</p>

                <p className="mb-5 text-sm leading-6 text-slate-300">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-600"
                  >
                    Ver projeto
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800"
                  >
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="mb-24 rounded-3xl border border-slate-800 bg-slate-900 p-8"
        >
          <p className="mb-2 text-sm font-medium text-sky-400">Sobre mim</p>

          <h2 className="mb-4 text-3xl font-bold">
            Estudante de Engenharia de Software com foco em frontend.
          </h2>

          <p className="max-w-4xl leading-8 text-slate-300">
            Tenho desenvolvido projetos práticos utilizando React, JavaScript e
            Tailwind CSS, com foco em interfaces responsivas, consumo de APIs,
            organização de código e experiência do usuário. Busco minha primeira
            oportunidade de estágio para evoluir tecnicamente e contribuir com
            soluções reais.
          </p>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-sky-500/30 bg-sky-500/10 p-8 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold">Vamos conversar?</h2>

          <p className="mb-6 text-slate-300">
            Estou disponível para oportunidades de estágio em desenvolvimento
            frontend.
          </p>

          <a
            href="mailto:samuelbarbosa050508@gmail.com"
            className="inline-block rounded-2xl bg-sky-500 px-6 py-3 font-medium text-white transition hover:bg-sky-600"
          >
            Entrar em contato
          </a>
        </section>
      </section>
    </main>
  );
}

export default App;