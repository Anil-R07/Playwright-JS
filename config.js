require('dotenv').config()
const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const fs = require('fs');

setDefaultTimeout(60000); // Set Default timeout

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

    //Login to application 
    const url = process.env.URL;
    const username = process.env.APP_USERNAME;
    const password = process.env.APP_PASSWORD;
    const usernameLocator = "input[name='username']";
    const passwordLocator = "input[name='password']";
    const loginBtn = "input[value='Log In']";

    //Navigate to the application 
    await page.goto(url);
    //Enter Username, Password and clicking on login button 
    await page.fill(usernameLocator, username);
    console.log("Entered Username as "+username);
    await page.fill(passwordLocator, password);
    console.log("Entered Password as "+password);
    await page.click(loginBtn);
    console.log("Clicked on Login button");
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