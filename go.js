const puppeteer = require('puppeteer');

const open = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    const response = await page.goto('https://example.org/');
    console.log(response._headers.status);
    // await page.screenshot({path: 'example.png'});

    await browser.close();
};



let testCollection = [];

for (let i = 0; i < 10; i++) {
    testCollection.push(open());
}

Promise.all(testCollection);
