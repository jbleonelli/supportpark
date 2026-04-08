interface SectionLabelProps {
  label: string
  className?: string
}

export default function SectionLabel({ label, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-8 h-[1px] bg-accent" />
      <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
        {label}
      </span>
    </div>
  )
}
