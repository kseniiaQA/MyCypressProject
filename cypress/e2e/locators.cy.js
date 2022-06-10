
describe('checks many different types of selectors', function () {
    it('finds types of selectors', function () {

        cy.visit('https://demo.nopcommerce.com/')
        cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch')

        cy.get('[type="submit"]').click()

        cy.get('button.button-2.product-box-add-to-cart-button').click()
        cy.get('#product_enteredQuantity_4').clear().type('4')
        cy.get('#add-to-cart-button-4').click()

        cy.get('span.cart-qty').contains('4')
        cy.get('span.cart-label').click()
        cy.get('span.value-summary').contains('$7,200.00')
        // cy.get('#termsofservice').click()
        // cy.get('#checkout').click()

    })
    it('checks other things', function () { 

        cy.visit('https://demo.nopcommerce.com/')
        cy.get('span.wishlist-label').click()
        cy.url().should('include', 'wishlist')


    })

    it('sends to favourites', function () {

        cy.visit('https://demo.nopcommerce.com/')
        cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch')

        cy.get('[type="submit"]').click()
        cy.get('button.button-2.add-to-wishlist-button').eq(0).should('be.visible').click()
        cy.url().should('include', 'apple-macbook-pro-13-inch')

    })


    it('checks check box', function () {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket')
        cy.get('#checkbox2').check().should('be.checked')
        cy.get('input[value="FeMale"]').click()
        cy.get('#checkbox1').uncheck().should('not.be.checked')


    })
    it('dropdown', function () {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#Skills').select('Android').should('have.value', 'Android')
        cy.get('#msdd').click()
        cy.get('li.ng-scope').contains('English').click()
        cy.get('li.ng-scope').contains('German').click()
        cy.get('li.ng-scope').contains('Arabic').click()



        cy.get('span.select2-selection.select2-selection--single').click({ force: true })
        cy.get('input.select2-search__field').type('ind').type('{enter}')




    })
    it('pop up', function () {
        cy.visit('https://mail.rediff.com/cgi-bin/login.cgi')
        cy.get('#login1').type('hhh')
        cy.get('input.signinbtn').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please enter your password')
        }

        )


    })



    it('windows alert', function () {
        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('button[onclick="myFunction()"]').click()

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press a button!')
        }

        )

    
    })



it('navigates back', function () {
        cy.visit('https://demo.nopcommerce.com/')

cy.get('a.ico-register').click() 
cy.title().should('eq', 'nopCommerce demo store. Register')
cy.go('back')
cy.title().should('eq', 'nopCommerce demo store')
cy.go('forward')
cy.title().should('eq', 'nopCommerce demo store. Register')

})



it('particular row', function () {
    cy.visit('https://testautomationpractice.blogspot.com/')

cy.get('table[name="BookTable"]').contains('td', 'Mukesh').should('be.visible')

cy.get('table[name="BookTable"] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium')
}) 


}) 