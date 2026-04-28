function App() {
  const projects = [
    {
      name: "Match Dashboard CRM",
      description:
        "Dashboard CRM moderno para gestão de leads, tarefas e métricas comerciais, simulando uma aplicação SaaS real.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "React Query"],
      demo: "#",
      github: "https://github.com/SamuelBarbosa05/match-dashboard-crm",
      highlights: [
        "Dashboard responsivo",
        "Busca e filtros",
        "Componentização",
        "Integração com API",
      ],
    },
    {
      name: "TaskFlow Dashboard",
      description:
        "Aplicação estilo Kanban com drag and drop, modo escuro, prioridades, busca e persistência local.",
      stack: ["React", "Vite", "Tailwind CSS", "dnd-kit"],
      demo: "https://taskflow-dashboard-two.vercel.app/",
      github: "https://github.com/SamuelBarbosa05",
      highlights: [
        "Drag and drop",
        "Dark mode",
        "Persistência local",
        "Layout responsivo",
      ],
    },
    {
      name: "WeatherNow Dashboard",
      description:
        "Aplicação de clima com consumo de API REST, histórico de buscas, loading e tratamento de erros.",
      stack: ["React", "Vite", "Tailwind CSS", "API REST"],
      demo: "https://weathernow-dashboard.vercel.app/",
      github: "https://github.com/SamuelBarbosa05",
      highlights: [
        "Consumo de API",
        "Tratamento de erros",
        "Histórico de buscas",
        "Responsividade",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-10">
        <nav className="mb-20 flex items-center justify-between">
          <h1 className="text-xl font-bold">Samuel Barbosa</h1>

          <div className="flex gap-4 text-sm text-slate-300">
            <a href="#projects" className="hover:text-white">Projetos</a>
            <a href="#about" className="hover:text-white">Sobre</a>
            <a href="#contact" className="hover:text-white">Contato</a>
          </div>
        </nav>

        <header className="mb-24 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-4 inline-block rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-300">
              Front-End Developer | React | JavaScript | TypeScript | APIs
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-6xl">
              Construindo interfaces modernas e experiências digitais.
            </h2>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
              Desenvolvedor Front-End em formação, focado na criação de aplicações
              responsivas, consumo de APIs REST e interfaces modernas com alta
              qualidade visual e boa experiência do usuário.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/SamuelBarbosa05"
                target="_blank"
                className="rounded-2xl bg-sky-500 px-6 py-3 font-medium hover:bg-sky-600"
              >
                Ver GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/samuel-barbosa-1a5732380/"
                target="_blank"
                className="rounded-2xl border border-slate-700 px-6 py-3 font-medium hover:bg-slate-900"
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
                "Next.js",
                "JavaScript",
                "TypeScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "REST API",
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
          <p className="mb-2 text-sm font-medium text-sky-400">Portfólio</p>
          <h2 className="mb-10 text-3xl font-bold">Projetos em destaque</h2>

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

                <p className="mb-4 text-sm leading-6 text-slate-300">
                  {project.description}
                </p>

                <ul className="mb-5 space-y-2 text-sm text-slate-400">
                  {project.highlights.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>

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
                    className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium hover:bg-sky-600"
                  >
                    Ver projeto
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-800"
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
            Desenvolvedor Front-End em evolução constante.
          </h2>

          <p className="max-w-4xl leading-8 text-slate-300">
            Tenho desenvolvido projetos práticos com React, JavaScript,
            TypeScript e Tailwind CSS, focando em interfaces responsivas,
            componentização, consumo de APIs REST e experiência do usuário.
            Busco minha primeira oportunidade para contribuir com produtos reais
            e crescer tecnicamente.
          </p>
        </section>
      </section>
    </main>
  );
}

export default App;