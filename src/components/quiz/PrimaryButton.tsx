import { motion } from "motion/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "pink" | "green";
  className?: string;
  superCta?: boolean;
}

export function PrimaryButton({ children, onClick, disabled, variant = "pink", className = "", superCta = false }: Props) {
  const bg = variant === "green" ? "bg-gradient-cta" : "bg-gradient-primary";
  const isActive = !disabled;

  // superCta = bigger button (~15% increase), stronger pulse
  const sizeClasses = superCta
    ? "py-[1.35rem] px-7 text-[1.25rem]"
    : "py-[1.15rem] px-6 text-[1.1rem]";
  const pulseClass = isActive
    ? superCta ? "animate-cta-super-pulse" : "animate-pulse-glow"
    : "";

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.88, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
        delay: 0.1,
      }}
      whileTap={{ scale: disabled ? 1 : 0.93 }}
      whileHover={{ scale: disabled ? 1 : 1.04 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative w-full ${sizeClasses} rounded-2xl ${bg} text-white
        font-extrabold tracking-tight leading-snug
        disabled:opacity-40 disabled:cursor-not-allowed
        overflow-hidden
        ${pulseClass}
        ${className}
      `}
      style={{
        willChange: "transform, box-shadow",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {/* Expanding ring pulse behind button */}
      {isActive && (
        <span className="absolute -inset-1 rounded-3xl border-2 border-pink-400/40 animate-ring-pulse pointer-events-none" />
      )}

      {/* Second attention ring — superCta only, staggered delay */}
      {isActive && superCta && (
        <span
          className="absolute -inset-2 rounded-3xl border-2 pointer-events-none animate-cta-attention-ring"
          style={{ animationDelay: "1s" }}
        />
      )}

      {/* Shimmer sweep — brighter diagonal shine */}
      {isActive && (
        <span className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          <span
            className="absolute inset-0 animate-shimmer-sweep"
            style={{
              background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.35) 48%, rgba(255,255,255,0.45) 52%, transparent 70%)",
            }}
          />
        </span>
      )}

      {/* Soft inner glow top edge */}
      {isActive && (
        <span
          className="absolute top-0 left-[10%] right-[10%] h-[1px] pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.6) 70%, transparent)",
          }}
        />
      )}

      {/* Micro bounce wrapper */}
      <motion.span
        className={`relative z-10 flex items-center justify-center gap-2 ${isActive ? "animate-cta-bounce" : ""}`}
      >
        {children}
      </motion.span>
    </motion.button>
  );
}
