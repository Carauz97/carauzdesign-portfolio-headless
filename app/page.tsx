import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import PostGrid from "@/components/blog/PostGrid";

export const metadata: Metadata = {
  title: "Programación y diseño gráfico",
  description:
    "Blog de diseño gráfico y servicios freelance de desarrollo web, diseño y soluciones tecnológicas.",
};

type Service = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

const services: Service[] = [
  {
    id: "01",
    title: "Desarrollo web frontend",
    description:
      "Sitios y aplicaciones rápidas, accesibles y responsive con Next.js y React.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    id: "02",
    title: "Backend y APIs",
    description:
      "APIs, bases de datos y WordPress headless cuando tu proyecto necesita más que una página.",
    tags: ["Node.js", "MongoDB", "WordPress", "GraphQL"],
  },
  {
    id: "03",
    title: "Diseño gráfico",
    description:
      "Identidad visual, piezas para redes y material impreso con criterio y coherencia.",
    tags: ["Branding", "Logos", "Adobe CC"],
  },
  {
    id: "04",
    title: "Soluciones tecnológicas",
    description:
      "Migro sitios, automatizo procesos y resuelvo ese problema técnico que te está frenando.",
    tags: ["Migraciones", "Despliegue", "Automatización"],
  },
];

const snippet = `const freelancer = {
  frontend: "Next.js + React",
  backend: "Node + WordPress",
  diseño: "Branding + UI",
  disponible: true,
};`;

const contentWidth = "mx-auto w-full max-w-4xl";

const btn =
  "inline-flex items-center justify-center rounded-lg border px-6 py-2.5 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const btnPrimary = `${btn} border-border-button bg-primary text-background hover:bg-primary-hover active:bg-primary-active`;
const btnSecondary = `${btn} border-border-button-secondary bg-secondary text-background hover:bg-secondary-hover`;

const chip =
  "rounded-full border border-border bg-background px-3 py-1 text-xs text-muted";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="space-y-12 px-4 py-8">
        <div>
          <section className={`${contentWidth} overflow-hidden md:p-10`}>
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                  Problemas complejos.{" "}
                  <span className="text-accent">Soluciones sencillas.</span>
                </h1>

                <p className="mt-4 text-muted">
                  Escribo sobre diseño gráfico en mi blog y ayudo a negocios y
                  personas con desarrollo web, diseño y soluciones tecnológicas.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="#servicios" className={btnPrimary}>
                    Ver servicios
                  </Link>
                  <Link href="/blog" className={btnSecondary}>
                    Leer el blog
                  </Link>
                </div>
              </div>

              <div className="relative hidden h-72 md:block" aria-hidden="true">
                <div className="absolute left-0 top-0 w-[85%] -rotate-2 rounded-lg border border-border bg-background shadow-xl shadow-black/30">
                  <div className="flex gap-1.5 border-b border-border px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  </div>
                  <pre className="overflow-hidden p-4 font-mono text-xs leading-relaxed text-muted">
                    <code>{snippet}</code>
                  </pre>
                </div>

                <div className="absolute bottom-0 right-0 w-[65%] rotate-2 rounded-lg border border-border bg-foreground p-4 shadow-xl shadow-black/30">
                  <p className="text-5xl font-bold text-background">Aa</p>
                  <p className="text-xs text-background/60">
                    Tipografía y color
                  </p>
                  <div className="mt-3 flex gap-2">
                    <span className="h-7 w-7 rounded-full bg-background" />
                    <span className="h-7 w-7 rounded-full bg-accent" />
                    <span className="h-7 w-7 rounded-full bg-primary" />
                    <span className="h-7 w-7 rounded-full bg-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section id="servicios" className={`${contentWidth} z-1 scroll-mt-20`}>
          <h2 className="mb-6 text-2xl font-bold text-accent">Servicios</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.id}
                className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent"
              >
                <span className="font-mono text-sm text-accent">
                  {service.id}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{service.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className={chip}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BLOG */}
        <section className={contentWidth}>
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-accent">Del blog</h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              Ver todo el blog →
            </Link>
          </div>
          <PostGrid />
        </section>

        {/* CONTACTO */}
        <section
          className={`${contentWidth} rounded-xl border border-primary/40 bg-surface p-8 text-center shadow-lg shadow-black/20 md:p-10`}
        >
          <h2 className="text-2xl font-bold text-foreground">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mt-2 text-muted text-center">
            Cuéntame qué necesitas y te propongo una solución.
          </p>
          <Link
            href="https://linkedin.com/in/carauzarauz97"
            target="_blank"
            className={`${btnPrimary} mt-6`}
          >
            Contáctame
          </Link>
        </section>
      </main>
    </>
  );
}
