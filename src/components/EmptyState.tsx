import { Search } from 'lucide-react';

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-brand/30 bg-white/95 p-12 text-center shadow-panel">
      <div className="rounded-full bg-brand/10 p-4">
        <Search className="h-10 w-10 text-brand" aria-hidden />
      </div>
      <div>
        <p className="text-lg font-semibold text-brand-dark">No results found</p>
        <p className="text-sm text-text-muted">Try adjusting your search and filters.</p>
      </div>
    </div>
  );
};

export default EmptyState;
