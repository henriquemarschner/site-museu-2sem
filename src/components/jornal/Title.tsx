interface SectionTitleProps {
  text: string;
  className?: string;
}

export function SectionTitle({ text, className = "" }: SectionTitleProps) {
  return (
    <h2
      className={`text-3xl font-serif font-bold mb-6 border-b-4 border-blue-600 pb-2 ${className}`}
    >
      {text}
    </h2>
  );
}
