class PersonalRecordsPage {
  get downloadButton() {
    return cy.get('[data-cy="download-csv-button"]');
  }
  get trackLinks() {
    return cy.get('[data-cy="track-link"]');
  }
  visit() {
    cy.visit("");
  }
}

export default new PersonalRecordsPage();
