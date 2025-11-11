import type { ComponentType, MouseEvent } from 'react';
import { Download } from 'lucide-react';
import { type CardContent, type CardIconName } from '../data/content';
import {
  Award,
  Building2,
  CalendarClock,
  ClipboardCheck,
  FileText,
  Lightbulb,
  ListChecks,
  PenSquare,
  PieChart,
  Users,
  Workflow,
} from 'lucide-react';

const iconMap: Record<CardIconName, ComponentType<{ className?: string }>> = {
  Building2,
  Users,
  ClipboardCheck,
  Lightbulb,
  ListChecks,
  PieChart,
  PenSquare,
  Workflow,
  FileText,
  CalendarClock,
  Award,
};

const Card = ({ badge, title, description, icon, href }: CardContent) => {
  const Icon = iconMap[icon];

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-panel transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="bg-gradient-to-br from-brand via-[#f8a948] to-[#fbd39b] px-6 py-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur">
          <Icon className="h-8 w-8" aria-hidden />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="inline-flex w-fit items-center rounded-full bg-bg-subtle px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-text-muted">
          {badge}
        </span>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold leading-snug text-text-primary sm:text-xl break-words">{title}</h3>
          <p className="text-sm leading-relaxed text-text-muted sm:text-base break-words">{description}</p>
        </div>
        <div className="mt-auto pt-2">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-transparent bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download
            </a>
          ) : (
            <button
              type="button"
              onClick={handleClick}
              className="inline-flex items-center gap-2 rounded-full border border-transparent bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;
