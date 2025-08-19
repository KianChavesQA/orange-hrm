class PersonalPage {
  selectorsList() {
    const selectors = {
      personalDetailsTab:
        "[href='/web/index.php/pim/viewPersonalDetails/empNumber/7']",
      firstNameField: "[name='firstName']",
      lastNameField: "[name='lastName']",
      genericField: ".oxd-input--active",
      dateCloseButton: ".--close",
      dateInputIcon: ".oxd-icon.bi-calendar",
      saveButton: '[type="submit"]',
      genericIcon: ".oxd-select-text--arrow",
      genericListField: '[role="option"]',
      alertMessageCloseButton: ".oxd-toast-close",
    };
    return selectors;
  }

  updatePersonalDetails(
    firstName,
    lastName,
    idNumber,
    sinNumber,
    licenseNumber,
    licenseExpiryDate
  ) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName);
    cy.get(this.selectorsList().lastNameField).clear().type(lastName);
    cy.get(this.selectorsList().genericField).eq(3).clear().type(idNumber);
    cy.get(this.selectorsList().genericField).eq(4).clear().type(sinNumber);
    cy.get(this.selectorsList().genericField).eq(5).clear().type(licenseNumber);
    cy.get(this.selectorsList().genericField)
      .eq(6)
      .clear()
      .type(licenseExpiryDate);
    cy.get(this.selectorsList().dateCloseButton).click();
    cy.get(this.selectorsList().dateInputIcon).eq(0).click();
    cy.get(this.selectorsList().dateCloseButton).click();
  }
  updateNationalityAndMaritalStatus(nationality, maritalStatus) {
    cy.get(this.selectorsList().genericIcon).eq(0).click();
    cy.get(this.selectorsList().genericListField)
      .contains(nationality)
      .scrollIntoView()
      .click();
    cy.get(this.selectorsList().genericIcon).eq(1).click();
    cy.get(this.selectorsList().genericListField)
      .contains(maritalStatus)
      .scrollIntoView()
      .click();
  }

  savePersonalDetails() {
    cy.get(this.selectorsList().saveButton).eq(0).click({ force: true });
    cy.get(this.selectorsList().alertMessageCloseButton).click();
  }
  // Custom Fields Update
  updateCustomFields(customType, customValue) {
    cy.get(this.selectorsList().genericIcon).eq(2).click();
    cy.contains(this.selectorsList().genericListField, customType)
      .scrollIntoView()
      .click();
    cy.get(this.selectorsList().genericField).eq(9).clear().type(customValue);
  }
  saveCustomFields() {
    cy.get(this.selectorsList().saveButton).eq(1).click({ force: true });
    cy.get(this.selectorsList().alertMessageCloseButton).click();
  }
}
export default PersonalPage;
