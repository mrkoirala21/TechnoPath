import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  category?: 'datacenter' | 'team' | 'healthcare' | 'cybersecurity' | 'cloud' | 'general';
}

/**
 * Universal Image component with graceful error handling and instant fallback
 * Prevents broken image icons in production deployments
 */
export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc,
  category = 'general',
  onError,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasError) {
      setHasError(true);
      if (onError) {
        onError(e);
      }
    }
  };

  if (hasError) {
    if (fallbackSrc) {
      return (
        <img
          src={fallbackSrc}
          alt={alt}
          className={className}
          referrerPolicy="no-referrer"
          {...rest}
        />
      );
    }

    // High quality themed SVG fallback
    const titles: Record<string, string> = {
      datacenter: 'Enterprise IT Infrastructure',
      team: 'Techno Path Engineering Team',
      healthcare: 'Healthcare IT Systems & HMIS',
      cybersecurity: 'Cybersecurity Operations Center',
      cloud: 'Cloud & DevOps Architecture',
      general: 'Techno Path IT Solutions'
    };

    return (
      <div className={`w-full h-full min-h-[140px] bg-[#202329] text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="fallback-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#FFFFFF" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#fallback-grid)" />
          </svg>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-10 h-10 rounded-xl bg-[#F4510B]/20 text-[#F4510B] flex items-center justify-center mb-2 font-mono font-bold text-xs">
            TP
          </div>
          <div className="text-xs font-bold text-white tracking-wide">
            {titles[category] || titles.general}
          </div>
          <div className="text-[10px] text-neutral-400 mt-1">
            Bharatpur, Chitwan, Nepal
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      referrerPolicy="no-referrer"
      {...rest}
    />
  );
};
