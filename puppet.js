const express = require("express");
const fs = require("fs");
const puppeteer = require("puppeteer");
const handlebars = require("handlebars");
const path = require("path");
// const mime = require("mime");

<<<<<<< HEAD
//const templateSource = fs.readFileSync("ALSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("AKSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("AZSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("ARSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("CASurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("COSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("CTSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("DCSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("FLSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("GASurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("HISurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("IDSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("ILSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("INSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("IASurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("KSSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("KYSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("LASurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("MESurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("MDSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("MASurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("MISurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("MNSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("MSSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("MOSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("MTSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("NESurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("NVSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("NHSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("NJSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("NMSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("NYSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("NCSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("NDSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("OHSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("OKSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("ORSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("PASurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("RISurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("SCSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("SDSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("TNSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("TXSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("UTSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("VTSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("VASurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("WASurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("WVSurplusLinesNotice.hbs", "utf8");
//const templateSource = fs.readFileSync("WISurplusLinesNotice.hbs", "utf8");
const templateSource = fs.readFileSync("WYSurplusLinesNotice.hbs", "utf8");

// const templateSource = fs.readFileSync("paramountCocIssue.hbs", "utf8");
//const templateSource = fs.readFileSync("onceCoverageDocument.hbs", "utf8");
//const templateSource = fs.readFileSync("onceCompleteTemplate.hbs", "utf-8");
// const templateSource = fs.readFileSync("test1.hbs", "utf-8");
// const templateSource = fs.readFileSync("paramountCocIssue.hbs", "utf8");
// const templateSource = fs.readFileSync("onceCoverageDocument.hbs", "utf8");

=======
const templateSource = fs.readFileSync("onceCompleteTemplate.hbs", "utf-8");
// const templateSource = fs.readFileSync("test1.hbs", "utf-8");
// const templateSource = fs.readFileSync("paramountCocIssue.hbs", "utf8");
// const templateSource = fs.readFileSync("onceCoverageDocument.hbs", "utf8");
>>>>>>> c36de38e0f40cb2cb44d22305905dcf641813763
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
