type HeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

const Hero = ({ eyebrow, title, description }: HeroProps) => {
  return (
    <section className="rounded-3xl border border-brand/15 bg-gradient-to-br from-brand-soft via-card to-white px-6 py-8 text-left shadow-panel sm:px-8 md:px-12 md:py-10">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="space-y-4">
          {eyebrow ? (
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-text-muted">
              {eyebrow}
            </span>
          ) : null}
          <p className="text-3xl font-semibold leading-tight text-black md:text-5xl">
            {title}
          </p>
          {description ? (
            <p className="max-w-3xl text-lg leading-relaxed text-text-muted">
              {description}
            </p>
          ) : null}
        </div>
        <img
          src="/images/cleverfunding_logo_rgb.jpg"
          alt="CleverFunding Logo"
          className="h-14 w-auto flex-shrink-0 rounded-xl border border-white/50 bg-white/60 px-4 py-3 shadow-lg backdrop-blur-md sm:h-16 md:h-20"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
