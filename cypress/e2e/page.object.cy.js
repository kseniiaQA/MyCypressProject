
import LoginPage from '../e2e/PageObject/LoginPage'

describe('log in with page object', function () {
    it('log ins', function () {

const login = new LoginPage()   
login.visit()
login.fillEmail('kshamtova22@mail.ru')
login.fillPassword('raopeng21')
login.submit()
cy.title().should('be.equal', 'nopCommerce demo store')

    })
}) 