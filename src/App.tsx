import { useEffect, useMemo, useRef, useState } from 'react';
import Hero from './components/Hero';
import Section from './components/Section';
import ProcessSteps from './components/ProcessSteps';
import Tabs from './components/Tabs';
import Accordion from './components/Accordion';
import InfoDetail from './components/InfoDetail';
import type { CardContent, TabContent } from './data/content';
import {
  heroContent,
  processIntro,
  processSteps,
  tabsData,
  tabsDescription,
  faqItems,
} from './data/content';

type AugmentedCard = CardContent & { tabLabel: string };

type ListState = {
  activeTabId: TabContent['id'];
  query: string;
  scrollY: number;
};

const defaultListState: ListState = {
  activeTabId: tabsData[0]?.id ?? 'allgemein',
  query: '',
  scrollY: 0,
};

const App = () => {
  const [route, setRoute] = useState<string>(window.location.hash || '#/');
  const [listState, setListState] = useState<ListState>(defaultListState);
  const scrollRestoredRef = useRef(false);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    try {
      const stored = window.sessionStorage.getItem('portal:listState');
      if (stored) {
        const parsed = JSON.parse(stored);
        setListState((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const persistListState = (state: ListState) => {
    try {
      window.sessionStorage.setItem('portal:listState', JSON.stringify(state));
    } catch {
      // ignore storage errors
    }
  };

  const updateListState = (partial: Partial<ListState>) => {
    setListState((prev) => {
      const next = { ...prev, ...partial };
      persistListState(next);
      return next;
    });
  };

  const allCards = useMemo<AugmentedCard[]>(
    () =>
      tabsData.flatMap((tab) =>
        tab.cards.map((card) => ({
          ...card,
          tabLabel: tab.label,
        })),
      ),
    [],
  );

  const detailMatch = route.match(/^#\/info\/(.+)/);
  const activeCardId = detailMatch ? decodeURIComponent(detailMatch[1]) : null;
  const activeCard = activeCardId ? allCards.find((card) => card.id === activeCardId) : null;

  useEffect(() => {
    if (!activeCard) {
      window.requestAnimationFrame(() => {
        if (!scrollRestoredRef.current) {
          window.scrollTo(0, listState.scrollY ?? 0);
          scrollRestoredRef.current = true;
        }
      });
    } else {
      scrollRestoredRef.current = false;
    }
  }, [activeCard, listState.scrollY]);

  const handleBack = () => {
    window.location.hash = '#/';
  };

  const handleNavigateToDetail = (cardId: string) => {
    const stateToPersist = { ...listState, scrollY: window.scrollY };
    persistListState(stateToPersist);
    window.location.hash = `#/info/${encodeURIComponent(cardId)}`;
  };

  const renderMain = () => (
    <>
      <Hero {...heroContent} />

      <Section
        title="Das Antragsverfahren im Überblick"
        intro={processIntro}
        className="rounded-2xl bg-card p-6 shadow-panel md:p-10 lg:p-12"
        showAccent={false}
      >
        <ProcessSteps steps={processSteps} />
      </Section>

      <Section
        title="Informationsmaterial"
        intro={tabsDescription}
        className="rounded-2xl bg-card p-6 shadow-panel md:p-10 lg:p-12"
        showAccent={false}
      >
        <Tabs
          key={`${listState.activeTabId}-${listState.query}`}
          tabs={tabsData}
          initialTab={listState.activeTabId}
          initialQuery={listState.query}
          onStateChange={({ activeTabId, query }) => updateListState({ activeTabId, query })}
          onNavigateToDetail={handleNavigateToDetail}
        />
      </Section>

      <Section
        title="Häufig gestellte Fragen"
        className="rounded-2xl bg-card p-6 shadow-panel md:p-10 lg:p-12"
        showAccent={false}
      >
        <Accordion items={faqItems} />
      </Section>
    </>
  );

  const renderDetail = () => {
    if (!activeCard) return null;

    return <InfoDetail card={activeCard} category={activeCard.tabLabel} onBack={handleBack} />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-soft via-white to-bg-subtle text-text-primary">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-12 px-4 pb-16 pt-12 sm:px-8 md:px-12 lg:gap-16">
        {activeCard ? renderDetail() : renderMain()}
      </div>
    </div>
  );
};

export default App;
