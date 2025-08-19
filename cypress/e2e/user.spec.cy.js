import LoginPage from "../pages/loginPage.js";
import DashboardPage from "../pages/dashboardPage.js";
import MenuPage from "../pages/menuPage.js";
import PersonalPage from "../pages/personalPage.js";
import userData from "../fixtures/users/userData.json";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const personalPage = new PersonalPage();

//Orange HRM Login Test
describe("Orange HRM Tests", () => {
  // Sucessful Info Update

  beforeEach(() => {
    // Access the login page before each test
    loginPage.acessLoginPage();
  });

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
