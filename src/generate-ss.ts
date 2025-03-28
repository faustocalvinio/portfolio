import * as puppeteer from "puppeteer";
import * as path from "path";
(async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto("http://localhost:4321");
  const screenshotPath = path.join(
    process.cwd(),
    "public",
    "ss-portfolio.jpeg",
  );
  await page.screenshot({ path: screenshotPath });

  const page2 = await browser.newPage();
  await page2.setViewport({ width: 1440, height: 900 });
  await page2.goto("http://localhost:4321/en");
  const screenshotPath2 = path.join(
    process.cwd(),
    "public",
    "ss-portfolio-en.jpeg",
  );
  await page2.screenshot({ path: screenshotPath2 });

  await browser.close();

  console.log(
    "Capturas de pantalla guardadas como /public/ss-portfolio.jpeg y /public/ss-portfolio-en.jpeg",
  );
})();
