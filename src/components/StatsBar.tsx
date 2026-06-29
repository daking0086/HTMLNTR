interface StatItemProps {
  icon: string;
  iconClass: string;
  label: string;
  labelClass: string;
  value: number;
  valueClass: string;
  barClass: string;
}

function StatItem({
  icon,
  iconClass,
  label,
  labelClass,
  value,
  valueClass,
  barClass,
}: StatItemProps) {
  return (
    <div className="flex items-center gap-x-2">
      <div className="flex items-center gap-x-1.5">
        <i className={`fa-solid ${icon} ${iconClass}`} />
        <span className={`font-medium ${labelClass}`}>{label}</span>
      </div>
      <div className="w-24 bg-zinc-800 rounded-full h-2.5">
        <div
          className={`stat-fill ${barClass} rounded-full h-2.5 transition-all`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className={`font-mono w-6 text-right ${valueClass}`}>{value}</span>
    </div>
  );
}

interface StatsBarProps {
  affection: number;
  corruption: number;
}

export default function StatsBar({ affection, corruption }: StatsBarProps) {
  return (
    <div className="flex items-center gap-x-8 text-sm">
      <StatItem
        icon="fa-heart"
        iconClass="text-red-400"
        label="Affection"
        labelClass="text-red-300"
        value={affection}
        valueClass={affection > 70 ? 'text-red-400' : 'text-red-300'}
        barClass="bg-red-500"
      />
      <StatItem
        icon="fa-skull"
        iconClass="text-violet-400"
        label="Corruption"
        labelClass="text-violet-300"
        value={corruption}
        valueClass={corruption > 30 ? 'text-violet-400' : 'text-violet-300'}
        barClass="bg-violet-500"
      />
    </div>
  );
}