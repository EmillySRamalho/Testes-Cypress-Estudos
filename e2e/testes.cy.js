describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.netflix.com/br/')
    cy.get('button[aria-label="Fechar"]').click();
    cy.scrollTo('bottom', { duration: 12000 })
    cy.scrollTo('top', { duration: 12000 })
    cy.contains('a', 'Entrar').click(); 
    cy.contains('a', 'Assine agora.').click({ scrollBehavior: false });
    cy.get('input[data-uia="field-email"]:visible').first().type('teste123@fake.com', { scrollBehavior: false });
    cy.get('button[data-uia="nmhp-card-cta+hero_card"]').click({ scrollBehavior: false });
    cy.contains('button', 'Enviar link').click({ force: true });







  })
})