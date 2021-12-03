/// <reference types="cypress" />

describe('Teste de contrato API SP', () => {
    
    //teste de retrocompatibilidade
    it.only('Validação retrocompatibilidade SwaggerDiff', () => {
      
        cy.fixture('swaggerDoc').then((swaggerDoc) => {
          cy.swaggerDiff(swaggerDoc, Cypress.env('urlSwagger'))
        })
        
    });

});