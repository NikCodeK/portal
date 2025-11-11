import type { ReactNode } from 'react';
import clsx from 'clsx';

type SectionProps = {
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

const Section = ({ title, intro, children, className }: SectionProps) => {
  return (
    <section className={clsx('space-y-6', className)}>
      <div className="space-y-4">
        <h2 className="text-4xl font-semibold text-text-primary md:text-5xl">
          {title}
        </h2>
        {intro ? (
          <p className="text-lg leading-relaxed text-text-muted">{intro}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
};

export default Section;
