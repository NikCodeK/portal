import { ArrowLeft, ExternalLink } from 'lucide-react';
import type { CardContent } from '../data/content';

type InfoDetailProps = {
  card: CardContent;
  category?: string;
  onBack: () => void;
};

const normalizeDetailBlocks = (raw: string) => {
  const normalized = raw
    .replace(/\r\n/g, '\n')
    .replace(/●|•|▪|▫|‣|/g, '- ')
    .replace(/\t+/g, ' ')
    .replace(/ {2,}/g, ' ')
    .trim();

  return normalized
    .split(/\n{2,}/)
    .flatMap((block) => {
      const trimmed = block.trim();
      if (!trimmed) return [];
      const stepMatches = trimmed.match(/Schritt\s+\d+\./gi);
      if (stepMatches && stepMatches.length > 1) {
        return trimmed
          .split(/(?=Schritt\s+\d+\.)/i)
          .map((part) => part.trim())
          .filter(Boolean);
      }
      return [trimmed];
    })
    .filter(Boolean);
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

      {card.detailContent ? (
        <article className="space-y-4 rounded-2xl border border-brand/15 bg-brand-soft/40 p-6 text-text-primary">
          {normalizeDetailBlocks(card.detailContent).map((block, index) => {
            const lines = block
              .split(/\n/)
              .map((line) => line.trim())
              .filter(Boolean);

            const isOrdered = lines.every((line) => /^\d+[\.)]\s+/.test(line));
            const isUnordered = lines.every((line) => /^[-*]\s+/.test(line));
            const stepHeading = lines[0]?.match(/^Schritt\s+\d+\./i);
            const markdownHeading = lines[0]?.match(/^(#{1,6})\s+(.*)$/);

            if (isOrdered) {
              return (
                <ol key={index} className="list-decimal space-y-1 pl-5 text-sm leading-relaxed sm:text-base">
                  {lines.map((line, idx) => (
                    <li key={idx}>{line.replace(/^\d+[\.)]\s+/, '')}</li>
                  ))}
                </ol>
              );
            }

            if (isUnordered) {
              return (
                <ul key={index} className="list-disc space-y-1 pl-5 text-sm leading-relaxed sm:text-base">
                  {lines.map((line, idx) => (
                    <li key={idx}>{line.replace(/^[-*]\s+/, '')}</li>
                  ))}
                </ul>
              );
            }

            if (markdownHeading) {
              const depth = Math.min(markdownHeading[1].length + 1, 6);
              const text = markdownHeading[2];
              if (depth <= 2) {
                return (
                  <h2 key={index} className="text-2xl font-semibold text-black sm:text-3xl">
                    {text}
                  </h2>
                );
              }
              if (depth === 3) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-black sm:text-2xl">
                    {text}
                  </h3>
                );
              }
              if (depth === 4) {
                return (
                  <h4 key={index} className="text-lg font-semibold text-black">
                    {text}
                  </h4>
                );
              }
              return (
                <p key={index} className="text-sm font-semibold uppercase tracking-wide text-text-primary">
                  {text}
                </p>
              );
            }

            if (stepHeading) {
              return (
                <div key={index} className="space-y-1 rounded-xl border border-brand/20 bg-white/70 p-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-btn-primary sm:text-base">
                    {stepHeading[0]}
                  </p>
                  <p className="text-sm leading-relaxed text-text-primary sm:text-base">
                    {lines.slice(1).join(' ').replace(/\s{2,}/g, ' ')}
                  </p>
                </div>
              );
            }

            const paragraph = lines.join(' ').replace(/\s{2,}/g, ' ');
            return (
              <p key={index} className="text-sm leading-relaxed sm:text-base">
                {paragraph}
              </p>
            );
          })}
        </article>
      ) : null}

      {card.href ? (
        <a
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-5 py-2 text-sm font-semibold text-brand transition hover:bg-brand/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
        >
          Originaldokument ansehen
          <ExternalLink className="h-4 w-4" aria-hidden />
        </a>
      ) : null}
    </section>
  );
};

export default InfoDetail;
