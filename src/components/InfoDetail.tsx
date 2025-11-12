import { ArrowLeft, ExternalLink } from 'lucide-react';
import type { CardContent } from '../data/content';

type InfoDetailProps = {
  card: CardContent;
  category?: string;
  onBack: () => void;
};

const InfoDetail = ({ card, category, onBack }: InfoDetailProps) => {
  return (
    <section className="space-y-6 rounded-3xl border border-brand/10 bg-card p-6 shadow-panel md:p-10 lg:p-16">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Zurück
      </button>

      <div className="space-y-4">
        {category ? (
          <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand">
            {category}
          </span>
        ) : null}
        <span className="inline-flex items-center rounded-full bg-btn-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-btn-primary">
          {card.badge}
        </span>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-black sm:text-4xl">{card.title}</h1>
          <p className="text-base leading-relaxed text-text-muted sm:text-lg">{card.description}</p>
        </div>
      </div>

      {card.href ? (
        <a
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-5 py-2 text-sm font-semibold text-brand transition hover:bg-brand/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
        >
          Dokument öffnen
          <ExternalLink className="h-4 w-4" aria-hidden />
        </a>
      ) : null}
    </section>
  );
};

export default InfoDetail;
