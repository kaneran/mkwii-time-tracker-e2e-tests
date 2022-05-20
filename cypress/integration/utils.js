const path = require("path");
export const verifyCsvData = (fileName) => {
  const downloadsFolder = Cypress.config("downloadsFolder");
  const filename = path.join(downloadsFolder, fileName);

  cy.readFile(filename, { timeout: 15000 }).then((data) => {
    const trackTimes = csvToArray(data, ",");
    trackTimes.forEach((time) =>
      time.forEach((cellValue) => expect(cellValue).length.greaterThan(0))
    );
  });
};

const csvToArray = (csvString) => {
  const rows = csvString.slice(csvString.indexOf("\n") + 1).split("\n");
  return rows.map((row) => row.split(","));
};
