/// ＜reference types="cypress" /＞
it('Gets, types and asserts', () => {
  cy.visit('https://www.bing.com')
  cy.get('#sbi_b') //musi se objevit ikonka pro nahravani hlasu. Pak je mozne zacit psat text do vyhledavace. Jinak se psani prerusi.
  cy.get('#sb_form_q').type('automation step by step raghav pal')
 // cy.get('#sb_form_q').type
})