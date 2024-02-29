

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00AEEF",
        secondary: "#003f57",
        muted: "#A5A5A5",
        text: "#3F3F3F",
        dark: "#1A1A1A",
        success: "#33FFB3",
        warning: "#FF9C33",
        error: "#FF3333",
      },
      screens: {
        "xs": "480px",
        // => @media (min-width: 480px) { ... }
        "sm": "640px",
        // => @media (min-width: 640px) { ... }
        "md": "768px",
        // => @media (min-width: 768px) { ... }
        "lg": '1024px',
        // => @media (min-width: 1024px) { ... }
        "xl": "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      container: {
        center: true,
      },
      fontFamily: {
        "sans": ["Marko One"],
        "serif": ["Bree Serif"]
      }
    },
  },

  plugins: [],
}