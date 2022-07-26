describe('CRTWEB websites', () => {


  it('goes to a website', () => {
    cy.googleSearch()
    cy.get('h3').eq(0).click()
    cy.url().should('eq', 'https://crtweb.ru/')
  })


  it('checks contacts', () => {
    cy.visit('https://crtweb.ru/')
    cy.get('a.tn-atom.reverse.modified').eq(0).click()

    cy.get('a').contains('Контакты').click()
    cy.get('a.tn-atom').contains('+7 499 113-68-89')
    cy.get('a.tn-atom').contains('sales@crtweb.ru')

  })

  it('Checks status code', () => {

    cy.request({
      method: "GET",
      url: "/",
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200)

    })
  })

  it('Checks developer info', () => {
    cy.visit('https://crtweb.ru/cv')
    cy.get('div.js-feed-post-title.t-feed__post-title.t-name.t-name_md').eq(0).should('be.visible')
    cy.get('div.js-feed-post-descr.t-feed__post-descr.t-descr.t-descr_xxs').eq(0).should('be.visible')



  })
})  