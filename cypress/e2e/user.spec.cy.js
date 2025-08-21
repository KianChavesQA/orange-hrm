import LoginPage from "../pageObjects/loginPage.js";
import DashboardPage from "../pageObjects/dashboardPage.js";
import MenuPage from "../pageObjects/menuPage.js";
import PersonalPage from "../pageObjects/personalPage.js";
import userData from "../fixtures/users/userData.json";

var Chance = require("chance");

var chance = new Chance();
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const personalPage = new PersonalPage();

//Orange HRM Login Test
describe("User Tests", () => {
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
      chance.first(),
      chance.last(),
      chance.integer({ min: 1012120, max: 9911199 }),
      chance.ssn(),
      "A1234567",
      chance.date().toLocaleDateString("en-CA")
    );

    // Nationality and Marital Status
    personalPage.updateNationalityAndMaritalStatus(
      "American",
      "Single",
      chance.date().toLocaleDateString("en-CA")
    );

    // Save Personal Details
    personalPage.savePersonalDetails();

    // Custom Fields Update
    personalPage.updateCustomFields("B-", "Custom Value");
  });
});
