describe('Log in test', function() {
  it('logs in standard user', function() {
  //Visit the Demo QA Website
cy.visit('https://demo.nopcommerce.com/') 
cy.title().should('eq', 'nopCommerce demo store') 

})
})          
