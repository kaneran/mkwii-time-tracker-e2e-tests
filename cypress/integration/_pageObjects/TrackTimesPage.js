class TrackTimesPages {
  get trackTimes() {
    return cy.get('tbody tr');
  }
  verifyTimeAdded(format) {
    cy.get('@time').then((time) => {
      this.trackTimes
        .filter(`:contains("${time}")`)
        .should('be.visible')
        .find('td')
        .eq(1)
        .then((formatColumn) => expect(formatColumn.text().toLowerCase()).to.equal(format));
    });
  }
}

export default new TrackTimesPages();
