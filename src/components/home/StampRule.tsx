type Props = {
  de?: string;
  en?: string;
};

export function StampRule({ de, en }: Props) {
  return (
    <div
      className="flex items-center justify-center gap-3 px-4 py-6 sm:py-8"
      role="separator"
      aria-orientation="horizontal"
    >
      <span
        className="h-px flex-1 max-w-[8rem] bg-stahl sm:max-w-xs"
        aria-hidden
      />
      {(de || en) && (
        <span className="shrink-0 text-center font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-mesquite/90 sm:text-[11px]">
          {de && <span className="block">{de}</span>}
          {en && <span className="mt-1 block text-kreide/70">{en}</span>}
        </span>
      )}
      <span
        className="h-px flex-1 max-w-[8rem] bg-stahl sm:max-w-xs"
        aria-hidden
      />
    </div>
  );
}
