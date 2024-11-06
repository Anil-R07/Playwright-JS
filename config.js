const { Before, BeforeAll, After, AfterAll, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

setDefaultTimeout(60000); // Set default timeout

// Launch the browser
BeforeAll(async function () {
    global.browser = await chromium.launch({
        headless: false,
        slowMo: 1000,
        browserContextOptions: {
            viewPort: null,
        },
    });
    const context = await browser.newContext();
    page = await context.newPage();
});

// Quit the browser
AfterAll(async function(){
    await global.browser.close();
})

// Take a screenshot for each scenario
After(async function (testCase) {
    const screenshotPath = `screenshots/${Date.now()}_${testCase.result.status}.png`;
    await global.page.screenshot({ path: screenshotPath });
});