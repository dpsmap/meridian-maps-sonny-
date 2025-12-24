import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-border/50 p-1 bg-secondary/50">
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          "flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium transition-all",
          language === 'en'
            ? "bg-background shadow-sm text-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Switch to English"
      >
        <span className="text-base leading-none">🇬🇧</span>
        <span className="hidden sm:inline">EN</span>
      </button>
      <button
        onClick={() => setLanguage('my')}
        className={cn(
          "flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium transition-all",
          language === 'my'
            ? "bg-background shadow-sm text-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Switch to Myanmar"
      >
        <span className="text-base leading-none">🇲🇲</span>
        <span className="hidden sm:inline">MY</span>
      </button>
    </div>
  );
}
