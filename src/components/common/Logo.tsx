import React from 'react';
import { Link } from 'react-router-dom';
import logoLightSvg from '../../assets/logo/logo-light.svg';
import logoDarkSvg from '../../assets/logo/logo-dark.svg';

interface LogoProps {
  variant?: 'light' | 'dark'; // 'light' = dark charcoal text on white bg; 'dark' = white text on dark bg
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  linkToHome?: boolean;
}

/**
 * Official Techno Path Master SVG Logo Component
 * Pixel-accurate vector representation of the official company brand mark
 */
export const TechnoPathOfficialSvg: React.FC<{
  variant?: 'light' | 'dark';
  className?: string;
}> = ({ variant = 'light', className = '' }) => {
  const textColor = variant === 'dark' ? '#FFFFFF' : '#202329';
  const orange = '#F4510B';

  return (
    <svg
      viewBox="0 0 320 144"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="TECHNO PATH - IT Solutions Nepal"
    >
      <style>
        {`
          .tp-text {
            font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
            font-weight: 900;
            font-size: 56px;
            letter-spacing: 0.05em;
          }
        `}
      </style>

      {/* Row 1: TECHN + Power Button 'O' */}
      <text x="14" y="60" fill={textColor} className="tp-text">
        TECHN
      </text>

      {/* Orange Power Button 'O' */}
      <g transform="translate(236, 14)">
        {/* Open circular power ring */}
        <path
          d="M 16 12 A 22 22 0 1 0 36 12"
          stroke={orange}
          strokeWidth="9.5"
          strokeLinecap="square"
          fill="none"
        />
        {/* Vertical power switch bar */}
        <rect x="21" y="2" width="10" height="25" rx="1" fill={orange} />
      </g>

      {/* Row 2: P + Stylized Path 'A' + TH */}
      <text x="50" y="128" fill={textColor} className="tp-text">
        P
      </text>

      {/* Orange Stylized 'A' / Path & Node Emblem */}
      <g transform="translate(94, 68)">
        {/* Top circular node */}
        <circle cx="36" cy="10" r="6" fill={orange} />
        {/* Outer guide legs */}
        <path d="M 31 21 L 11 63" stroke={orange} strokeWidth="3.5" strokeLinecap="square" />
        <path d="M 41 21 L 61 63" stroke={orange} strokeWidth="3.5" strokeLinecap="square" />
        {/* Inner solid upward chevron arrow with notched base */}
        <path d="M 36 23 L 55 58 L 36 48 L 17 58 Z" fill={orange} />
      </g>

      <text x="164" y="128" fill={textColor} className="tp-text">
        TH
      </text>
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  showSubtitle = true,
  className = '',
  linkToHome = true
}) => {
  // Height mappings matching standard design systems
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20'
  }[size];

  const subtitleColor = variant === 'dark' ? 'text-neutral-400' : 'text-neutral-500';

  const logoGraphic = (
    <div className="flex items-center">
      {/* Official Master SVG Logo File imported from src/assets/logo/ */}
      <img
        src={variant === 'dark' ? logoDarkSvg : logoLightSvg}
        alt="TECHNO PATH - Official Logo"
        className={`${heightClasses} w-auto object-contain transition-transform duration-200 group-hover:scale-102`}
        onError={(e) => {
          // If image element has an issue, fallback directly to inline SVG component
          const target = e.currentTarget;
          target.style.display = 'none';
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = 'block';
        }}
      />
      {/* Fallback inline SVG element (hidden by default unless img onError triggers) */}
      <div style={{ display: 'none' }}>
        <TechnoPathOfficialSvg variant={variant} className={`${heightClasses} w-auto`} />
      </div>
    </div>
  );

  const content = (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {logoGraphic}
      {showSubtitle && (
        <div className="hidden sm:flex flex-col justify-center border-l border-neutral-300/60 dark:border-neutral-700/60 pl-2.5 leading-none py-0.5">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#F4510B]">
            IT SOLUTIONS
          </span>
          <span className={`text-[9px] font-semibold tracking-wider mt-0.5 ${subtitleColor}`}>
            Bharatpur, Nepal
          </span>
        </div>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link
        to="/"
        className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4510B] rounded-lg group"
        aria-label="Techno Path - Home"
      >
        {content}
      </Link>
    );
  }

  return content;
};
