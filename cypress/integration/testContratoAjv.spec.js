/// <reference types="cypress" />

describe('Teste de contrato API', () => {
    
    it('Validar contrato get findByStatus', () => {

        cy.request({
            method: 'GET',
            url: '/findByStatus',
            qs: { status: 'pending' }
        }).then((response) => {
            cy.fixture('schema').then((contracSchema) => {
                cy.validaContrato(contracSchema, response)
            })
        })
    });

});