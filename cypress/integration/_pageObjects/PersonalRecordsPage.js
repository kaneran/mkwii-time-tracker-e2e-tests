class PersonalRecordsPage {
  get downloadButton() {
    return cy.get('button').filter(':contains("Download times")');
  }

  getTrackLink(name) {
    return cy.get(`[data-cy="track-link-${name.toLowerCase().replace(' ', '-')}"]`);
  }

  visit() {
    cy.visit("").then(() => this.getTrackLink('DS Delfino Square').should('be.visible'));
  }

  viewTrackTimes(){
    cy.get('@track').then((track) => {
      this.getTrackLink(track).click();
    });
  }
}

export default new PersonalRecordsPage();
