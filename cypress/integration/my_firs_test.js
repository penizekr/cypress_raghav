/// ＜reference types="cypress" /＞
describe('My First Test', () => {
it('Gets, types and asserts', () => {
  cy.visit('https://www.bing.com')
  cy.get('#sbi_b') //musi se objevit ikonka pro nahravani hlasu. Pak je mozne zacit psat text do vyhledavace. Jinak se psani prerusi.
  cy.get('#sb_form_q', {timeout:6000}).type('https://example.cypress.io/{enter}')
  cy.get('.b_topTitle > a').click() // v cypress.json nutno nastavit: "chromeWebSecurity": false ,pokud jdu na jine URL
  cy.contains('get').click() //prvni element, ktery obsahuje "get"
 })

 it('login test', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/')
  cy.get('#txtUsername').type('Admin')
  cy.get('#txtPassword').type('admin123')
  cy.get('#btnLogin').click()
  cy.get('#menu_admin_viewAdminModule > b').click()
  cy.get('#btnAdd').click()
 })

 it.only('assertions', () => {
  cy.visit('example.cypress.io')
  cy.contains('get').click() 
  cy.get('#query-btn')
  //Implicit assertions:
          .should('contain', 'Button')
          .should('have.class', 'query-btn btn btn-primary')
          .should('be.visible')
          .should('be.enabled')
          .and('have.id', 'query-btn') 

 //Explicit assertions:
 expect(true).to.be.true

 let slovo='pokus'
 expect(slovo).to.be.equal('pokus')

assert.equal(4,4,'rovna se')
 })
})
