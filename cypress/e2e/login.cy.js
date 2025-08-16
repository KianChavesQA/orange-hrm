//Orange HRM Login Test
describe("Orange HRM Tests", () => {
  // Before each it visist the login page
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  // Sucessful  Login

  it("Login - Sucess", () => {
    cy.get("[name='username']").type("Admin");

    cy.get("[name='password']").type("admin123");
    cy.get('[type = "submit"]').click();
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(".oxd-topbar-header-breadcrumb-module").should(
      "contain",
      "Dashboard"
    );
  });

  // Uncessfull Login

  it("Login - Fail", () => {
    cy.get("[name='username']").type("test");
    cy.get("[name='password']").type("admin123");
    cy.get('[type = "submit"]').click();
    cy.get("[role='alert']").should("contain", "Invalid");
  });
});
