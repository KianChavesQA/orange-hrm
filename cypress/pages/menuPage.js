class MenuPage {
  selectorsList() {
    const selectors = {
      myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
      performanceButton:
        "[href='/web/index.php/performance/viewPerformanceModule']",
      dasboardPage: "href='/web/index.php/dashboard/index']",
    };
    return selectors;
  }
  visitMyInfo() {
    cy.get(this.selectorsList().myInfoButton).click();
  }
  visitPerformance() {
    cy.get(this.selectorsList().performanceButton).click();
  }
}

export default MenuPage;
