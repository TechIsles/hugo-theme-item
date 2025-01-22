const { black } = require("daisyui/src/theming/themes");

module.exports = {
    darkMode: ['selector', '[data-theme="dark"]'],
    content: [
        "./themes/**/layouts/**/*.html",
        "./content/**/layouts/**/*.html",
        "./layouts/**/*.html",
        "./content/**/*.html"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
        require('daisyui')
    ],
    daisyui: {
        themes: [
            {
                dark: {
                ...require("daisyui/src/theming/themes")["dark"],
                "base-100": "#191919",
                "base-200": "#202020",
                "base-300": "#232323",
              },
            },
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                    "base-100": "#ffffff",
                    "base-200": "#f2f2f2",
                    "base-300": "#e5e6e6",
                }
            }
          ],
        darkTheme: "dark",
        logs: false
    },
    safelist: [
        'badge-neutral',
        'badge-primary',
        'badge-secondary',
        'badge-accent',
        'badge-ghost'
    ]
}
