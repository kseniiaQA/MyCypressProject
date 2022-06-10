describe('checks web hooks before after ', function () {

    beforeEach(function () {
        cy.visit('https://demo.nopcommerce.com/')
cy.get('a.ico-login').click() 
    })

    afterEach(function () {
        cy.visit('https://demo.nopcommerce.com/')

    })




it('invalid log in', function () {
   cy.get('#Email').type('22222')
   cy.get('#Password').type('22222')

cy.get('button.button-1.login-button').click()



})
it('invalid log in number2', function () {
    cy.get('#Email').type('ghghghg')
    cy.get('#Password').type('gjhhggjg')
 
 cy.get('button.button-1.login-button').click()

})  
}) 