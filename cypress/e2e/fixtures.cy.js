


describe('fixtures', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })

    })
    it.only('finds types of selectors', function () {
cy.logInStandarsUser()
        // cy.visit('https://demo.nopcommerce.com/')
        // cy.get('a.ico-login').click()
        // cy.get('#Email').type(this.data.email)
        // cy.get('#Password').type(this.data.password)

        // cy.get('button.button-1.login-button').click()

 
    })
}) 
