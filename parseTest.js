const pixlXml = require("pixl-xml");
const fastXmlParser = require("fast-xml-parser");
const { readFileSync } = require("fs");

const xmlData = readFileSync("example.xml").toString();

console.log("Parsed by pixl-xml:");
console.log(pixlXml.parse(xmlData));

console.log("\nParsed by fast-xml-parser:");
console.log(fastXmlParser.parse(xmlData));
