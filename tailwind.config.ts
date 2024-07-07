import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

export default {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                'frankfurter': ['"Frankfurter Highlight"', 'cursive'],
                'frankfurter-medium': ['"Frankfurter Medium"', 'cursive'],
                'schoolbell': ['Schoolbell', 'cursive'],
                'league-spartan': ['"League Spartan"', 'sans-serif'],
            },
        },
    },
    plugins: [daisyui],
} satisfies Config