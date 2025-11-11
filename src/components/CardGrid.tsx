import type { CardContent } from '../data/content';
import Card from './Card';

type CardGridProps = {
  cards: CardContent[];
};

const CardGrid = ({ cards }: CardGridProps) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;
