/** @type {import('tailwindcss').Config} */
export default {
    // Mantienes tu configuración de alias para Vite
    vite: {
        resolve: {
            alias: {
                '@':'/src'
            }
        }
    },
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    ],
    theme: {
        extend: {
            fontFamily: {
                // 'jakarta' se usará como la clase font-jakarta
                'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
                // 'opensans' se usará como la clase font-opensans
                'opensans': ['"Open Sans"', 'sans-serif'],

                'newsreader': ['"Newsreader"', 'sans-serif']
            },
            colors: {
                grisClaroFondo: '#A6A6A6',
                grisClaroTextoB: "#5B6063",
                grisClaroTextoA: '#64748B',
                azulOscuro: '#2F638F',
                celesteClaro: "#9BCBFD",
            },
        },
    },
    plugins: [],
}
