import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  FolderCheck, 
  Activity, 
  Clock, 
  Award, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';

interface StatsCounterProps {
  onOpenQuoteModal?: (service?: string) => void;
}

interface StatItem {
  id: string;
  targetValue: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  label: string;
  subLabel: string;
  icon: React.ReactNode;
  highlightText: string;
}

export const StatsCounter: React.FC<StatsCounterProps> = ({ onOpenQuoteModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats: StatItem[] = [
    {
      id: 'projects',
      targetValue: 100,
      suffix: '+',
      label: 'Projects Completed',
      subLabel: 'Across Nepal',
      icon: <FolderCheck className="w-6 h-6 text-[#F4510B]" />,
      highlightText: 'Turnkey network cabling, server datacenters, hospital HMIS & cloud migrations'
    },
    {
      id: 'clients',
      targetValue: 50,
      suffix: '+',
      label: 'Enterprise Clients',
      subLabel: 'Active Institutional Partners',
      icon: <Building2 className="w-6 h-6 text-[#F4510B]" />,
      highlightText: 'Hospitals, medical colleges, cooperatives, financial institutions & enterprises'
    },
    {
      id: 'uptime',
      targetValue: 99.98,
      decimals: 2,
      suffix: '%',
      label: 'Network & Server Uptime',
      subLabel: 'Mission-Critical Reliability',
      icon: <Activity className="w-6 h-6 text-[#F4510B]" />,
      highlightText: 'High-availability failover architectures and automated backup protection'
    },
    {
      id: 'experience',
      targetValue: 10,
      suffix: '+',
      label: 'Years of Excellence',
      subLabel: 'Regional IT Leadership',
      icon: <Award className="w-6 h-6 text-[#F4510B]" />,
      highlightText: 'Engineers on the ground in Bharatpur, Chitwan serving all 7 provinces'
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-[#202329] text-white relative overflow-hidden border-y border-neutral-800"
      id="successful-projects"
    >
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stats-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#FFFFFF" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stats-grid)" />
        </svg>
      </div>

      {/* Radial Gradient Glow in Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F4510B]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F4510B]">
              <TrendingUp className="w-4 h-4" />
              <span>Proven Track Record & Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Successful Projects & Real Numbers
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              From enterprise data centers and campus fiber backbones to hospital emergency networks, our numbers reflect real engineering impact delivered across Nepal.
            </p>
          </div>

          {onOpenQuoteModal && (
            <button
              onClick={() => onOpenQuoteModal('Consultation for New Project Implementation')}
              className="px-6 py-3.5 bg-[#F4510B] hover:bg-[#DC4607] text-white rounded-xl text-xs font-semibold shadow-lg transition-all duration-150 active:scale-95 flex items-center gap-2 self-start md:self-auto shrink-0 group"
            >
              <span>Start Your Project With Us</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="p-7 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-[#F4510B]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle top edge glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F4510B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Icon & Category */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-neutral-800 text-[#F4510B] group-hover:bg-[#F4510B] group-hover:text-white transition-colors duration-200">
                    {stat.icon}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-neutral-500 uppercase tracking-wider">
                    {stat.subLabel}
                  </span>
                </div>

                {/* Animated Counter Number */}
                <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight mb-2 flex items-baseline">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <AnimatedNumber 
                    target={stat.targetValue} 
                    decimals={stat.decimals || 0} 
                    animate={isVisible} 
                  />
                  <span className="text-[#F4510B] ml-0.5">{stat.suffix}</span>
                </div>

                {/* Stat Title */}
                <h3 className="text-base font-bold text-neutral-100 group-hover:text-[#F4510B] transition-colors mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {stat.highlightText}
                </p>
              </div>

              {/* Bottom Micro Indicator */}
              <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center gap-1.5 text-[11px] text-neutral-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Verified Techno Path Metric</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional 24/7 SLA & Regional Trust Ribbon */}
        <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
          <div className="flex flex-wrap items-center gap-6 text-neutral-300">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-white">24 / 7 Live Incident Response</span>
            </div>
            <div className="hidden sm:block text-neutral-600">|</div>
            <div className="flex items-center gap-2">
              <span className="text-[#F4510B] font-bold">✓</span>
              <span>10G Optical Fiber Infrastructure</span>
            </div>
            <div className="hidden sm:block text-neutral-600">|</div>
            <div className="flex items-center gap-2">
              <span className="text-[#F4510B] font-bold">✓</span>
              <span>On-Site Bharatpur Engineering Depot</span>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-neutral-400">Need guaranteed SLA for your institute?</span>
            <button
              onClick={() => onOpenQuoteModal && onOpenQuoteModal('Enterprise SLA Agreement')}
              className="text-[#F4510B] hover:text-white font-bold inline-flex items-center gap-1 hover:underline transition-colors"
            >
              <span>View SLA Details →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Animated number hook component with smooth ease-out interpolation
 */
const AnimatedNumber: React.FC<{ 
  target: number; 
  decimals: number; 
  animate: boolean; 
}> = ({ target, decimals, animate }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!animate) return;

    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      // Quartic ease-out curve: 1 - Math.pow(1 - progress, 4)
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const nextVal = easeOut * target;

      setCurrent(nextVal);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCurrent(target);
      }
    };

    const animFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrame);
  }, [animate, target]);

  return (
    <span className="tabular-nums">
      {decimals > 0 ? current.toFixed(decimals) : Math.floor(current)}
    </span>
  );
};
