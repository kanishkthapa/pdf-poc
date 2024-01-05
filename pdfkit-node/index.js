const pdfDocument = require("pdfkit");

const fs = require("fs");

const doc = new pdfDocument();

const it = {
  it1: "abc",
  it2: {
    it21: "def",
    it22: "ghi",
  },
  it3: [
    {
      it31: "jkl",
      it32: "mno",
    },
  ],
};

//this will save the pdf in the root
doc.pipe(fs.createWriteStream("result.pdf"));

doc.fontSize(25).text(`${it.it1}`, 100, 200);

//finalise the file
doc.end();
