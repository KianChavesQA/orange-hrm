import LoginPage from "../pageObjects/loginPage.js";
import DashboardPage from "../pageObjects/dashboardPage.js";
import userData from "../fixtures/users/userData.json";

describe("Login Tests", () => {
  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();

  beforeEach(() => {
    // Access the login page before each test
    loginPage.acessLoginPage();
  });

  // Successful Login
  it("Login - Success", () => {
    // Login to the application
    loginPage.loginWithUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );

    // Verify successful login
    dashboardPage.checkDashboardPage();
  });

  // Unsuccessful Login
  it("Login - Fail", () => {
    loginPage.loginWithUser(
      userData.userFail.username,
      userData.userFail.password
    );
    loginPage.checkLoginErrorMessage("Invalid credentials");
  });
});
