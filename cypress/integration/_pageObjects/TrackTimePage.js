import TrackTimesPage from './TrackTimesPage';

class TrackTimePage {
  get deleteTrackButton() {
    return cy.get('[data-cy="delete-time-button"]');
  }
  get deletedTrackMessage() {
    return cy.get('[data-cy="track-deleted-message"]');
  }
  get undoDeleteButton() {
    return cy.get('[data-cy="undo-delete-button"]');
  }
  get trackTimeData() {
    return cy.get('[data-cy="track-time-data"]');
  }

  verifyTrackTimeDeleted(isDeleted = true) {
    const assertion = isDeleted ? 'be.visible' : 'not.exist';
    this.deletedTrackMessage.should(assertion);
  }

  verifyTrackTimeVisible() {
    this.trackTimeData.should('be.visible');
  }

  deleteTrackTime() {
    cy.intercept('PATCH', '/times/delete/*').as('delete');
    TrackTimesPage.trackTimes
      .eq(0)
      .find('a')
      .click()
      .then(() => {
        this.verifyTrackTimeVisible();
        this.deleteTrackButton.click().wait('@delete').its('response.statusCode').should('equal', 200);
      });
  }
}

export default new TrackTimePage();
