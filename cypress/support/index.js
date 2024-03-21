Cypress.on('uncaught:exception', (err, runnable) => {
    // retornar false para evitar que falhe o teste no caso de um erro de script
    return false
  })
  