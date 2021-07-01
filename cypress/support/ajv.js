import Ajv from "ajv"
const ajv = new Ajv({allErrors: true})

Cypress.Commands.add('validaContrato', schema => {    
        cy.request({
            method: 'GET',
            url: '/findByStatus',
            qs: { status: 'pending' }
        }).then((response) => { 
            const validate = ajv.compile(schema)           
            const valid = validate(response.body)
            if(!valid)
            {     
                //Insere resultados em um array para exibir                
                let erros = []
                validate.errors.forEach(erro => {
                erros.push('\n' + 'Mensagem: ' + erro.message + '\n' + 'schemaPath: ' + erro.schemaPath)
                });
                cy.log(validate.errors).then(() => {  
                    throw new Error('Erros encontrados na validação dos esquemas: ' + erros)                                                 
                });  
            }                    
            else
            {
                expect(valid).to.be.true
                cy.log('Schema válido!')
            }                       
        });        
})
