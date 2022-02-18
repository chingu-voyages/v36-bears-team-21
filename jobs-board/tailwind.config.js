module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        desktop: "url('../images/bg-header-desktop.svg')",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['desktop'],
    },
  },
  plugins: [],
};
