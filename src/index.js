// puppeteer.js
const puppeteer = require("puppeteer");

async function launchBrowser() {
  return puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });
}

async function openGithub(page) {
  await page.goto("https://supplier.meesho.com/panel/v3/new/root/login", {
    waitUntil: "networkidle2",
  });
}

// async function clickLogin(page) {
//   await page.waitForSelector('a[href="/login"]');
//   await page.click('a[href="/login"]');
// }

(async () => {
  const browser = await launchBrowser();
  const page = await browser.newPage();

  await openGithub(page);
  //   await clickLogin(paccge);
  console.log("ABLE TO OPEN PANEL");
  await browser.close();
})();
