import SwaggerDiff from 'swagger-diff';

const config = {
  "changes": {
    "breaks": 3,
    "smooths": 2
  }
}
 
Cypress.Commands.add('swaggerDiff', (swaggerOld, urlSwagger) => {

    cy.wrap(SwaggerDiff(swaggerOld, urlSwagger, config)).then(res => {
    console.log(res)
    if(res.errors.length > 0 || res.warnings.length > 0)
    {
        let erros = []
        res.errors.forEach(erro => {
        erros.push('\n' + 'Erro: ' + erro.message)
        });
        let warnings = []
        res.warnings.forEach(warning => {
        warnings.push('\n' + 'Warning: ' + warning.message)
        });
        cy.log(res.errors).then(() => {  
            throw new Error('Inconsistências encontradas: ' + erros + warnings)                                                 
        });  
    }    
    else
    {
        expect(res.errors.length).to.be.equal(0)
        cy.log('Sem divergências!')
    }

    })
})