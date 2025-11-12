import { useEffect, useMemo, useState } from 'react';
import type { CardContent, TabContent } from '../data/content';
import SearchBar from './SearchBar';
import CardGrid from './CardGrid';
import EmptyState from './EmptyState';

type TabsProps = {
  tabs: TabContent[];
  initialTab?: TabContent['id'];
  initialQuery?: string;
  onStateChange?: (state: { activeTabId: TabContent['id']; query: string }) => void;
  onNavigateToDetail?: (cardId: string) => void;
};

type AugmentedCard = CardContent & { tabId: TabContent['id']; tabLabel: string };

const Tabs = ({ tabs, initialTab, initialQuery, onStateChange, onNavigateToDetail }: TabsProps) => {
  const defaultTab = initialTab ?? tabs[0]?.id ?? 'allgemein';
  const [activeTab, setActiveTab] = useState<TabContent['id']>(defaultTab);
  const [query, setQuery] = useState(initialQuery ?? '');

  useEffect(() => {
    setActiveTab(initialTab ?? tabs[0]?.id ?? 'allgemein');
  }, [initialTab, tabs]);

  useEffect(() => {
    setQuery(initialQuery ?? '');
  }, [initialQuery]);

  const activeContent = useMemo(
    () => tabs.find((tab) => tab.id === activeTab) ?? tabs[0],
    [activeTab, tabs],
  );

  const allCards = useMemo<AugmentedCard[]>(
    () =>
      tabs.flatMap((tab) =>
        tab.cards.map((card) => ({
          ...card,
          tabId: tab.id,
          tabLabel: tab.label,
        })),
      ),
    [tabs],
  );

  const filteredCards = useMemo(() => {
    if (!activeContent) return [];
    if (!query.trim()) return activeContent.cards;
    const normalizedQuery = query.toLowerCase();
    return allCards
      .filter(
        (card) =>
          card.title.toLowerCase().includes(normalizedQuery) ||
          card.description.toLowerCase().includes(normalizedQuery) ||
          card.badge.toLowerCase().includes(normalizedQuery),
      )
      .map<CardContent>(({ tabId, tabLabel, ...card }) => card);
  }, [activeContent, allCards, query]);

  const handleTabChange = (tabId: TabContent['id']) => {
    setActiveTab(tabId);
    onStateChange?.({ activeTabId: tabId, query });
  };

  const handleSearchChange = (value: string) => {
    setQuery(value);
    onStateChange?.({ activeTabId: activeTab, query: value });
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="flex w-full gap-6 overflow-x-auto border-b border-brand/10 pb-1">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => handleTabChange(tab.id)}
                className={`border-b-2 pb-3 text-sm font-semibold uppercase tracking-wide transition whitespace-nowrap ${
                  isActive ? 'text-btn-primary' : 'border-transparent text-text-muted hover:text-text-primary'
                }`}
                style={isActive ? { borderColor: '#F18511', color: '#F18511' } : undefined}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
      <SearchBar value={query} onChange={handleSearchChange} placeholder="Suchen" />
      {query.trim() ? (
        <p className="text-sm text-text-muted">
          Gefundene Dokumente über alle Kategorien: {filteredCards.length}
        </p>
      ) : null}
      {filteredCards.length > 0 ? (
        <CardGrid cards={filteredCards} onNavigate={onNavigateToDetail} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default Tabs;
