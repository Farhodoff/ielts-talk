import React from 'react';

interface FlagProps {
    className?: string;
    size?: number;
}

/**
 * Clean SVG Vector Flag of Uzbekistan
 * Eliminates broken unicode emoji rendering across different operating systems.
 */
export const UzbekistanFlag: React.FC<FlagProps> = ({ className = 'w-4 h-3 rounded-[2px]', size }) => (
    <svg
        viewBox="0 0 500 250"
        width={size ? size * 1.6 : undefined}
        height={size || undefined}
        className={`inline-block shrink-0 shadow-xs overflow-hidden ${className}`}
        aria-hidden="true"
    >
        {/* Blue stripe */}
        <rect width="500" height="80" fill="#0099B5" />
        {/* Red separator 1 */}
        <rect y="80" width="500" height="5" fill="#CE1126" />
        {/* White stripe */}
        <rect y="85" width="500" height="80" fill="#FFFFFF" />
        {/* Red separator 2 */}
        <rect y="165" width="500" height="5" fill="#CE1126" />
        {/* Green stripe */}
        <rect y="170" width="500" height="80" fill="#1EB53A" />
        
        {/* Crescent */}
        <circle cx="70" cy="40" r="28" fill="#FFFFFF" />
        <circle cx="78" cy="40" r="24" fill="#0099B5" />

        {/* 12 Stars (simplified crisp layout) */}
        <g fill="#FFFFFF">
            {/* Row 1 (3 stars) */}
            <circle cx="130" cy="22" r="3.5" />
            <circle cx="150" cy="22" r="3.5" />
            <circle cx="170" cy="22" r="3.5" />
            {/* Row 2 (4 stars) */}
            <circle cx="110" cy="40" r="3.5" />
            <circle cx="130" cy="40" r="3.5" />
            <circle cx="150" cy="40" r="3.5" />
            <circle cx="170" cy="40" r="3.5" />
            {/* Row 3 (5 stars) */}
            <circle cx="90" cy="58" r="3.5" />
            <circle cx="110" cy="58" r="3.5" />
            <circle cx="130" cy="58" r="3.5" />
            <circle cx="150" cy="58" r="3.5" />
            <circle cx="170" cy="58" r="3.5" />
        </g>
    </svg>
);

/**
 * Clean SVG Vector Flag of United Kingdom (UK)
 */
export const UKFlag: React.FC<FlagProps> = ({ className = 'w-4 h-3 rounded-[2px]', size }) => (
    <svg
        viewBox="0 0 60 30"
        width={size ? size * 2 : undefined}
        height={size || undefined}
        className={`inline-block shrink-0 shadow-xs overflow-hidden ${className}`}
        aria-hidden="true"
    >
        <clipPath id="uk-s">
            <path d="M0,0 v30 h60 v-30 z"/>
        </clipPath>
        <clipPath id="uk-t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
        </clipPath>
        <g clipPath="url(#uk-s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-t)" stroke="#C8102E" strokeWidth="4"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
        </g>
    </svg>
);
