interface MarqueeProps {
  items: string[];
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
  separator?: string;
}

export function Marquee({ items, className = '', speed = 'normal', separator = '·' }: MarqueeProps) {
  const speedClass = speed === 'fast' ? 'marquee-fast' : speed === 'slow' ? 'marquee-slow' : '';
  const block = (
    <div className="marquee-track flex shrink-0 items-center gap-12 pr-12">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-12 whitespace-nowrap text-sm font-medium uppercase tracking-[0.18em]">
          {item}
          <span className="text-current/40">{separator}</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`marquee-track ${speedClass}`} aria-hidden>
        {block}
        {block}
      </div>
    </div>
  );
}
