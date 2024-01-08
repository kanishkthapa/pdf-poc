const express = require("express");
const fs = require("fs");
const puppeteer = require("puppeteer");
const handlebars = require("handlebars");

const templateSource = fs.readFileSync("template.hbs", "utf8");
const testTemplateSource = fs.readFileSync("testTemp.hbs", "utf-8");
const allianzTemplate = fs.readFileSync("allianz.hbs", "utf-8");
const policyHolderMessage = fs.readFileSync("policyholderMessage.hbs", "utf-8");
const privacyStatementforAK = fs.readFileSync("privacyMessageAK.hbs", "utf-8");
const privacyStatementforCA = fs.readFileSync("privacyMessageCA.hbs", "utf-8");

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
  const template = handlebars.compile(privacyStatementforCA);

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

  console.log("application data before", applData);

  if (hasDroneDetails) {
    applData.drone_details.forEach((item) => {
      let deductibleValue = item.drone_value * 0.1;

      if (deductibleValue < 250) {
        deductibleValue = 250;
      }

      item = { ...item, deductible_value: deductibleValue };

      console.log("item here", item);
    });
  }

  console.log("applicaton data after", applData);

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

    producer_broker: "Brokery, LLC8 The Green, Ste B Dover, DE 01990",
    policy_number: "BEN10ALNZ",
    insured_name: "Ben Tennyson",
    applicant_street: "10 Road",
    applicant_city: "Tellwood",
    applicant_state: "NY",
    applicant_zip: "10100",
    policy_start_date: "25 November, 2023",
    policy_end_date: "25 November, 2024",
    premium_amount: 200,
    tax: 10,
    total: 210,
    liability_limit: liability_limit,
    hasDroneDetails: hasDroneDetails,
    drone_details: applData.drone_details ? applData.drone_details : null,
  };

  const html = template(data);

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });

  const pdf = await page.pdf({
    format: "A4",
  });

  await browser.close();

  res.set("Content-Type", "application/pdf");
  const testTest = pdf;
  res.send(testTest);
});
