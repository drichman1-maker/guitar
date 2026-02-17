import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#ff4d00", // SonicAtlas Orange?
                secondary: "#1a1a1a",
            }
        },
    },
    plugins: [],
};
export default config;
