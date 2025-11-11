import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '../data/content';

type AccordionProps = {
  items: FaqItem[];
};

const Accordion = ({ items }: AccordionProps) => {
  const [openItem, setOpenItem] = useState<string | null>(items[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = item.id === openItem;
        return (
          <div key={item.id} className="rounded-2xl border border-brand/10 bg-white/95 shadow-panel backdrop-blur">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-brand-soft"
            >
              <span className="text-lg font-semibold text-text-primary">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden
              />
            </button>
            {isOpen ? (
              <div className="px-6 pb-6 text-base leading-relaxed text-text-muted">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
