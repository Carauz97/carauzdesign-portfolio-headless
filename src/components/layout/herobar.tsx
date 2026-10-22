import Link from "next/link";

type HeroBarProps = {
  title: string;
};

export default function HeroBar({ title }: HeroBarProps) {
  return (
    <header>
      <section className="-mt-100px relative isolate overflow-hidden bg-[--color-background] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10
      bg-[radial-gradient(ellipse_90%_60%_at_50%_95%,rgb(245_136_0/0.22),transparent_70%)]"
        />

        <div className=" grid-lines flex flex-col justify-center items-center p-6 min-h-50">
          <h1 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {title}
          </h1>

          <nav aria-label="Breadcrumb" className=" text-sm">
            <ol className="flex items-center gap-2 text-muted">
              <li>
                <Link href="/" className="transition-colors hover:text-accent">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">
                {title}
              </li>
            </ol>
          </nav>
        </div>
      </section>
    </header>
  );
}
