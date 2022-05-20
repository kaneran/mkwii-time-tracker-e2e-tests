class PersonalRecordsPage {
  get downloadButton() {
    return cy.get('[data-cy="download-csv-button"]');
  }
  visit() {
    cy.visit("/PRs");
  }
}

export default new PersonalRecordsPage();
