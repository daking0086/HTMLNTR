interface MenuButtonProps {
  icon: string;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'default';
}

export default function MenuButton({
  icon,
  label,
  onClick,
  disabled = false,
  variant = 'default',
}: MenuButtonProps) {
  const base =
    'w-full flex items-center justify-between px-5 py-4 rounded-2xl text-sm font-medium transition-all border';
  const styles =
    variant === 'primary'
      ? 'bg-blue-600 hover:bg-blue-500 border-blue-500 text-white'
      : 'bg-zinc-800 hover:bg-zinc-700 border-zinc-700 text-zinc-100';

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles} disabled:opacity-40 disabled:cursor-not-allowed choice-btn`}
    >
      <span className="flex items-center gap-x-3">
        <i className={`fa-solid ${icon} w-4 text-center`} />
        {label}
      </span>
      <i className="fa-solid fa-chevron-right text-xs opacity-50" />
    </button>
  );
}