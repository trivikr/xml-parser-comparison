const pixlXml = require("pixl-xml");
const fastXmlParser = require("fast-xml-parser");
const prettier = require("prettier");

const { readFileSync } = require("fs");

const xmlData = readFileSync("example.xml").toString();
const printObject = data =>
  prettier.format(JSON.stringify(data), { parser: "json" });

console.log("Parsed by pixl-xml:");
const pixlParsedObj = pixlXml.parse(xmlData);
console.log(printObject(pixlParsedObj));

console.log("\nParsed by fast-xml-parser:");
const fxpParsedObj = fastXmlParser.parse(xmlData);
console.log(printObject(fxpParsedObj[Object.keys(fxpParsedObj)[0]]));

console.log(
  JSON.stringify(pixlParsedObj) ===
    JSON.stringify(fxpParsedObj[Object.keys(fxpParsedObj)[0]])
);
