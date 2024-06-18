const express = require("express");
const fs = require("fs");
const puppeteer = require("puppeteer");
const handlebars = require("handlebars");
const path = require("path");
// const mime = require("mime");


//const templateSource = fs.readFileSync("ALonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("AKonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("AZonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("ARonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("CAonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("COonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("CTonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("DConceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("FLonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("GAonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("HIonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("IDonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("ILonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("INonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("IAonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("KSonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("KYonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("LAonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("MEonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("MDonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("MAonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("MIonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("MNonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("MSonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("MOonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("MTonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("NEonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("NVonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("NHonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("NJonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("NMonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("NYonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("NConceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("NDonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("OHonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("OKonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("ORonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("PAonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("RIonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("SConceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("SDonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("TNonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("TXonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("UTonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("VTonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("VAonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("WAonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("WVonceCompleteTemplate.hbs", "utf8");
//const templateSource = fs.readFileSync("WIonceCompleteTemplate.hbs", "utf8");
const templateSource = fs.readFileSync("WYonceCompleteTemplate.hbs", "utf8");

// const templateSource = fs.readFileSync("paramountCocIssue.hbs", "utf8");
//const templateSource = fs.readFileSync("onceCoverageDocument.hbs", "utf8");

//const templateSource = fs.readFileSync("onceCompleteTemplate.hbs", "utf-8");
// const templateSource = fs.readFileSync("test1.hbs", "utf-8");
// const templateSource = fs.readFileSync("paramountCocIssue.hbs", "utf8");
// const templateSource = fs.readFileSync("onceCoverageDocument.hbs", "utf8");

// const templateSource = fs.readFileSync("oncePolicyTemplate.hbs", "utf8");
// const templateSource = fs.readFileSync("oncePolicyEmail.hbs", "utf8");
//const templateSource = fs.readFileSync("onceServiceSuiteTemplate.hbs", "utf8");
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

function getImageBase64(filePath) {
  const image = fs.readFileSync(filePath);
  return `data:image/png;base64,${image.toString("base64")}`;
}

app.get("/document", async (req, res) => {
  const template = handlebars.compile(templateSource);
  const imagePath = path.join(__dirname, "images", "once-logo.png");

  fs.writeFileSync("imageB64.txt", getImageBase64(imagePath));

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
    imageBase64: getImageBase64(imagePath),
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
  await page.setContent(html, {
    waitUntil: "domcontentloaded",
  });
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
