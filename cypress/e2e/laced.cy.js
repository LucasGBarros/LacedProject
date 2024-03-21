describe('Automation Laced WebSite', () => {
  it('Visti Laced Site', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://www.laced.com/')
    cy.basicCommand()
    cy.productFind()
    cy.selectSize()
    cy.addToBag()
    cy.customerForm()
    cy.finishPay()
  })
})