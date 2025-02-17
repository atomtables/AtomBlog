import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                "scheme-green": {
                    100: 'rgb(20, 40, 20)',
                    200: 'rgb(40, 80, 40)',
                    300: 'rgb(60, 120, 60)',
                    400: 'rgb(80, 160, 80)',
                    500: 'rgb(100, 200, 100)',
                    600: 'rgb(120, 240, 120)',
                    700: 'rgb(140, 255, 140)',
                    800: 'rgb(160, 255, 160)',
                    900: 'rgb(180, 255, 180)',
                },
                "scheme-blue": {
                    100: 'rgb(10, 10, 40)',
                    200: 'rgb(20, 20, 80)',
                    300: 'rgb(30, 30, 120)',
                    400: 'rgb(40, 40, 160)',
                    500: 'rgb(50, 50, 200)',
                    600: 'rgb(60, 60, 240)',
                    700: 'rgb(70, 70, 255)',
                    800: 'rgb(80, 80, 255)',
                    900: 'rgb(90, 90, 255)',
                },
                "neutral-gray": {
                    100: 'rgb(20, 20, 20)',
                    200: 'rgb(40, 40, 40)',
                    300: 'rgb(60, 60, 60)',
                    400: 'rgb(80, 80, 80)',
                    500: 'rgb(100, 100, 100)',
                    600: 'rgb(120, 120, 120)',
                    700: 'rgb(140, 140, 140)',
                    800: 'rgb(160, 160, 160)',
                    900: 'rgb(255, 180, 180)',
                },
                "aquamarine": "#7FFFD4",
            },
            textShadow: {
                sm: '0 1px 2px var(--tw-shadow-color)',
                DEFAULT: '0 2px 4px var(--tw-shadow-color)',
                lg: '0 8px 16px var(--tw-shadow-color)',
            },
        },
    },
    plugins: [
        plugin(({matchUtilities, theme}) => {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value,
                    }),
                },
                {values: theme('textShadow')}
            )
        }),
    ],
    safelist: [
        "border-1",
        "border-white",
    ]
}

