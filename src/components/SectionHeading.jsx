export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-xl">
      {eyebrow && (
        <p className="text-indigo-600 text-[10px] font-bold tracking-[2.5px] uppercase flex items-center gap-2 mb-4">
          <span className="w-8 h-px bg-indigo-600" />
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4"
          style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-2px" }}
        >
          {title}
        </h2>
      )}
      {description && (
        <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
      )}
    </div>
  );
}
