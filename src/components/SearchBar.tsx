import type { ChangeEvent } from 'react';
import { Search } from 'lucide-react';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const SearchBar = ({ value, onChange, placeholder = 'Suchen' }: SearchBarProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="relative">
      <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" aria-hidden />
      <input
        type="search"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full rounded-full border border-border/70 bg-white py-4 pl-14 pr-6 text-sm text-text-primary shadow-panel outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 sm:text-base"
      />
    </div>
  );
};

export default SearchBar;
