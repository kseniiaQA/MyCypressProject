class loginPage
{
    visit()
    {
    cy.visit('https://demo.nopcommerce.com/login')
}

fillEmail(value)
{
   const field = cy.get('#Email')
   field.clear()
   field.type(value) 
   return this
}
fillPassword(value){
    const field = cy.get('#Password')
    field.clear()
    field.type(value)  
    return this
} 

submit(){
const button = cy.get('button.button-1.login-button')
button.click()
}

}
export default loginPage
