type HeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

const Hero = ({ eyebrow, title, description }: HeroProps) => {
  return (
    <section className="rounded-2xl bg-card px-6 py-8 text-left shadow-panel sm:px-8 md:px-12 md:py-10">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="space-y-4">
          {eyebrow ? (
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-text-muted">
              {eyebrow}
            </span>
          ) : null}
          <p className="text-3xl font-semibold leading-tight text-brand md:text-5xl">
            {title}
          </p>
          {description ? (
            <p className="max-w-3xl text-lg leading-relaxed text-text-muted">
              {description}
            </p>
          ) : null}
        </div>
        <img
          src="/images/logo.svg"
          alt="Kundenportal Logo"
          className="h-8 w-auto flex-shrink-0 sm:h-10"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
