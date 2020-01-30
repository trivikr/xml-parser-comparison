const pixlXml = require("pixl-xml");
const fastXmlParser = require("fast-xml-parser");
const prettier = require("prettier");

const { readFileSync } = require("fs");

const xmlData = readFileSync("example.xml").toString();
const printObject = data =>
  prettier.format(JSON.stringify(data), { parser: "json" });

console.log("Parsed by pixl-xml:");
console.log(printObject(pixlXml.parse(xmlData)));

console.log("\nParsed by fast-xml-parser:");
console.log(printObject(fastXmlParser.parse(xmlData)));
