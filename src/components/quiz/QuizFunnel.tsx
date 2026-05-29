import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { Star, Sparkles, Heart, Check, ChevronRight, Shield, Clock, Zap, TrendingDown, Flame, Award, Lock, Plus, Minus } from "lucide-react";

import { ProgressBar } from "./ProgressBar";
import { PrimaryButton } from "./PrimaryButton";
import type { QuizAnswers } from "./types";
import { initialAnswers } from "./types";

import gelatinaHero from "@/assets/gelatina-hero.jpg";
import womanResult from "@/assets/woman-result.jpg";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import realBeforeAfter from "@/assets/real-before-after.png";
import poolBeforeAfter from "@/assets/pool-before-after.png";
import salesHeroTransform from "@/assets/sales-hero-transform.png";
import salesPlano1Mes from "@/assets/sales-plano-1mes.png";
import salesOfertaCompleta from "@/assets/sales-oferta-completa.jpg";
import seloGarantia7Dias from "@/assets/selo-garantia-7dias.png";
import productMockup from "@/assets/product-mockup.jpg";
import realStory1 from "@/assets/real-story-1.png";
import realStory2 from "@/assets/real-story-2.png";
import realStory3 from "@/assets/real-story-3.png";
import bodySlim from "@/assets/body-slim.jpg";
import bodyAverage from "@/assets/body-average.jpg";
import bodyCurvy from "@/assets/body-curvy.jpg";
import bodyPlus from "@/assets/body-plus.jpg";
import g1SimoneMendes from "@/assets/g1-simone-mendes.png";
import bodySlimReal from "@/assets/body-slim-real.png";
import bodyAverageReal from "@/assets/body-average-real.png";
import bodyOverweightReal from "@/assets/body-overweight-real.png";
import bodyPlusReal from "@/assets/body-plus-real.png";
import avatarFace1 from "@/assets/avatar-face-1.png";
import avatarFace2 from "@/assets/avatar-face-2.png";
import avatarFace3 from "@/assets/avatar-face-3.png";

const TOTAL_STEPS = 22;

// ============ HERO ============
function Hero({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-[100dvh] relative overflow-hidden bg-gradient-soft">
      {/* glow orbs */}
      <div className="absolute -top-32 -right-32 size-96 rounded-full bg-gradient-glow blur-3xl opacity-70 animate-float" />
      <div className="absolute top-1/2 -left-32 size-80 rounded-full bg-gradient-glow blur-3xl opacity-50 animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-md mx-auto px-5 pt-6 pb-10">
        {/* Premium Brand Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center mb-5"
        >
          <div className="flex items-center gap-1.5">
            <h2
              className="text-[1.4rem] font-black tracking-tight text-gradient-primary"
              style={{ textShadow: "0 0 30px oklch(0.7 0.3 350 / 0.2)" }}
            >
              Gelatina Mounjaro
            </h2>
            <span
              className="text-xl inline-block animate-heart-float"
              style={{ animationDuration: "3s" }}
            >
              <span
                className="inline-block animate-heart-pulse"
                style={{ animationDuration: "2s" }}
              >
                💖
              </span>
            </span>
          </div>
        </motion.div>

        {/* Online indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex justify-center mb-5"
        >
          <div className="flex items-center gap-1.5 glass px-2.5 py-1 rounded-full">
            <span className="size-1.5 rounded-full bg-success animate-pulse" />
            <span className="text-[10px] font-bold text-foreground/70">+12.847 mulheres hoje</span>
          </div>
        </motion.div>

        {/* Social proof badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-5"
        >
          <div className="flex -space-x-2.5">
            {[avatarFace1, avatarFace2, avatarFace3, avatarFace1, avatarFace2].map((src, i) => (
              <div
                key={i}
                className="size-8 rounded-full border-[2.5px] border-white overflow-hidden shadow-sm"
                style={{ zIndex: 5 - i }}
              >
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} className="size-3 fill-yellow-400 text-yellow-400" />)}
          </div>
          <span className="text-xs font-bold">4.9 · +50k</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[2rem] leading-[1.05] font-black tracking-tight text-center mb-3"
        >
          Descubra o truque simples que está ajudando milhares de mulheres a{" "}
          <span className="text-gradient-primary">reduzir medidas naturalmente</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="text-center text-muted-foreground text-[15px] mb-6 px-2"
        >
          Receita caseira simples, prática e feita em minutos. 💖
        </motion.p>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55, type: "spring", stiffness: 200, damping: 20 }}
          className="relative mb-6"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-glow-pink aspect-square">
            <img src={gelatinaHero} alt="Gelatina rosa" className="w-full h-full object-cover" width={1024} height={1024} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Floating mini-card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-4 right-4 glass rounded-2xl px-3 py-2 shadow-soft"
            >
              <div className="flex items-center gap-1.5">
                <TrendingDown className="size-3.5 text-success" />
                <span className="text-xs font-black">-7kg em 30d</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute bottom-4 left-4 glass rounded-2xl px-3 py-2 shadow-soft"
            >
              <div className="flex items-center gap-1.5">
                <Flame className="size-3.5 text-primary" />
                <span className="text-xs font-black">Viral no TikTok</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <PrimaryButton onClick={onStart}>
            Quero descobrir meu protocolo <Heart className="size-5 fill-white" />
          </PrimaryButton>
        </motion.div>

        {/* mini comments */}
        <div className="mt-6 space-y-2">
          {[
            { n: "Ana, SP", t: "Comecei semana passada e já perdi 3kg! 😍", s: "2min" },
            { n: "Júlia, RJ", t: "Receita facílima, virei fã 💖", s: "5min" },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.15 }}
              className="glass rounded-2xl p-3 flex gap-2.5"
            >
              <div className="size-9 rounded-full bg-gradient-primary shrink-0 flex items-center justify-center text-white font-bold text-xs">
                {c.n[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold">{c.n}</span>
                  <span className="text-[10px] text-muted-foreground">{c.s}</span>
                </div>
                <p className="text-xs text-foreground/80">{c.t}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 text-[11px] text-muted-foreground">
          <div className="flex items-center gap-1"><Shield className="size-3" /> 100% seguro</div>
          <div className="flex items-center gap-1"><Lock className="size-3" /> Dados privados</div>
        </div>
      </div>
    </div>
  );
}

// ============ Generic option card ============
function OptionCard({ label, emoji, selected, onClick, image }: { label: string; emoji?: string; selected?: boolean; onClick: () => void; image?: string }) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`w-full p-4 rounded-2xl border-2 transition-all text-left flex items-center gap-3 ${
        selected
          ? "border-primary bg-primary/10 shadow-glow-pink"
          : "border-border bg-card hover:border-primary/40"
      }`}
    >
      {image && (
        <div className="size-14 rounded-xl overflow-hidden shrink-0 bg-blush">
          <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" width={56} height={56} />
        </div>
      )}
      {emoji && !image && (
        <div className="size-12 rounded-xl bg-blush flex items-center justify-center text-2xl shrink-0">{emoji}</div>
      )}
      <span className="flex-1 font-bold text-[15px]">{label}</span>
      <div className={`size-6 rounded-full border-2 flex items-center justify-center transition-all ${
        selected ? "border-primary bg-primary" : "border-border"
      }`}>
        {selected && <Check className="size-3.5 text-white" strokeWidth={3} />}
      </div>
    </motion.button>
  );
}

