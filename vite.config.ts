import * as path from 'path';
import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePluginFonts } from 'vite-plugin-fonts';

export default defineConfig({
    resolve: {
        alias: {
            '~components': path.resolve(__dirname, './src/components/'),
            '~utils': path.resolve(__dirname, './src/utils/'),
            '~scss': path.resolve(__dirname, './src/scss/'),
            '~src': path.resolve(__dirname, './src'),
        },
    },
    plugins: [
        react({
            exclude: /\.stories\.(t|j)sx?$/,
            include: '**/*.tsx',
            jsxRuntime: 'classic',
        }),
        dts({
            insertTypesEntry: true,
        }),
        tsconfigPaths(),
        VitePluginFonts({
            custom: {
                families: [
                    { name: 'Nexa', local: 'Nexa', src: './src/assets/fonts/nexa/*.woff2' },
                    { name: 'OpenSans', local: 'OpenSans', src: './src/assets/fonts/opensans/*.woff2' },
                ],
            },
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, './src/index.ts'),
            name: 'minimal-components',
            formats: ['es', 'umd'],
            fileName: format => `index.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'styled-components'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                },
            },
        },
    },
});
