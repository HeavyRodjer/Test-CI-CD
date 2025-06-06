import { defineConfig } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    /* Run tests in files in parallel */
    timeout: 2 * 60 * 1000,
    expect: {
        timeout: 20 * 1000
    },
    fullyParallel: false,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: 1,
    // workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [['html', { open: 'never' }], ['junit', { outputFile: 'test-results/results.xml' }]],

    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        // baseURL: 'http://127.0.0.1:3000',

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
        headless: false,
        screenshot: 'only-on-failure',
        userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.6613.18 Safari/537.36',
        video: 'on',
        
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: {
                baseURL: 'https://dev.selfservice.bpm.mhp.ua/login',
                launchOptions: {
                    args: ['--start-maximized']
                },
                viewport: { width: 1200, height: 900 },
                navigationTimeout: 40 * 1000
            },
        },
    ],
});
