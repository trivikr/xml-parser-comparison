const pixlXml = require("pixl-xml");
const fastXmlParser = require("fast-xml-parser");

const { readFileSync } = require("fs");

["ec2", "query", "rest-xml"].forEach(protocolName => {
  const contents = readFileSync(`fixtures/${protocolName}.json`);
  const jsonContent = JSON.parse(contents);
  jsonContent.forEach(element => {
    element.cases.forEach(caseItem => {
      const xmlData = caseItem.response.body;
      const pixlParsedObj = pixlXml.parse(xmlData);
      const fxpParsedObj = fastXmlParser.parse(xmlData, {
        parseNodeValue: false
      });
      console.log(
        JSON.stringify(pixlParsedObj) ===
          JSON.stringify(fxpParsedObj[Object.keys(fxpParsedObj)[0]])
      );
    });
  });
});
