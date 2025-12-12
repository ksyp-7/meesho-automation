const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.goto("https://github.com", { waitUntil: "networkidle2" });

  console.log("GitHub opened successfully");

  await browser.close();
})();