// ============ Screen Shell ============
function Screen({ step, title, subtitle, children, footer }: { step: number; title?: string; subtitle?: string; children: React.ReactNode; footer?: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-gradient-soft">
      <ProgressBar current={step} total={TOTAL_STEPS} />
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 max-w-md mx-auto w-full px-5 pt-6 pb-32 flex flex-col"
      >
        {title && <h2 className="text-2xl font-black tracking-tight mb-2">{title}</h2>}
        {subtitle && <p className="text-muted-foreground text-[15px] mb-6">{subtitle}</p>}
        <div className="flex-1">{children}</div>
      </motion.div>
      {footer && (
        <div className="fixed bottom-0 inset-x-0 z-40 glass border-t border-border/40 px-5 py-4">
          <div className="max-w-md mx-auto">{footer}</div>
        </div>
      )}
    </div>
  );
}

// ============ Wheel Picker ============
function WheelPicker({ min, max, value, onChange, unit }: { min: number; max: number; value: number; onChange: (v: number) => void; unit: string }) {
  const dec = () => onChange(Math.max(min, value - 1));
  const inc = () => onChange(Math.min(max, value + 1));
  return (
    <div className="relative my-8">
      <div className="absolute inset-0 bg-gradient-glow blur-2xl opacity-60" />
      <div className="relative glass-pink rounded-3xl p-8 flex items-center justify-center gap-6">
        <motion.button whileTap={{ scale: 0.9 }} onClick={dec} className="size-12 rounded-full bg-white shadow-soft flex items-center justify-center">
          <Minus className="size-5 text-primary" />
        </motion.button>
        <div className="text-center">
          <motion.div
            key={value}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-6xl font-black text-gradient-primary tabular-nums leading-none"
          >
            {value}
          </motion.div>
          <div className="text-xs font-bold text-muted-foreground mt-1">{unit}</div>
        </div>
        <motion.button whileTap={{ scale: 0.9 }} onClick={inc} className="size-12 rounded-full bg-gradient-primary shadow-glow-pink flex items-center justify-center">
          <Plus className="size-5 text-white" />
        </motion.button>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full mt-6 accent-primary"
      />
      <div className="flex justify-between text-[11px] text-muted-foreground mt-1 px-1">
        <span>{min}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  );
}

