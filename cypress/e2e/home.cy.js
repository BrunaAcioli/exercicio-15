describe('Teste inicial', () => {
  it('deve abrir a página de exemplo do Cypress', () => {
    cy.visit('/')
    cy.contains('Kitchen Sink').should('be.visible')
  })
})