/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Enable class-based dark mode
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                // Primary palette (HSL vars)
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // IELTS Official Academic Palette
                ielts: {
                    navy: "#0A2540",
                    blue: "#1D4ED8",
                    royal: "#2563EB",
                    crimson: "#DC2626",
                    gold: "#F59E0B",
                    amber: "#D97706",
                    slate: "#0F172A",
                },
                // Sumi-e & Hanko compatibility aliases
                hanko: {
                    DEFAULT: "#1D4ED8",
                    hover: "#1E40AF",
                    dark: "#172554",
                    light: "#EFF6FF",
                },
                gold: {
                    DEFAULT: "#F59E0B",
                    hover: "#D97706",
                    light: "#FEF3C7",
                },
                sumi: {
                    bg: "#0B0F17",
                    card: "#0F172A",
                    elevated: "#1E293B",
                    border: "#1E293B",
                    muted: "#94A3B8",
                    text: "#F8FAFC",
                },
                // Exact hex palette for design spec
                "bg-light": "#F8FAFC",
                "surface-light": "#FFFFFF",
                "surface-elevated-light": "#F1F5F9",
                "text-light": "#0F172A",
                "muted-light": "#64748B",
                "border-light": "#E2E8F0",
                "primary-light": "#1D4ED8",
                "cyan-light": "#0EA5E9",
                "accent-red-light": "#DC2626",
                "bg-dark": "#0B0F17",
                "surface-dark": "#0F172A",
                "surface-elevated-dark": "#1E293B",
                "text-dark": "#F8FAFC",
                "muted-dark": "#94A3B8",
                "border-dark": "#1E293B",
                "primary-dark": "#3B82F6",
                "cyan-dark": "#38BDF8",
                "accent-red-dark": "#EF4444",
            },
            boxShadow: {
                xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
                display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
                serif: ['Merriweather', 'Newsreader', 'serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            // 3D Transform utilities for flashcard flip
            transformStyle: {
                '3d': 'preserve-3d',
            },
            backfaceVisibility: {
                'hidden': 'hidden',
            },
            perspective: {
                '1000': '1000px',
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require("tailwindcss-animate"),
    ],
}
