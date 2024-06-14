const express = require("express");
const fs = require("fs");
const puppeteer = require("puppeteer");
const handlebars = require("handlebars");
const path = require("path");
// const mime = require("mime");

// const templateSource = fs.readFileSync("paramountCocIssue.hbs", "utf8");
const templateSource = fs.readFileSync("onceCoverageDocument.hbs", "utf8");
// const templateSource = fs.readFileSync("oncePolicyTemplate.hbs", "utf8");
// const templateSource = fs.readFileSync("oncePolicyEmail.hbs", "utf8");
// const templateSource = fs.readFileSync("onceServiceSuiteTemplate.hbs", "utf8");
// const templateSource = fs.readFileSync("onceSignaturePage.hbs", "utf8");
// const templateSource = fs.readFileSync("gnpWelcomeKit.hbs", "utf8");
// const templateSource = fs.readFileSync("modifyGnp.hbs", "utf8");
// const templateSource = fs.readFileSync("gnp.hbs", "utf8");
// const testTemplateSource = fs.readFileSync("testTemp.hbs", "utf-8");
// const allianzTemplate = fs.readFileSync("allianz.hbs", "utf-8");
// const privacyStatementforCA = fs.readFileSync(
//   "privacyStatementforCA.hbs",
//   "utf-8"
// );

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(8080, () => {
  console.log("app listening on 8080");
});

app.get("/document", async (req, res) => {
  const template = handlebars.compile(templateSource);

  let data = {
    insurer_name: "Tony Stark",
    location_address: "Block Top",
    location_street: "Stark Tower",
    location_city: "NYC",
    location_zip: "09420",
    issue_date: "2024-05-05",
    expiration_date: "2029-05-05",
    item_insured: "Ring",
    insured_value: "$ 1,000",
    premium: "$ 200",
    deductible: "$ 0",
  };

  const html = template(data);

  let puppeteerConfig = {
    headless: "new",
    args: [
      "--single-process",
      "--no-zygote",
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
    ],
    devtools: false,
  };

  const browser = await puppeteer.launch(puppeteerConfig);
  const page = await browser.newPage();
  await page.setContent(html);
  // await page.waitForSelector("img");
  // await page.screenshot({ path: "screenshot.png" });

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
  });

  await browser.close();

  res.set("Content-Type", "application/pdf");
  const testTest = pdf;
  res.send(testTest);
});
