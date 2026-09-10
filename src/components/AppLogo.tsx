import React from 'react';
import { GraduationCap } from 'lucide-react';

interface AppLogoProps {
    size?: 'sm' | 'md' | 'lg';
    collapsed?: boolean;
    showText?: boolean;
    className?: string;
}

export const AppLogo: React.FC<AppLogoProps> = ({
    size = 'md',
    collapsed = false,
    showText = true,
    className = ''
}) => {
    const sizeConfig = {
        sm: {
            box: 'w-8 h-8 rounded-xl',
            iconSize: 18,
            title: 'text-base',
            sub: 'text-[9px]'
        },
        md: {
            box: 'w-10 h-10 rounded-2xl',
            iconSize: 22,
            title: 'text-lg',
            sub: 'text-[10px]'
        },
        lg: {
            box: 'w-13 h-13 rounded-2xl',
            iconSize: 28,
            title: 'text-xl',
            sub: 'text-[11px]'
        }
    };

    const currentSize = sizeConfig[size];

    return (
        <div className={`flex items-center gap-3 select-none ${className}`}>
            {/* Academic Emblem Container */}
            <div className={`relative flex items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 shadow-xs group transition-all duration-300 hover:border-indigo-500/50 shrink-0 ${currentSize.box}`}>
                <GraduationCap size={currentSize.iconSize} className="relative z-10 drop-shadow-xs transition-transform duration-200 group-hover:scale-105" />
            </div>

            {/* Brand Title with Clean Academic Typography */}
            {showText && !collapsed && (
                <div className="flex flex-col justify-center animate-in fade-in duration-200">
                    <div className="flex items-center gap-1.5 leading-none">
                        <span className={`font-display font-black tracking-tight text-foreground ${currentSize.title}`}>
                            IELTS
                        </span>
                        <span className={`font-display font-black tracking-tight text-indigo-600 dark:text-indigo-400 ${currentSize.title}`}>
                            Talk
                        </span>
                    </div>
                    <span className={`tracking-widest uppercase font-bold text-muted-foreground/80 mt-0.5 ${currentSize.sub}`}>
                        Academic & General
                    </span>
                </div>
            )}
        </div>
    );
};

export default AppLogo;
