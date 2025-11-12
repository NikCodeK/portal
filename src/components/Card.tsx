import type { ComponentType } from 'react';
import { ArrowRight } from 'lucide-react';
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

const Card = ({ id, badge, title, description, icon }: CardContent) => {
  const Icon = iconMap[icon];
  const normalizedBadge = badge.toLowerCase();
  const highlightBadge = ['generelle information', 'information vor antrag', 'information nach bescheid'].some(
    (phrase) => normalizedBadge.includes(phrase),
  );
  const detailHref = `#/info/${encodeURIComponent(id)}`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand/10 bg-card shadow-panel transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="bg-gradient-to-br from-brand-dark via-brand to-brand-light px-6 py-6 text-white">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
          <Icon className="h-8 w-8" aria-hidden />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span
          className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
            highlightBadge ? 'bg-btn-primary/10 text-btn-primary' : 'bg-brand/15 text-brand'
          }`}
        >
          {badge}
        </span>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold leading-snug text-text-primary sm:text-xl break-words">{title}</h3>
          <p className="text-sm leading-relaxed text-text-muted sm:text-base break-words">{description}</p>
        </div>
        <div className="mt-auto pt-2">
          <a
            href={detailHref}
            className="inline-flex items-center gap-2 rounded-full border border-transparent bg-btn-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-btn-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
          >
            Mehr Informationen
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Card;
