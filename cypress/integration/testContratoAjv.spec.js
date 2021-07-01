/// <reference types="cypress" />

describe('Teste de contrato API', () => {
    
    it('Validar contrato get findByStatus', () => {
        cy.fixture('schema').then((contracSchema) => {
             cy.validaContrato(contracSchema)
          })
       
    });

});