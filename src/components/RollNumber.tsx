/**
 * A figure whose digits roll up to their value once (Taste skill "rolling figures").
 * The real value stays in the text for screen readers and search; the digit columns are
 * decorative. Without JS or with reduced motion the columns already show the value.
 */
export function RollNumber({ value, className }: { value: string; className?: string }) {
  let col = 0;
  return (
    <span className={className}>
      <span className="sr-only">{value}</span>
      <span className="roll__digits" aria-hidden="true">
        {Array.from(value).map((ch, k) => {
          if (!/\d/.test(ch)) return <span key={k}>{ch}</span>;
          const i = col++;
          return (
            <span key={k} className="roll__col">
              <span className="roll__strip" style={{ ["--d" as string]: ch, ["--i" as string]: i }}>
                {Array.from({ length: 10 }, (_, n) => (
                  <span key={n}>{n}</span>
                ))}
              </span>
            </span>
          );
        })}
      </span>
    </span>
  );
}
