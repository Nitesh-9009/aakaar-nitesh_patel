export default function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden border-y border-line/60 py-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-serif text-2xl italic text-faint sm:text-3xl"
          >
            {item}
            <span className="text-gold" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