// ============ Loading screen ============
function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);
  const [msgIdx, setMsgIdx] = useState(0);
  const messages = [
    "Analisando seu metabolismo...",
    "Calculando seu IMC...",
    "Verificando seus hábitos...",
    "Analisando retenção de líquido...",
    "Gerando protocolo personalizado...",
    "Calculando potencial de transformação...",
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setPct((p) => {
        const next = p + 3;
        if (next >= 100) {
          clearInterval(t);
          setTimeout(onDone, 400);
          return 100;
        }
        return next;
      });
    }, 45);
    return () => clearInterval(t);
  }, [onDone]);

  useEffect(() => {
    const i = Math.min(messages.length - 1, Math.floor((pct / 100) * messages.length));
    setMsgIdx(i);
  }, [pct]);

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center bg-gradient-soft px-5 relative overflow-hidden">
      {/* particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute size-2 rounded-full bg-primary/30"
          animate={{
            y: [0, -400],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
          style={{ left: `${Math.random() * 100}%`, bottom: 0 }}
        />
      ))}

      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="size-48 rounded-full border-4 border-transparent border-t-primary border-r-accent"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 rounded-full border-4 border-transparent border-b-primary/50 border-l-accent/50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-5xl font-black text-gradient-primary tabular-nums">{Math.floor(pct)}%</div>
          <Sparkles className="size-5 text-primary mt-1 animate-pulse" />
        </div>
      </div>

      <div className="mt-10 h-12 flex items-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={msgIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center font-bold text-foreground/80"
          >
            {messages[msgIdx]}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="w-full max-w-xs mt-6 space-y-2">
        {messages.slice(0, msgIdx + 1).map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-xs text-muted-foreground"
          >
            <div className="size-4 rounded-full bg-success/20 flex items-center justify-center">
              <Check className="size-2.5 text-success" strokeWidth={3} />
            </div>
            <span className="line-through">{m}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const CAROUSEL_STORIES = [
  {
    text: "Minha barriga sumiu!! Não acreditooo",
    name: "Valéria, 34 - Rio de Janeiro",
    img: realStory1,
  },
  {
    text: "Bizarro... Perdi 7kg em 3 semanas",
    name: "Jéssica, 28 - Santa Catarina",
    img: realStory2,
  },
  {
    text: "Voltei a usar roupas que eu evitava há anos ✨",
    name: "Camila, 31 - São Paulo",
    img: realStory3,
  },
];

function TransformationCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Autoplay lento e suave
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % CAROUSEL_STORIES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveIdx((prev) => (prev + 1) % CAROUSEL_STORIES.length);
  };

  const prevSlide = () => {
    setActiveIdx((prev) => (prev - 1 + CAROUSEL_STORIES.length) % CAROUSEL_STORIES.length);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto overflow-hidden py-2 px-1">
      {/* Setas minimalistas */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-[43%] -translate-y-1/2 size-10 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center border border-white/50 shadow-soft z-20 transition-all hover:bg-white/95 hover:scale-105 active:scale-95"
      >
        <ChevronRight className="size-5 text-foreground rotate-180" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-[43%] -translate-y-1/2 size-10 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center border border-white/50 shadow-soft z-20 transition-all hover:bg-white/95 hover:scale-105 active:scale-95"
      >
        <ChevronRight className="size-5 text-foreground" />
      </button>

      {/* Swipe track */}
      <motion.div
        className="flex cursor-grab active:cursor-grabbing px-3"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(e, info) => {
          const threshold = 40;
          if (info.offset.x < -threshold) {
            nextSlide();
          } else if (info.offset.x > threshold) {
            prevSlide();
          }
        }}
      >
        <motion.div
          className="flex w-full"
          animate={{ x: `calc(-${activeIdx * 100}% + ${activeIdx * 8}px)` }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
        >
          {CAROUSEL_STORIES.map((story, i) => {
            const isActive = activeIdx === i;
            return (
              <motion.div
                key={i}
                className="w-full shrink-0 pr-2"
                animate={{
                  scale: isActive ? 1.01 : 0.94,
                  opacity: isActive ? 1 : 0.65,
                }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className="relative rounded-[2.2rem] overflow-hidden aspect-[4/5] bg-card border border-white/40 shadow-soft flex flex-col justify-end p-5 select-none transition-all duration-500"
                  style={{
                    boxShadow: isActive
                      ? "0 20px 48px -12px oklch(0.65 0.28 350 / 0.2)"
                      : "0 8px 24px -12px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Real image before/after */}
                  <img
                    src={story.img}
                    alt={story.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 pointer-events-none"
                    style={{
                      transform: isActive ? "scale(1.02)" : "scale(1)",
                    }}
                  />
                  
                  {/* Subtle dark overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-0.5 bg-white/15 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="size-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content area */}
                  <div className="relative z-10 space-y-2 text-left">
                    <p className="text-[1.2rem] font-black text-white leading-tight tracking-tight">
                      “{story.text}”
                    </p>
                    <p className="text-[10px] font-bold text-white/75 tracking-wider uppercase">
                      {story.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Dots indicadores premium */}
      <div className="flex justify-center gap-1.5 mt-3">
        {CAROUSEL_STORIES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeIdx === i ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function AnimatedBMI({ value, colorClass, level }: { value: number, colorClass: string, level: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    const duration = 1000;
    const endValue = value;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      
      // Easing out
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setDisplayValue(endValue * easeOut);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(endValue);
      }
    };
    
    requestAnimationFrame(animate);
  }, [value]);

  const percentage = Math.min(100, Math.max(0, ((displayValue - 15) / (40 - 15)) * 100));

  return (
    <div className={`rounded-3xl p-6 text-white shadow-glow-pink transition-colors duration-1000 ${colorClass}`}>
      <div className="text-xs font-bold uppercase tracking-wider opacity-80">Seu IMC atual</div>
      <div className="text-6xl font-black mt-1 tabular-nums">{displayValue.toFixed(1)}</div>
      <div className="text-sm font-bold opacity-90 mt-1">Classificação: {level}</div>
      <div className="relative mt-6 h-3 rounded-full bg-black/20">
        <motion.div 
          initial={{ left: 0 }} 
          animate={{ left: `${percentage}%` }} 
          transition={{ duration: 1, ease: "easeOut" }} 
          className="absolute top-1/2 -translate-y-1/2 -ml-2 size-5 bg-white rounded-full shadow-md border-2 border-transparent"
        />
      </div>
      <div className="flex justify-between text-[10px] font-bold opacity-70 mt-2">
        <span>15</span><span>18.5</span><span>25</span><span>30</span><span>40+</span>
      </div>
    </div>
  );
}

// ============ MAIN ============
export default function QuizFunnel() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>(initialAnswers);
  const scrollRef = useRef<HTMLDivElement>(null);

  const next = () => {
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  const update = <K extends keyof QuizAnswers>(k: K, v: QuizAnswers[K]) => {
    setAnswers((a) => ({ ...a, [k]: v }));
  };

  // BMI calc
  const bmi = 27.74;
  const bmiLevel = bmi < 18.5 ? "Abaixo" : bmi < 25 ? "Normal" : bmi < 30 ? "Sobrepeso" : "Obesidade";
  
  const getBmiColor = (val: number) => {
    if (val < 18.5) return "bg-gradient-to-br from-blue-400 to-blue-600";
    if (val < 25) return "bg-gradient-to-br from-emerald-400 to-emerald-600";
    if (val < 30) return "bg-gradient-to-br from-orange-400 to-orange-600";
    return "bg-gradient-to-br from-red-500 to-red-700";
  };

  return (
    <div ref={scrollRef}>
      <AnimatePresence mode="wait">
        {/* STEP 0 - HERO */}
        {step === 0 && (
          <motion.div key="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Hero onStart={next} />
          </motion.div>
        )}

        {/* STEP 1 - AGE */}
        {step === 1 && (
          <Screen key="s1" step={1} title="Qual sua idade?" subtitle="Vamos personalizar seu protocolo de acordo.">
            <div className="grid grid-cols-2 gap-3">
              {["18–29", "30–39", "40–49", "50+"].map((a) => (
                <motion.button
                  key={a}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { update("age", a); next(); }}
                  className={`aspect-[4/3] rounded-3xl border-2 flex flex-col items-center justify-center gap-1 transition-all ${
                    answers.age === a ? "border-primary bg-primary/10 shadow-glow-pink" : "border-border bg-card hover:border-primary/40"
                  }`}
                >
                  <span className="text-3xl font-black text-gradient-primary">{a}</span>
                  <span className="text-xs text-muted-foreground font-bold">anos</span>
                </motion.button>
              ))}
            </div>
          </Screen>
        )}

        {/* STEP 2 - BODY */}
        {step === 2 && (
          <Screen key="s2" step={2} title="Como você classificaria seu corpo atualmente?" subtitle="Sem julgamentos — só pra personalizar.">
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Magra", img: bodySlimReal },
                { label: "Média", img: bodyAverageReal },
                { label: "Sobrepeso", img: bodyOverweightReal },
                { label: "Plus Size", img: bodyPlusReal },
              ].map((b) => (
                <motion.button
                  key={b.label}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => { update("body", b.label); next(); }}
                  className={`relative aspect-[3/4] rounded-3xl overflow-hidden border-2 transition-all group ${
                    answers.body === b.label ? "border-primary shadow-glow-pink" : "border-border/60 hover:border-primary/40"
                  }`}
                  style={{ boxShadow: answers.body === b.label ? undefined : "0 4px 20px -6px oklch(0.5 0.15 340 / 0.12)" }}
                >
                  <img
                    src={b.img}
                    alt={b.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-white font-black text-[15px] drop-shadow-md">{b.label}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </Screen>
        )}

        {/* STEP 3 - AREAS */}
        {step === 3 && (
          <Screen
            key="s3"
            step={3}
            title="Quais áreas mais te incomodam?"
            subtitle="Você pode escolher mais de uma."
            footer={<PrimaryButton disabled={answers.areas.length === 0} onClick={next}>Continuar <ChevronRight className="size-5" /></PrimaryButton>}
          >
            <div className="space-y-2.5">
              {[
                { v: "barriga", e: "🤰" },
                { v: "braços", e: "💪" },
                { v: "pernas", e: "🦵" },
                { v: "costas", e: "👤" },
                { v: "bunda", e: "🍑" },
              ].map((a) => {
                const sel = answers.areas.includes(a.v);
                return (
                  <OptionCard
                    key={a.v}
                    label={a.v.charAt(0).toUpperCase() + a.v.slice(1)}
                    emoji={a.e}
                    selected={sel}
                    onClick={() => {
                      update("areas", sel ? answers.areas.filter((x) => x !== a.v) : [...answers.areas, a.v]);
                    }}
                  />
                );
              })}
            </div>
          </Screen>
        )}

        {/* STEP 4 - SOCIAL PROOF */}
        {step === 4 && (
          <Screen key="s4" step={4} footer={<PrimaryButton onClick={next}>Continuar <ChevronRight className="size-5" /></PrimaryButton>}>
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-5"
            >
              <span className="inline-flex items-center gap-1.5 glass-pink rounded-full px-3.5 py-1.5 text-xs font-bold text-primary mb-3">
                <Flame className="size-3" /> Viral em todo o Brasil
              </span>
              <h2 className="text-[1.55rem] font-black mt-3 leading-[1.1] tracking-tight">
                Sim, até as famosas estão usando! ⭐
              </h2>
              <p className="text-sm text-muted-foreground mt-2 px-2">
                O Truque da Gelatina já virou tendência nas redes sociais.
              </p>
            </motion.div>

            {/* G1 News Card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl overflow-hidden bg-white border border-border/60 transition-all duration-300 hover:shadow-glow-pink"
              style={{
                boxShadow: "0 8px 40px -12px oklch(0.4 0.1 340 / 0.15), 0 2px 8px -2px oklch(0.5 0.05 340 / 0.08)",
              }}
            >
              {/* G1 Red header */}
              <div
                className="px-4 py-2.5 flex items-center justify-between"
                style={{ background: "linear-gradient(135deg, #d32f2f 0%, #c62828 100%)" }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-white font-black text-lg leading-none" style={{ fontFamily: "Georgia, serif" }}>g1</span>
                  <span className="text-white/90 text-[11px] font-bold tracking-wider uppercase">Saúde</span>
                </div>
                <span className="text-white/70 text-[10px] font-medium">há 2h</span>
              </div>

              {/* Article image — full width */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="relative w-full"
              >
                <img
                  src={g1SimoneMendes}
                  alt="Simone Mendes - Antes e Depois com Gelatina"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Article body */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="p-4 pb-5"
              >
                <h3 className="font-black text-[15px] leading-snug mb-2 text-foreground">
                  Simone Mendes comenta sobre como a famosa 'gelatina do TikTok' ajudou na perda de peso. Cantora eliminou 30kg em apenas 3 meses.
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  Por <span className="font-bold text-foreground/70">Gustavo Foster</span>, g1 RS · 01/05/2026 02h00
                </p>

                {/* Divider */}
                <div className="h-px bg-border/60 mb-3" />

                {/* Engagement metrics */}
                <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1">👁️ <span className="font-bold">2.4M</span> visualizações</span>
                  <span className="flex items-center gap-1">💬 <span className="font-bold">14.2k</span> comentários</span>
                  <span className="flex items-center gap-1">🔥 <span className="font-bold">Trending</span></span>
                </div>
              </motion.div>
            </motion.div>

            {/* Extra social proof below card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground"
            >
              <div className="flex -space-x-2">
                {[avatarFace1, avatarFace2, avatarFace3].map((src, i) => (
                  <div key={i} className="size-6 rounded-full border-[2px] border-white overflow-hidden shadow-sm">
                    <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
              <span className="font-bold">+2.847 mulheres leram esta matéria hoje</span>
            </motion.div>
          </Screen>
        )}

        {/* STEP 5 - NAME */}
        {step === 5 && (
          <Screen
            key="s5"
            step={5}
            title="Qual seu nome?"
            subtitle="Pra deixar tudo personalizado pra você 💖"
            footer={<PrimaryButton disabled={!answers.name?.trim()} onClick={next}>Continuar <ChevronRight className="size-5" /></PrimaryButton>}
          >
            <input
              autoFocus
              type="text"
              value={answers.name || ""}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Seu primeiro nome"
              className="w-full px-5 py-5 rounded-2xl border-2 border-border bg-card text-lg font-bold focus:border-primary focus:outline-none focus:shadow-glow-pink transition-all"
            />
            {answers.name && answers.name.trim().length > 1 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 glass-pink rounded-2xl p-4">
                <p className="text-center font-bold">
                  Perfeito, <span className="text-gradient-primary">{answers.name}</span> 💖
                </p>
                <p className="text-center text-sm text-muted-foreground mt-1">
                  Agora vamos criar seu protocolo personalizado.
                </p>
              </motion.div>
            )}
          </Screen>
        )}

        {/* STEP 6 - EMOTIONAL */}
        {step === 6 && (
          <Screen key="s6" step={6} title="Como seu peso afeta sua vida?" subtitle="Selecione o que mais te toca.">
            <div className="space-y-2.5">
              {[
                { v: "autoestima", e: "💔" },
                { v: "energia", e: "⚡" },
                { v: "roupas", e: "👗" },
                { v: "relacionamentos", e: "💕" },
                { v: "confiança", e: "✨" },
              ].map((o) => (
                <OptionCard
                  key={o.v}
                  label={o.v.charAt(0).toUpperCase() + o.v.slice(1)}
                  emoji={o.e}
                  selected={answers.emotional === o.v}
                  onClick={() => { update("emotional", o.v); next(); }}
                />
              ))}
            </div>
          </Screen>
        )}

        {/* STEP 7 - BLOCKER */}
        {step === 7 && (
          <Screen key="s7" step={7} title="O que mais dificulta seu emagrecimento?">
            <div className="space-y-2.5">
              {[
                { v: "ansiedade", e: "😰" },
                { v: "fome excessiva", e: "🍔" },
                { v: "metabolismo lento", e: "🐢" },
                { v: "rotina corrida", e: "⏰" },
                { v: "falta de motivação", e: "😔" },
              ].map((o) => (
                <OptionCard
                  key={o.v}
                  label={o.v.charAt(0).toUpperCase() + o.v.slice(1)}
                  emoji={o.e}
                  selected={answers.blocker === o.v}
                  onClick={() => { update("blocker", o.v); next(); }}
                />
              ))}
            </div>
          </Screen>
        )}

        {/* STEP 8 - GOALS */}
        {step === 8 && (
          <Screen key="s8" step={8} title="O que você mais deseja conquistar?">
            <div className="grid grid-cols-2 gap-3">
              {[
                { v: "Mais confiança", e: "✨" },
                { v: "Vestir o que ama", e: "👗" },
                { v: "Mais energia", e: "⚡" },
                { v: "Se sentir leve", e: "🪶" },
                { v: "Melhor autoestima", e: "💖" },
                { v: "Saúde plena", e: "🌸" },
              ].map((o) => (
                <motion.button
                  key={o.v}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { update("goal", o.v); next(); }}
                  className={`aspect-square rounded-3xl border-2 p-4 flex flex-col items-center justify-center gap-2 ${
                    answers.goal === o.v ? "border-primary bg-primary/10 shadow-glow-pink" : "border-border bg-card"
                  }`}
                >
                  <span className="text-3xl">{o.e}</span>
                  <span className="text-xs font-bold text-center leading-tight">{o.v}</span>
                </motion.button>
              ))}
            </div>
          </Screen>
        )}

        {/* STEP 9 - EMOTIONAL SCREEN */}
        {step === 9 && (
          <Screen key="s9" step={9} footer={<PrimaryButton onClick={next}>Continuar <ChevronRight className="size-5" /></PrimaryButton>}>
            <div className="flex flex-col items-center text-center pt-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.1 }}
                className="relative mb-6"
              >
                <div className="absolute inset-0 bg-gradient-glow blur-3xl scale-150" />
                <div className="relative size-40 rounded-full overflow-hidden shadow-glow-pink animate-glow-pulse">
                  <img src={gelatinaHero} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -inset-3">
                  {[0, 90, 180, 270].map(deg => (
                    <Sparkles key={deg} className="absolute size-5 text-primary" style={{
                      top: "50%", left: "50%",
                      transform: `rotate(${deg}deg) translateY(-100px) rotate(-${deg}deg)`
                    }} />
                  ))}
                </motion.div>
              </motion.div>
              <h2 className="text-3xl font-black tracking-tight mb-3">Perfeito 🎉</h2>
              <p className="text-foreground/80 text-[15px] mb-4">
                Seu perfil mostra <span className="text-gradient-primary font-black">grande potencial</span> para transformação.
              </p>
              <div className="glass-pink rounded-2xl p-4 w-full">
                <div className="flex items-center gap-2 text-sm font-bold mb-2">
                  <Award className="size-4 text-primary" />
                  Potencial detectado
                </div>
                <div className="h-3 rounded-full bg-white/50 overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "87%" }} transition={{ duration: 1.2, delay: 0.4 }} className="h-full bg-gradient-primary rounded-full" />
                </div>
                <div className="text-right text-xs font-black text-primary mt-1">87%</div>
              </div>
            </div>
          </Screen>
        )}

        {/* STEP 10 - WEIGHT */}
        {step === 10 && (
          <Screen
            key="s10"
            step={10}
            title="Qual seu peso atual?"
            subtitle="Use os botões para ajustar."
            footer={<PrimaryButton onClick={next}>Continuar <ChevronRight className="size-5" /></PrimaryButton>}
          >
            <WheelPicker min={40} max={180} value={answers.weight || 70} onChange={(v) => update("weight", v)} unit="kg" />
          </Screen>
        )}

        {/* STEP 11 - HEIGHT */}
        {step === 11 && (
          <Screen
            key="s11"
            step={11}
            title="Qual sua altura?"
            footer={<PrimaryButton onClick={next}>Continuar <ChevronRight className="size-5" /></PrimaryButton>}
          >
            <WheelPicker min={140} max={200} value={answers.height || 165} onChange={(v) => update("height", v)} unit="cm" />
          </Screen>
        )}

        {/* STEP 12 - TARGET WEIGHT */}
        {step === 12 && (
          <Screen
            key="s12"
            step={12}
            title="Qual seu peso desejado?"
            subtitle={`Vamos te ajudar a chegar lá, ${answers.name || "linda"}.`}
            footer={<PrimaryButton onClick={next}>Continuar <ChevronRight className="size-5" /></PrimaryButton>}
          >
            <WheelPicker min={40} max={120} value={answers.targetWeight || (answers.weight ? answers.weight - 7 : 60)} onChange={(v) => update("targetWeight", v)} unit="kg" />
            {answers.weight && answers.targetWeight && answers.weight > answers.targetWeight && (
              <div className="glass-pink rounded-2xl p-4 text-center">
                <div className="text-xs text-muted-foreground">Meta de redução</div>
                <div className="text-3xl font-black text-gradient-primary">-{answers.weight - answers.targetWeight}kg</div>
              </div>
            )}
          </Screen>
        )}

        {/* STEP 13 - ROUTINE */}
        {step === 13 && (
          <Screen key="s13" step={13} title="Como é sua rotina?">
            <div className="space-y-2.5">
              {[
                { v: "Sedentária", e: "💻" },
                { v: "Leve (caminho às vezes)", e: "🚶‍♀️" },
                { v: "Ativa (exercito 2-3x)", e: "🏃‍♀️" },
                { v: "Muito ativa (5x+)", e: "💪" },
              ].map((o) => (
                <OptionCard key={o.v} label={o.v} emoji={o.e} selected={answers.routine === o.v} onClick={() => { update("routine", o.v); next(); }} />
              ))}
            </div>
          </Screen>
        )}

        {/* STEP 14 - SLEEP */}
        {step === 14 && (
          <Screen key="s14" step={14} title="Quantas horas você dorme?">
            <div className="space-y-2.5">
              {["Menos de 5h", "5–6h", "7–8h", "Mais de 8h"].map((o) => (
                <OptionCard key={o} label={o} emoji="😴" selected={answers.sleep === o} onClick={() => { update("sleep", o); next(); }} />
              ))}
            </div>
          </Screen>
        )}

        {/* STEP 15 - WATER */}
        {step === 15 && (
          <Screen key="s15" step={15} title="Quanta água você bebe por dia?">
            <div className="space-y-2.5">
              {["Menos de 1L", "1–1.5L", "1.5–2L", "Mais de 2L"].map((o) => (
                <OptionCard key={o} label={o} emoji="💧" selected={answers.water === o} onClick={() => { update("water", o); next(); }} />
              ))}
            </div>
          </Screen>
        )}

        {/* STEP 16 - LOADING */}
        {step === 16 && <LoadingScreen key="s16" onDone={next} />}

        {/* STEP 17 - BMI RESULT */}
        {step === 17 && (
          <Screen
            key="s17"
            step={17}
            title="Sua análise está pronta 💖"
            subtitle={`Veja o que descobrimos sobre seu perfil, ${answers.name || ""}.`}
            footer={<PrimaryButton onClick={next}>Ver como funciona <ChevronRight className="size-5" /></PrimaryButton>}
          >
            <AnimatedBMI value={bmi} level={bmiLevel} colorClass={getBmiColor(bmi)} />

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="glass-pink rounded-2xl p-4">
                <div className="text-xs text-muted-foreground">Meta</div>
                <div className="text-xl font-black text-gradient-primary">-10kg</div>
              </div>
              <div className="glass-pink rounded-2xl p-4">
                <div className="text-xs text-muted-foreground">Estimativa</div>
                <div className="text-xl font-black text-gradient-primary">4 sem</div>
              </div>
            </div>

            <div className="mt-4 rounded-3xl border border-border bg-card p-4">
              <div className="flex items-center gap-2 mb-2">
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-sm">Camila, 32 anos</span>
              </div>
              <p className="text-sm text-foreground/80">"Tinha IMC parecido com o seu. Em 4 semanas perdi 8kg e voltei a usar minhas roupas favoritas 💖"</p>
            </div>
          </Screen>
        )}

        {/* STEP 18 - TRANSFORMATION RESULT */}
        {step === 18 && (
          <Screen
            key="s18"
            step={18}
            footer={<PrimaryButton onClick={next}>Continuar <ChevronRight className="size-5" /></PrimaryButton>}
          >
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-6"
            >
              <h2 className="text-[1.65rem] font-black tracking-tight leading-[1.1] mb-2 text-foreground">
                Seu corpo respondeu muito bem ao protocolo ✨
              </h2>
              <p className="text-sm text-muted-foreground px-4">
                Com base nas suas respostas, você pode acelerar sua transformação nas próximas semanas.
              </p>
            </motion.div>

            {/* Real Transformation Before/After Image Container */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl overflow-hidden border border-pink-200/30 shadow-[0_12px_40px_-6px_oklch(0.65_0.28_350_/_0.15)] mb-6 bg-card"
            >
              {/* Soft pink ambient glow */}
              <div className="absolute inset-0 bg-primary/5 pointer-events-none mix-blend-overlay" />
              
              <img
                src={realBeforeAfter}
                alt="Transformação Real"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.03]"
                loading="lazy"
              />
              
              {/* Premium Floating Badges */}
              <div className="absolute top-4 left-4 glass/80 backdrop-blur-md border border-white/60 text-foreground/90 font-black text-[10px] tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
                ANTES
              </div>
              <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-md border border-primary/20 text-white font-black text-[10px] tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
                DEPOIS
              </div>
            </motion.div>

            {/* Premium American VSL Style Translucent Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.04)] rounded-3xl p-6 space-y-4"
            >
              {/* Decorative subtle background light */}
              <div className="absolute -top-12 -right-12 size-24 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
              
              {/* Core Copy */}
              <div className="space-y-3">
                <p className="text-[1.05rem] font-bold leading-relaxed text-foreground">
                  <span className="text-primary font-black bg-primary/10 px-2 py-1 rounded-xl mr-1 inline-block">
                    O segredo para secar
                  </span>
                  : não é comer menos, é ativar o GLP-1.
                </p>
                <p className="text-sm font-medium leading-relaxed text-muted-foreground border-l-2 border-primary/20 pl-3">
                  A <span className="font-extrabold text-foreground">Gelatina Mounjaro</span> atua como um <span className="italic font-bold text-foreground">“interruptor” hormonal natural</span>!
                </p>
              </div>

              {/* Minimalist divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-border/80 to-transparent my-1" />

              {/* Premium Social Proof Area */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-[1.05rem] font-extrabold italic text-foreground tracking-tight leading-snug">
                  “Perdi 12kg em 3 semanas”
                </p>
                <p className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                  Clara, 32 anos • Belo Horizonte
                </p>
              </div>
            </motion.div>
          </Screen>
        )}

        {/* STEP 19 - HOW TO USE PROTOCOL */}
        {step === 19 && (
          <Screen
            key="s19"
            step={19}
            footer={<PrimaryButton onClick={next}>Sim, quero começar agora! ✨</PrimaryButton>}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-6"
            >
              <h2 className="text-[1.55rem] font-black tracking-tight leading-[1.1] mb-2">
                Quer saber como usar a Gelatina Mounjaro?
              </h2>
              <p className="text-sm text-muted-foreground px-2">
                É simples, rápido e fácil de seguir.
              </p>
            </motion.div>

            {/* Floating glow orbs */}
            <div className="relative">
              <div className="absolute -top-10 -right-10 size-40 rounded-full bg-gradient-glow blur-3xl opacity-50 animate-float" />
              <div className="absolute -bottom-10 -left-10 size-32 rounded-full bg-gradient-glow blur-3xl opacity-40 animate-float" style={{ animationDelay: "2s" }} />

              <div className="relative space-y-4">
                {[
                  { step: "1", title: "Prepare a gelatina", desc: "Receita simples e rápida feita em minutos", icon: <Sparkles className="size-5" /> },
                  { step: "2", title: "Consuma 2x ao dia", desc: "Uma vez pela manhã e outra à noite", icon: <Clock className="size-5" /> },
                  { step: "3", title: "Siga por 30 dias", desc: "Resultados visíveis já nas primeiras semanas", icon: <Award className="size-5" /> },
                ].map((s, i) => (
                  <motion.div
                    key={s.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex gap-4 items-start"
                  >
                    {/* Timeline connector */}
                    <div className="flex flex-col items-center">
                      <div className="size-12 rounded-2xl bg-gradient-primary shadow-glow-pink flex items-center justify-center text-white shrink-0">
                        {s.icon}
                      </div>
                      {i < 2 && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "100%" }}
                          transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                          className="w-0.5 flex-1 bg-gradient-to-b from-primary/40 to-transparent my-1"
                        />
                      )}
                    </div>

                    {/* Glass card */}
                    <div
                      className="flex-1 glass-pink rounded-2xl p-4 mb-1"
                      style={{ boxShadow: "0 4px 24px -8px oklch(0.65 0.28 350 / 0.15)" }}
                    >
                      <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Passo {s.step}</div>
                      <div className="font-black text-[17px] leading-tight mb-0.5">{s.title}</div>
                      <div className="text-xs text-muted-foreground">{s.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground"
            >
              <Shield className="size-3.5" />
              <span className="font-bold">+50.000 mulheres já seguem este protocolo</span>
            </motion.div>
          </Screen>
        )}

        {/* STEP 20 - EMOTIONAL OFFER */}
        {step === 20 && (
          <Screen
            key="s20"
            step={20}
            footer={
              <PrimaryButton
                variant="green"
                onClick={next}
                className="shadow-[0_10px_35px_rgba(34,197,94,0.55)] border border-emerald-400/30 hover:shadow-[0_12px_45px_rgba(34,197,94,0.7)] transition-all animate-pulse-glow"
              >
                SIM! Quero meu protocolo
              </PrimaryButton>
            }
          >
            <div className="text-center pt-2 max-w-sm mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1.5 text-xs font-black text-primary mb-4"
              >
                <Sparkles className="size-3" /> Protocolo gerado com sucesso
              </motion.div>
              
              <h2 className="text-[1.65rem] font-black tracking-tight leading-tight mb-2 text-foreground">
                {answers.name || "Linda"}, seu perfil indica grande potencial de transformação 💖
              </h2>
              <p className="text-sm text-muted-foreground mb-6">Seu protocolo personalizado está pronto.</p>

              {/* Pool Before/After Real Image */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-[2.2rem] overflow-hidden shadow-[0_12px_40px_-6px_oklch(0.65_0.28_350_/_0.15)] border border-pink-200/30 mb-6 bg-card"
              >
                <img
                  src={poolBeforeAfter}
                  alt="Transformação Real na Piscina"
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
                {/* Micro-glow indicator on top to represent high conversion trust */}
                <div className="absolute inset-0 bg-primary/5 pointer-events-none mix-blend-overlay" />
              </motion.div>

              {/* Premium Fitness Style Loading Plan Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden bg-white/70 backdrop-blur-xl border border-white/60 p-5 rounded-[2rem] shadow-[0_8px_32px_-4px_rgba(0,0,0,0.03)] text-left"
              >
                {/* Soft ambient background glow inside card */}
                <div className="absolute -top-10 -right-10 size-20 rounded-full bg-emerald-500/10 blur-xl pointer-events-none" />
                
                <div className="flex items-center justify-between text-xs font-black text-foreground mb-2">
                  <span className="tracking-wide uppercase opacity-75">Configuração do Plano</span>
                  <span className="text-success font-black tracking-wide">100% CONCLUÍDO</span>
                </div>
                
                {/* Elegant Smooth Loading Bar */}
                <div className="h-3.5 rounded-full bg-slate-100/80 border border-slate-200/40 p-0.5 overflow-hidden mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-gradient-cta rounded-full"
                  />
                </div>
                
                <div className="flex justify-between items-center text-xs mt-1">
                  <span className="font-bold text-muted-foreground">Status do Protocolo:</span>
                  <span className="font-extrabold text-foreground bg-emerald-100/50 text-emerald-700 px-2.5 py-0.5 rounded-full text-[10px] tracking-wide border border-emerald-200/20">
                    PRONTO PRA COMEÇAR
                  </span>
                </div>
              </motion.div>
            </div>
          </Screen>
        )}

        {/* STEP 21 - TRANSFORMATIONS */}
        {step === 21 && (
          <Screen
            key="s21"
            step={21}
            title="Histórias de transformação"
            subtitle="Veja quem já transformou o corpo com a Gelatina Mounjaro"
            footer={
              <PrimaryButton variant="pink" onClick={next}>
                Continuar <ChevronRight className="size-5" />
              </PrimaryButton>
            }
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 flex flex-col justify-center"
            >
              <TransformationCarousel />
            </motion.div>
          </Screen>
        )}

        {/* STEP 22 - SALES PAGE */}
        {step === 22 && <SalesPage key="s22" answers={answers} />}
      </AnimatePresence>
    </div>
  );
}

// ============ SALES PAGE ============
function SalesPage({ answers }: { answers: QuizAnswers }) {
  useEffect(() => {
    const t = setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.3 },
        colors: ["#ec4899", "#d946ef", "#a855f7", "#fbcfe8"],
      });
    }, 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-[100dvh] bg-gradient-soft">
      <ProgressBar current={21} total={TOTAL_STEPS} />

      <div className="max-w-md mx-auto px-5 pt-6 pb-44">
        {/* HERO */}
        <div className="text-center">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1.5 text-xs font-black text-primary mb-3"
          >
            <Sparkles className="size-3" /> Plano gerado com sucesso
          </motion.span>
          <h1 className="text-[1.7rem] font-black tracking-tight leading-[1.05] mb-2 text-foreground">
            {answers.name || "Linda"}, seu plano foi <span className="text-gradient-primary">gerado com sucesso</span> 💖
          </h1>
          <p className="text-muted-foreground text-sm">Seu protocolo personalizado está pronto.</p>
        </div>

        {/* 1. HERO TRANSFORMATION IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative my-6 rounded-[2rem] overflow-hidden border border-pink-200/30 bg-card"
          style={{ boxShadow: "0 16px 48px -8px oklch(0.65 0.28 350 / 0.18)" }}
        >
          <img
            src={salesHeroTransform}
            alt="Transformação Real"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          {/* Fade escuro elegante na parte inferior */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 via-black/15 to-transparent pointer-events-none" />
          {/* Micro glow rosa */}
          <div className="absolute inset-0 bg-primary/3 pointer-events-none mix-blend-overlay" />
        </motion.div>

        {/* 2. HEADLINE "PERCA ATÉ 13 KGS" */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center my-8"
        >
          <p className="text-lg font-bold text-foreground mb-1">Perca até</p>
          <div className="relative inline-block">
            {/* Glow behind the number */}
            <div className="absolute inset-0 bg-primary/20 blur-2xl scale-150 rounded-full animate-glow-pulse pointer-events-none" />
            <span className="relative text-7xl font-black text-gradient-primary leading-none tracking-tighter">
              13 Kgs
            </span>
          </div>
          <p className="text-lg font-bold text-foreground mt-1">nos próximos dias</p>
        </motion.div>

        {/* Result card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative overflow-hidden bg-white/70 backdrop-blur-xl border border-white/60 rounded-[2rem] p-5 text-center shadow-[0_8px_32px_-4px_rgba(0,0,0,0.04)]"
        >
          <p className="font-bold text-[15px]">
            Você poderá reduzir <span className="text-gradient-primary font-black">10kg</span> nas próximas semanas seguindo seu protocolo personalizado.
          </p>
        </motion.div>

        {/* 3. PLANO 1 MÊS DE TRATAMENTO (replaces Roadmap) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 rounded-[2rem] overflow-hidden shadow-soft"
        >
          <img
            src={salesPlano1Mes}
            alt="Seu Plano: 1 mês de tratamento"
            className="w-full h-auto"
            loading="lazy"
          />
        </motion.div>

        {/* CTA after plan */}
        <div className="mt-6">
          <motion.a
            href="#checkout"
            whileTap={{ scale: 0.97 }}
            className="block w-full py-4 rounded-2xl bg-gradient-cta text-white font-black text-[15px] text-center relative overflow-hidden animate-pulse-glow"
            style={{ boxShadow: "0 8px 28px -6px rgba(34, 197, 94, 0.5)" }}
          >
            <span className="relative z-10">QUERO MINHA GELATINA AGORA!</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" style={{ backgroundSize: "200% 100%" }} />
          </motion.a>
        </div>

        {/* 4. OFERTA COMPLETA (replaces "O que você vai receber") */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 rounded-[2rem] overflow-hidden border border-pink-200/20"
          style={{ boxShadow: "0 12px 40px -8px oklch(0.65 0.28 350 / 0.15)" }}
        >
          <img
            src={salesOfertaCompleta}
            alt="Gelatina Mounjaro + APP Protocolo Completo"
            className="w-full h-auto"
            loading="lazy"
          />
        </motion.div>

        {/* CTA after offer */}
        <div className="mt-6">
          <motion.a
            href="#checkout"
            whileTap={{ scale: 0.97 }}
            className="block w-full py-4 rounded-2xl bg-gradient-cta text-white font-black text-[15px] text-center relative overflow-hidden animate-pulse-glow"
            style={{ boxShadow: "0 8px 28px -6px rgba(34, 197, 94, 0.5)" }}
          >
            <span className="relative z-10">QUERO MINHA GELATINA AGORA!</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" style={{ backgroundSize: "200% 100%" }} />
          </motion.a>
        </div>

        {/* 5. METAS DO PLANO */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-10 relative overflow-hidden bg-white/80 backdrop-blur-xl border border-white/60 rounded-[2rem] p-6 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.04)]"
        >
          <div className="absolute -top-10 -right-10 size-24 rounded-full bg-success/10 blur-2xl pointer-events-none" />
          <h3 className="text-center font-black text-lg text-foreground mb-5">
            As metas do plano também incluem:
          </h3>
          <div className="space-y-3.5">
            {[
              "Reduzir o estresse",
              "Sinta-se mais saudável",
              "Autodisciplina",
              "Crie um hábito saudável",
              "Melhore o sono",
            ].map((meta) => (
              <div key={meta} className="flex items-center gap-3">
                <div className="size-7 rounded-lg bg-success/15 flex items-center justify-center shrink-0">
                  <Check className="size-4 text-success" strokeWidth={3} />
                </div>
                <span className="text-[15px] font-bold text-foreground">{meta}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA after goals */}
        <div className="mt-6">
          <motion.a
            href="#checkout"
            whileTap={{ scale: 0.97 }}
            className="block w-full py-4 rounded-2xl bg-gradient-cta text-white font-black text-[15px] text-center relative overflow-hidden animate-pulse-glow"
            style={{ boxShadow: "0 8px 28px -6px rgba(34, 197, 94, 0.5)" }}
          >
            <span className="relative z-10">QUERO MINHA GELATINA AGORA!</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" style={{ backgroundSize: "200% 100%" }} />
          </motion.a>
        </div>

        {/* 6. SELO DE GARANTIA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 relative overflow-hidden bg-white/80 backdrop-blur-xl border border-white/60 rounded-[2rem] p-6 text-center shadow-[0_8px_32px_-4px_rgba(0,0,0,0.04)]"
        >
          <img
            src={seloGarantia7Dias}
            alt="Selo de Garantia 7 Dias"
            className="mx-auto size-28 object-contain mb-4"
            loading="lazy"
          />
          <h3 className="text-xl font-black text-foreground mb-1">
            Garantia de devolução de dinheiro
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
            Caso não obtenha resultados visíveis, você pode solicitar reembolso em até 7 dias.
          </p>
        </motion.div>

        {/* PRICE */}
        <div className="mt-10 relative">
          <div className="absolute -inset-2 bg-gradient-glow blur-2xl opacity-60" />
          <div className="relative rounded-[2rem] bg-card border-2 border-primary/40 p-6 shadow-card text-center">
            <div className="inline-flex items-center gap-1 bg-destructive text-white text-[10px] font-black px-2.5 py-1 rounded-full mb-3">
              <Clock className="size-3" /> OFERTA ACABA EM BREVE
            </div>
            <div className="text-sm text-muted-foreground line-through">De R$ 197,00</div>
            <div className="my-1">
              <span className="text-sm font-bold align-top">R$</span>
              <span className="text-6xl font-black text-gradient-primary">25</span>
              <span className="text-3xl font-black text-gradient-primary">,90</span>
            </div>
            <div className="text-xs text-muted-foreground mb-5">ou 6x de R$ 5,32 sem juros</div>

            <motion.a
              href="#checkout"
              whileTap={{ scale: 0.97 }}
              className="block w-full py-5 rounded-2xl bg-gradient-cta text-white font-black text-base relative overflow-hidden animate-pulse-glow"
              style={{ boxShadow: "0 10px 40px -10px rgba(34, 197, 94, 0.55)" }}
            >
              <span className="relative z-10">QUERO MINHA GELATINA AGORA 💖</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full animate-shimmer" style={{ backgroundSize: "200% 100%" }} />
            </motion.a>
            <div className="flex items-center justify-center gap-3 mt-4 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1"><Lock className="size-3" /> Compra segura</span>
              <span className="flex items-center gap-1"><Shield className="size-3" /> Dados protegidos</span>
            </div>
          </div>
        </div>

        {/* INFINITE PROOF MARQUEE */}
        <div className="mt-10 -mx-5 overflow-hidden">
          <div className="flex gap-3 animate-marquee" style={{ width: "max-content" }}>
            {[...Array(2)].map((_, ri) => (
              <div key={ri} className="flex gap-3">
                {[
                  { n: "Ana", t: "Perdi 7kg!! 😍" },
                  { n: "Bia", t: "Receita maravilhosa 💖" },
                  { n: "Carol", t: "Já vi mudança em 1 semana" },
                  { n: "Dani", t: "Adorei, super fácil!" },
                  { n: "Eli", t: "Resultado real ❤️" },
                  { n: "Fer", t: "Recomendo demais!" },
                ].map((c, i) => (
                  <div key={i} className="w-56 shrink-0 glass rounded-2xl p-3">
                    <div className="flex items-center gap-1 mb-1">
                      {[1,2,3,4,5].map(s => <Star key={s} className="size-2.5 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <p className="text-xs font-bold">"{c.t}"</p>
                    <div className="text-[10px] text-muted-foreground mt-1">— {c.n}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-black mt-10 mb-4">Perguntas frequentes</h2>
        <div className="space-y-2">
          {[
            { q: "Como funciona?", a: "Você recebe acesso imediato ao protocolo completo, receitas e guia passo-a-passo no seu e-mail." },
            { q: "Em quanto tempo vejo resultados?", a: "A maioria das mulheres relata mudanças nos primeiros 7-14 dias." },
            { q: "Como recebo o acesso?", a: "Direto no seu e-mail logo após a compra. Acesso vitalício." },
            { q: "Os ingredientes são caros?", a: "Não! Tudo é simples e encontrado em qualquer supermercado." },
            { q: "Tem suporte?", a: "Sim! Equipe disponível para te ajudar em qualquer dúvida." },
          ].map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
        </div>

        {/* Footer CTA */}
        <div className="mt-10">
          <PrimaryButton variant="green">QUERO MINHA GELATINA AGORA!</PrimaryButton>
          <p className="text-center text-xs text-muted-foreground mt-3">
            Compra 100% segura · Garantia de 7 dias
          </p>
        </div>
      </div>

      {/* 7. STICKY CTA — green, pulsing, premium */}
      <div className="fixed bottom-0 inset-x-0 z-40 border-t border-border/40 px-5 py-3" style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(20px) saturate(180%)", WebkitBackdropFilter: "blur(20px) saturate(180%)" }}>
        <div className="max-w-md mx-auto flex items-center gap-3">
          <div>
            <div className="text-[10px] text-muted-foreground line-through">R$ 197</div>
            <div className="text-lg font-black text-gradient-primary leading-none">R$ 25,90</div>
          </div>
          <motion.a
            href="#checkout"
            whileTap={{ scale: 0.96 }}
            className="flex-1 py-3.5 rounded-2xl bg-gradient-cta text-white font-black text-sm text-center relative overflow-hidden animate-pulse-glow"
            style={{ boxShadow: "0 8px 28px -6px rgba(34, 197, 94, 0.5)" }}
          >
            <span className="relative z-10">QUERO MINHA GELATINA AGORA!</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" style={{ backgroundSize: "200% 100%" }} />
          </motion.a>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-card border border-border overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full p-4 flex items-center justify-between text-left">
        <span className="font-bold text-sm flex-1">{q}</span>
        <motion.div animate={{ rotate: open ? 45 : 0 }}><Plus className="size-4 text-primary" /></motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 text-sm text-muted-foreground">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
