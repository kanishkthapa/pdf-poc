const express = require("express");
const fs = require("fs");
const puppeteer = require("puppeteer");
const handlebars = require("handlebars");
const path = require("path");
// const mime = require("mime");

const templateSource = fs.readFileSync("template.hbs", "utf8");
const testTemplateSource = fs.readFileSync("testTemp.hbs", "utf-8");
// const allianzTemplate = fs.readFileSync("allianz.hbs", "utf-8");
// const privacyStatementforCA = fs.readFileSync(
//   "privacyStatementforCA.hbs",
//   "utf-8"
// );

const app = express();

function changeDateFormat(currentDate) {
  const options = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return formattedDate;
}

const getNewMonthlyPolicyNumber = (monthlyPolicyNumber, currentYear) => {
  const match = monthlyPolicyNumber.match(/ALLZ(\d+)-(\d+)$/);

  console.log(match);

  if (!match) {
    return monthlyPolicyNumber;
  }
  let numericPart = parseInt(match[1], 10);

  const newNumericPart = numericPart + 1;

  //we construct and return the full string
  return `ALLZ${newNumericPart.toString().padStart(5, "0")}-${currentYear}`;
};

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(8080, (req, res) => {
  console.log("app listening on 8080");
});

app.get("/document", async (req, res) => {
  const template = handlebars.compile(templateSource);

  const dateArray = [
    new Date("2023-10-01"),
    new Date("2023-09-15"),
    new Date("2023-09-10"),
    new Date("2023-08-30"),
  ];
  const latestDate = new Date(Math.max(...dateArray));

  const formattedDate = changeDateFormat(latestDate);

  let airDate;

  airDate = "abc;";

  let currentYear = new Date().getFullYear();

  currentYear = currentYear % 100;
  console.log("year", currentYear);

  const monthlyPolicyNumber = getNewMonthlyPolicyNumber(
    "ALLZ00001-24",
    currentYear
  );

  const liability_limit = 5000000;
  const drone_details = [
    {
      drone_make: "Sony",
      drone_model: "Sony Ombitrix",
      drone_build_year: 2015,
      drone_serial_number: "BEN!0",
      drone_value: 1000,
    },
    {
      drone_make: "CANON",
      drone_model: "GWEN",
      drone_build_year: 2018,
      drone_serial_number: "GW3N",
      drone_value: 2000,
    },
  ];

  let hasDroneDetails = false;

  if (drone_details && drone_details.length > 0) {
    hasDroneDetails = true;
  }

  let applData = {};

  applData = { ...applData, drone_details };

  if (hasDroneDetails) {
    applData.drone_details.forEach((item) => {
      let deductibleValue = item.drone_value * 0.1;

      if (deductibleValue < 250) {
        deductibleValue = 250;
      }

      item = { ...item, deductible_value: deductibleValue };
    });
  }

  // console.log(drone_details);

  const data = {
    // mrnCocNumber: "xxDummyxx",
    // dateIssued: formattedDate,
    // assuredName: "Test Name for now",
    // assuredAddress: "Address  D Street 1123 D City D S",
    // interestInsured: " Address  D Street 1123 D City D State ",
    // insuredValue: 123,
    // premiumAmount: 200,
    // voyageFrom: "origin address 012345",
    // voyageTo: "D Address Street 1123 D City D State 112345",
    // viaAirDate: "20-12-2022",
    // viaSeaDate: "",
    // mopValue: "MOP-XXXXX",

    /*
    {
        "drone_make": "Sony",
        "drone_model": "Sony Ombitrix",
        "drone_build_year": 2015,
        "drone_serial_number": "BEN!0",
        "drone_value": 1000
    },
    */
    // img_src: base64Sync("./abcd.png"),
    producer_broker: "Brokery, LLC8 The Green, Ste B Dover, DE 01990",
    producer_name: "Brokery",
    producer_street: "201 Street",
    producer_apt: "Suite 700",
    producer_city: "New York, NY 10005",
    policy_number: "BEN10ALNZ",
    insured_name: "Ben Tennyson",
    applicant_street: "10 Road",
    applicant_city: "Tellwood",
    applicant_state: "NY",
    applicant_zip: "10100",
    name_business_addl_insured: "Steve Rogers",
    addl_insured_street: "Capn. Street",
    addl_insured_city: "Brooklyn",
    addl_insured_state: "New York",
    addl_insured_zip_code: "12323",
    policy_start_date: "25 November, 2023",
    policy_end_date: "25 November, 2024",
    premium_amount: 200,
    tax: 10,
    total: 210,
    liability_limit: liability_limit,
    hasDroneDetails: hasDroneDetails,
    hasEquipmentDetails: false,
    drone_details: applData.drone_details ? applData.drone_details : null,
  };

  // Convert PNG image to data URL
  // const imagePath = "./abcd.png";
  // const imageData = fs.readFileSync(imagePath, "base64");
  // const imageMimeType = `image/${path.extname(imagePath).slice(1)}`;
  // const dataUrl = `data:${imageMimeType};base64,${imageData}`;

  // Add image data URL to the template data
  // data.image_src = dataUrl;

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
  await page.addStyleTag({
    content: "img { visibility: visible !important; }",
  });

  const pdf = await page.pdf({
    format: "A4",
  });

  await browser.close();

  res.set("Content-Type", "application/pdf");
  const testTest = pdf;
  res.send(testTest);
});
