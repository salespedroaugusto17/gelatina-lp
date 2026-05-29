import { motion } from "motion/react";

export function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.min(100, (current / total) * 100);
  return (
    <div className="sticky top-0 z-50 glass">
      <div className="flex items-center gap-3 px-5 py-3 max-w-md mx-auto">
        <div className="flex items-center gap-1.5">
          <div className="size-7 rounded-full bg-gradient-primary shadow-glow-pink flex items-center justify-center">
            <span className="text-white text-xs font-black">G</span>
          </div>
          <span className="text-xs font-bold tracking-tight text-foreground/80">Gelatina<span className="text-primary">.</span></span>
        </div>
        <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-full bg-gradient-primary rounded-full relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer bg-[length:200%_100%]" />
          </motion.div>
        </div>
        <span className="text-xs font-bold text-primary tabular-nums">{Math.round(pct)}%</span>
      </div>
    </div>
  );
}
