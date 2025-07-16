describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.netflix.com/br/')
    cy.get('button[aria-label="Fechar"]').click();
    cy.contains('a', 'Entrar').click(); 
    cy.contains('a', 'Assine agora.').click({ scrollBehavior: false });
    cy.get('input[data-uia="field-email"]:visible').first().type('usuariocypressteste@fake.com', { scrollBehavior: false });
    cy.get('button[data-uia="nmhp-card-cta+hero_card"]').click({ scrollBehavior: false }); 
    cy.contains('button', 'Enviar link').click({ force: true });
    cy.contains('button', 'Prefiro criar uma senha', { timeout: 10000 }).click({ force: true }), ({ scrollBehavior: false });
    cy.get('input[type="password"]', { timeout: 10000 }).first().type('MinhaSenhaSegura123!');
    cy.get('button[data-uia="cta-registration"]').should('be.enabled').click(); { scrollBehavior: false };
    cy.contains('button', 'Pular').should('be.visible').click({ scrollBehavior: false });
    cy.contains('button', 'Próximo').should('be.visible').click({ scrollBehavior: false });
    cy.scrollTo('bottom', { duration: 12000 });
    cy.get('button[data-uia="cta-plan-selection"]').should('be.visible').click();



  })
})