import PersonalRecordsPage from './PersonalRecordsPage';
import TrackTimesPage from './TrackTimesPage';
class AddTimePage {
  get formFields() {
    return cy.get('[data-cy="add-time-form"] .field');
  }

  get shortcutBreakdownCheckboxes() {
    return cy.get('[data-cy="shortcut-breakdown"] input');
  }

  get timeInput() {
    return cy.get('input[placeholder="Enter time in format MM:SS.mmm"]');
  }

  get submitButton() {
    return cy.get('[data-cy="submit-button"]');
  }

  get successMessage() {
    return cy.get('[data-cy="time-upload-success-message"]');
  }

  get errorMessage() {
    return cy.get('[data-cy="time-upload-error-message"]');
  }

  get homeButton() {
    return cy.get('[data-cy="home-nav-button"]');
  }

  visit() {
    return cy.visit('/add');
  }

  selectTrack(option) {
    this.formFields.eq(0).click();
    cy.get('span').filter(`:contains("${option}")`).click();
    cy.wrap(option).as('track');
  }

  selectFormat(option) {
    this.formFields.eq(1).click();
    cy.get('span').each((dropdownOption) => {
      dropdownOption.text().toLowerCase() === option && dropdownOption.trigger('click');
    });
    option === 'shortcut' && this.updateShortcutBreakdown();
  }

  updateShortcutBreakdown() {
    this.shortcutBreakdownCheckboxes.should('have.length.gt', 1).each((checkbox, index) => {
      //Have to force click as the Form.field element has class 'hidden'
      index % 2 > 0 && cy.wrap(checkbox).click({ force: true });
    });
  }

  verifyOutcome(format, outcome) {
    switch (outcome) {
      case 'success':
        this.successMessage.should('be.visible');
        this.verifyTimeAdded(format);
        break;
      case 'error':
        this.errorMessage.should('be.visible');
        break;
      default:
        break;
    }
  }

  verifyTimeAdded(format) {
    this.homeButton.click();
    PersonalRecordsPage.viewTrackTimes();
    TrackTimesPage.verifyTimeAdded(format)
  }
}

export default new AddTimePage();
