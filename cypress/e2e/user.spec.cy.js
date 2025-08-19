import LoginPage from "../pageObjects/loginPage.js";
import DashboardPage from "../pageObjects/dashboardPage.js";
import MenuPage from "../pageObjects/menuPage.js";
import PersonalPage from "../pageObjects/personalPage.js";
import userData from "../fixtures/users/userData.json";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const personalPage = new PersonalPage();

//Orange HRM Login Test
describe("Orange HRM Tests", () => {
  beforeEach(() => {
    // Access the login page before each test
    loginPage.acessLoginPage();
  });

  // Successful Login and User Info Update
  it("User Info Update - Sucess", () => {
    // Login to the application
    loginPage.loginWithUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );

    // Verify successful login
    dashboardPage.checkDashboardPage();

    // Navigate to My Info Page
    menuPage.visitMyInfo();

    // Personal Details Update
    personalPage.updatePersonalDetails(
      "John",
      "Doe",
      "123456789",
      "987654321",
      "A1234567",
      "2025-12-31"
    );

    // Nationality and Marital Status
    personalPage.updateNationalityAndMaritalStatus("American", "Single");

    // Save Personal Details
    personalPage.savePersonalDetails();

    // Custom Fields Update
    personalPage.updateCustomFields("B-", "Custom Value");
  });

  // Uncessfull Login
  it.only("Login - Fail", () => {
    loginPage.loginWithUser(
      userData.userFail.username,
      userData.userFail.password
    );
    loginPage.checkLoginErrorMessage("Invalid credentials");
  });
});
