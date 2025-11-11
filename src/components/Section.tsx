import type { ReactNode } from 'react';
import clsx from 'clsx';

type SectionProps = {
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  accentClassName?: string;
};

const Section = ({
  title,
  intro,
  children,
  className,
  titleClassName,
  accentClassName,
}: SectionProps) => {
  return (
    <section className={clsx('space-y-6', className)}>
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className={clsx('text-4xl font-semibold md:text-5xl', titleClassName ?? 'text-brand')}>
            {title}
          </h2>
          <div className={clsx('h-1 w-16 rounded-full', accentClassName ?? 'bg-brand')} />
        </div>
        {intro ? (
          <p className="text-lg leading-relaxed text-text-muted">{intro}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
};

export default Section;
