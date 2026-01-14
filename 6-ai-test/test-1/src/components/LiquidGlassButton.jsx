const LiquidGlassButton = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  size = "md",
  className = "",
  ...props
}) => {
  // Base styles - Liquid Glass efekti
  const baseStyles = `
    glass-button-base
    rounded-xl
    font-semibold
    transition-all
    duration-200
    ease-out
    active:glass-button-active
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:hover:transform-none
    disabled:hover:glass-button-base
    select-none
    relative
    overflow-hidden
  `;

  // Size variants
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Color variants - Liquid Glass uyumlu renkler
  const variants = {
    primary: `
      bg-blue-500/20
      text-blue-100
      border-blue-400/30
      hover:bg-blue-500/30
      hover:border-blue-400/40
      hover:glass-button-hover
      active:bg-blue-600/25
      active:border-blue-500/35
    `,
    secondary: `
      bg-white/10
      text-gray-100
      border-white/20
      hover:bg-white/15
      hover:border-white/30
      hover:glass-button-hover
      active:bg-white/8
      active:border-white/15
    `,
    success: `
      bg-green-500/20
      text-green-100
      border-green-400/30
      hover:bg-green-500/30
      hover:border-green-400/40
      hover:glass-button-hover
      active:bg-green-600/25
      active:border-green-500/35
    `,
    danger: `
      bg-red-500/20
      text-red-100
      border-red-400/30
      hover:bg-red-500/30
      hover:border-red-400/40
      hover:glass-button-hover
      active:bg-red-600/25
      active:border-red-500/35
    `,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default LiquidGlassButton;

