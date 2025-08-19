class DashboardPage {
  selectorsList() {
    const selectors = {
      dashboardGrid: ".orangehrm-dashboard-grid",
    };
    return selectors;
  }

  checkDashboardPage() {
    cy.get(this.selectorsList().dashboardGrid).should("be.visible");
  }
}
export default DashboardPage;