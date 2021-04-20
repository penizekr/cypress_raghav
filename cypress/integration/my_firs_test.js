/// ＜reference types="cypress" /＞
it('Gets, types and asserts', () => {
  cy.visit('https://www.bing.com')
  cy.get('#sbi_b') //musi se objevit ikonka pro nahravani hlasu. Pak je mozne zacit psat text do vyhledavace. Jinak se psani prerusi.
  cy.get('#sb_form_q', {timeout:6000}).type('https://example.cypress.io/{enter}')
  cy.get('[data-bm="5"] > h2 > a').click() // v cypress.json nutno nastavit: "chromeWebSecurity": false ,pokud jdu na jine URL
  cy.contains('get').click() //prvni element, ktery obsahuje "get"
 })

 //it('Gets, contains', () => {
 // cy.visit('https://example.cypress.io/')
// })


 