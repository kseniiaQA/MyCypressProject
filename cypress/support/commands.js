


Cypress.Commands.add('logInStandarsUser', () => {

    cy.visit('https://demo.nopcommerce.com/')
    cy.get('a.ico-login').click()
    cy.get('#Email').type('kshamtova22@mail.ru')
    cy.get('#Password').type('raopeng21')
    cy.get('button.button-1.login-button').click()
})

 
  