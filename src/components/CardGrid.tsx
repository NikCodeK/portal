import type { CardContent } from '../data/content';
import Card from './Card';

type CardGridProps = {
  cards: CardContent[];
  onNavigate?: (cardId: string) => void;
};

const CardGrid = ({ cards, onNavigate }: CardGridProps) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.id} {...card} onNavigate={onNavigate} />
      ))}
    </div>
  );
};

export default CardGrid;
