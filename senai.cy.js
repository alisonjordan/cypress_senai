describe('teste senai', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://www.ap.senai.br/')
    })

    it('testes senai', () => {
        // We use the `cy.get()` command to get all elements that match the selector.
        // Then, we use `should` to assert that there are two matched items,
        // which are the two default items.
     //   cy.visit('https://www.ap.senai.br/educacao/programacao-cursos.html')
     cy.get('.close > span').click()
     cy.get('#navbarSupportedContent').should('be.visible')
     cy.get('#menu_interno > .col-md-9').should('be.visible')
     cy.get('.carousel-inner').should('be.visible')
     cy.get('.col-md-9 > [href="/senai/editais.html"]').click()
     

    })

})