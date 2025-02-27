import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: '375px',
            md: '768px',
            lg: '1200px',
        },
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    md: "2rem",
                    lg: "4rem",
                }
            },
            fontFamily: {
                sans: "var(--font-archivo)"
            },
            colors: {
                'red-orange': {
                    500: '#FF4500', // Example color, replace with your desired color
                }
            }
        },
    },
    plugins: [],
};
export default config;
