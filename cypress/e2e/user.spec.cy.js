import userData from "../fixtures/users/userData.json";
//Orange HRM Login Test
describe("Orange HRM Tests", () => {
  // Before each it visist the Login Page

  beforeEach(() => {
    cy.visit("/auth/login");
  });

  // Selectors List

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: '[type="submit"]',
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dasboardGrid: ".orangehrm-dashboard-grid",
    alertMessage: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    personalDetailsTab:
      "[href='/web/index.php/pim/viewPersonalDetails/empNumber/7']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    employeIdField: ".oxd-input--active",
    otherIdField: ".oxd-input--active",
    driverLicenseNumberField: ".oxd-input--active",
    dateField: ".oxd-input--active",
    dateCloseButton: ".--close",
    dateInputIcon: ".oxd-icon.bi-calendar",
    saveButton: '[type="submit"]',
    genericIcon: ".oxd-select-text--arrow",
    genericListField: '[role="option"]',
    alertMessageCloseButton: ".oxd-toast-close",
  };

  // Sucessful Info Update

  it.only("User Info Update - Sucess", () => {
    // Login to the application
    cy.get(selectorsList.usernameField).type(userData.userSucess.username);
    cy.get(selectorsList.passwordField).type(userData.userSucess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(selectorsList.sectionTitleTopBar).should("contain", "Dashboard");
    cy.get(selectorsList.dasboardGrid).should("be.visible");

    // Navigate to My Info Page
    cy.get("[href='/web/index.php/pim/viewMyDetails']").click();
    cy.location("pathname").should(
      "equal",
      "/web/index.php/pim/viewPersonalDetails/empNumber/7"
    );

    // Personal Details Update
    cy.get(selectorsList.firstNameField).clear().type("John");
    cy.get(selectorsList.lastNameField).clear().type("Doe");
    cy.get(selectorsList.employeIdField).eq(3).clear().type("123456789");
    cy.get(selectorsList.otherIdField).eq(4).clear().type("987654321");
    cy.get(selectorsList.driverLicenseNumberField)
      .eq(5)
      .clear()
      .type("DL123456");
    cy.get(selectorsList.dateField).eq(6).clear().type("2023-10-01");
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.dateInputIcon).eq(0).click();
    cy.get(selectorsList.dateCloseButton).click();

    // Nationality and Marital Status
    cy.get(selectorsList.genericIcon).eq(0).click();
    cy.contains(selectorsList.genericListField, "American")
      .scrollIntoView()
      .click();
    cy.get(selectorsList.genericIcon).eq(1).click();
    cy.contains(selectorsList.genericListField, "Single")
      .scrollIntoView()
      .click();

    // Click on the save button
    cy.get(selectorsList.saveButton).eq(0).click({ force: true });

    //  Verify the success message
    cy.get("body").should("contain", "Successfully Updated");
    cy.get(selectorsList.alertMessageCloseButton);

    // Custom Fields Update
    cy.get(selectorsList.genericIcon).eq(2).click();
    cy.contains(selectorsList.genericListField, "B-").scrollIntoView().click();
    cy.get(selectorsList.genericField).eq(9).clear().type("Custom Value 1");

    // Click on the save button
    cy.get(selectorsList.saveButton).eq(0).click({ force: true });
    
    //  Verify the success message
    cy.get("body").should("contain", "Successfully Updated");
    cy.get(selectorsList.alertMessageCloseButton);
  });

  // Sucessful Login

  it("Login - Sucess", () => {
    cy.get(selectorsList.usernameField).type(userData.userSucess.username);
    cy.get(selectorsList.passwordField).type(userData.userSucess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(selectorsList.sectionTitleTopBar).should("contain", "Dashboard");
    cy.get(selectorsList.dasboardGrid).should("be.visible");
  });

  // Uncessfull Login

  it("Login - Fail", () => {
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.alertMessage).should("contain", "Invalid");
  });
});
