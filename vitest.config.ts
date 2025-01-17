import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['./test/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        environment: 'happy-dom',
        globals: true,
    },
});
