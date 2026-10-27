// components/portfolio/ProjectCase.tsx
import Image from "next/image";
import type { Project } from "@/data/projects";
import { btnPrimary, chip, panel } from "@/lib/styles";

// Textos de la interfaz: cámbialos aquí si algún día traduces la página
const labels = {
  overview: "Overview",
  features: "Key Features",
  stack: "Tech Stack",
  role: "My Role",
  type: "Project Type",
  visit: "Visit Live Project",
};

const sectionTitle =
  "text-sm font-semibold uppercase tracking-wider text-accent";

type Props = { project: Project };

export default function ProjectCase({ project }: Props) {
  const {
    id,
    title,
    category,
    url,
    images,
    overview,
    features,
    stack,
    role,
    type,
  } = project;

  return (
    <article aria-labelledby={`project-${id}`} className={` overflow-hidden`}>
      <header className=" flex flex-col gap-4  p-6 md:flex-row md:items-start md:justify-between md:p-8">
        <div>
          <span
            style={{ color: "var(--color-primary)" }}
            className="font-mono text-4xl text-accent"
          >
            {id}
          </span>
          <h2
            id={`project-${id}`}
            className="mt-1 text-2xl font-bold tracking-tight text-foreground md:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-2 text-sm text-muted">{category}</p>
        </div>

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnPrimary} shrink-0`}
          >
            {labels.visit} <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {images &&
          images.length > 0 &&
          images?.map((im, k) => {
            return (
              <Image
                key={k}
                src={im.src}
                alt={im.alt}
                width={1600}
                height={900}
                sizes="(min-width: 896px) 896px, 100vw"
                className="h-auto w-full  rounded-2xl"
              />
            );
          })}
      </div>

      {/* narrativa a la izquierda, ficha técnica a la derecha */}
      <div className="grid gap-8 p-6 md:grid-cols-[1fr_17rem] md:p-8">
        <div className="@container min-w-0 space-y-8">
          <section>
            <h3 className={sectionTitle}>{labels.overview}</h3>
            <p className="mt-3 leading-relaxed text-muted">{overview}</p>
          </section>

          <section>
            <h3 className={sectionTitle}>{labels.features}</h3>
            <ul className="mt-4 grid gap-3 @md:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature.title}
                  className="rounded-lg border border-border bg-background p-4 transition-colors hover:border-accent"
                >
                  <p className="font-semibold text-foreground">
                    {feature.title}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-6 md:border-l md:border-border md:pl-6">
          <section>
            <h3 className={sectionTitle}>{labels.stack}</h3>
            <div className="mt-3 space-y-4">
              {stack.map((group) => (
                <div key={group.label}>
                  <p className="text-xs text-muted">{group.label}</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className={chip}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className={sectionTitle}>{labels.role}</h3>
            <p className="mt-3 font-medium text-foreground">{role.title}</p>
            <p className="mt-1 text-sm text-muted">{role.description}</p>
          </section>

          <section>
            <h3 className={sectionTitle}>{labels.type}</h3>
            <p className="mt-3 text-sm text-muted">{type}</p>
          </section>
        </aside>
      </div>
    </article>
  );
}
