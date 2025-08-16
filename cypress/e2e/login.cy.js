import userData from "../fixtures/users/userData.json";
//Orange HRM Login Test
describe("Orange HRM Tests", () => {
  // Before each it visist the Login Page

  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  // Selectors List

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: '[type="submit"]',
    alertMessage: "[role='alert']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dasboardGrid: ".orangehrm-dashboard-grid",
  };
  // Sucessful  Login

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
