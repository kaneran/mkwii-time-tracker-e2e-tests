import { And, Then, When } from 'cypress-cucumber-preprocessor/steps';
import PersonalRecordsPage from '../_pageObjects/PersonalRecordsPage';
import TrackTimePage from '../_pageObjects/TrackTimePage';

When(/^the user selects the track (.*)$/, (track) => {
  PersonalRecordsPage.selectTrack(track);
});

And('deletes the first time', () => {
  TrackTimePage.deleteTrackTime();
});

Then('the time should be deleted', () => {
  TrackTimePage.verifyTrackTimeDeleted();
});

And('the user undos the deleted time', () => {
  cy.intercept('PUT', '/times/undo/*').as('undo');
  TrackTimePage.undoDeleteButton.click().wait('@undo').its('response.statusCode').should('equal', 200);
});

Then('the time should be restored', () => {
  TrackTimePage.verifyTrackTimeDeleted(false);
  TrackTimePage.verifyTrackTimeVisible();
});
