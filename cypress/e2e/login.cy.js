//Orange HRM Login Test
describe("Orange HRM Tests", () => {

  // Before each it visist the login page
  
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
  };

  // Sucessful  Login

  it("Login - Sucess", () => {
    cy.get(selectorsList.usernameField).type("Admin");
    cy.get(selectorsList.passwordField).type("admin123");
    cy.get(selectorsList.loginButton).click();
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(selectorsList.sectionTitleTopBar).should("contain", "Dashboard");
  });

  // Uncessfull Login

  it("Login - Fail", () => {
    cy.get(selectorsList.usernameField).type("errorUser");
    cy.get(selectorsList.passwordField).type("admin123");
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.alertMessage).should("contain", "Invalid");
  });
});
