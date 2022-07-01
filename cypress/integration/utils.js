const path = require("path");
const {faker} = require('@faker-js/faker');

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

export const generateRandomTime = () => {
  //example 01:02.345
  const minute = faker.datatype.number({min: 0, max: 2});
  const second = faker.datatype.number({min: 10, max: 59});
  const millisecond = faker.datatype.number({ min: 100, max: 999 });
  const time = `0${minute}:${second}.${millisecond}`;
  cy.wrap(time).as('time');
  return time;
}
