export default function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden border-y border-line py-7 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-sm font-medium uppercase tracking-[0.22em] text-faint"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
