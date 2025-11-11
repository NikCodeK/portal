import { Inbox } from 'lucide-react';

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border bg-white p-12 text-center shadow-panel">
      <div className="rounded-full bg-bg-subtle p-4">
        <Inbox className="h-10 w-10 text-text-muted" aria-hidden />
      </div>
      <div>
        <p className="text-lg font-semibold text-text-primary">No results found</p>
        <p className="text-sm text-text-muted">Try adjusting your search and filters.</p>
      </div>
    </div>
  );
};

export default EmptyState;
