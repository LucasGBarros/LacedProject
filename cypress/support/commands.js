import faker from 'faker';
import ccgen from 'creditcard-generator';

Cypress.Commands.add('basicCommand', function () {
    cy.get('[data-testid="close-dialog"]').click()
})

Cypress.Commands.add('productFind', function () {
    cy.contains('button', 'Allow All').should('be.visible').click()
    cy.get('[data-testid="instantsearch-button"]').click()
    cy.get('[aria-label="query-input"]').type('Air Jordan 4 military{enter}')
    cy.contains('span.css-63mnou', 'Air Jordan 4 Retro Military Black GS').should('be.visible', 'Air Jordan 4 Retro Military Black GS').click()
})

Cypress.Commands.add('selectSize', function () {
    cy.get('[data-testid="sizes"]')
        .find('label')
        .then($labels => {

            const sizeLabels = $labels.toArray();

            const randomIndex = Math.floor(Math.random() * sizeLabels.length);
            const randomSizeLabel = sizeLabels[randomIndex];

            cy.wrap(randomSizeLabel).click();

            cy.wrap(randomSizeLabel).should('have.attr', 'data-active');
        });

})

Cypress.Commands.add('addToBag', function () {
    cy.contains('button', 'Add to bag').should('be.visible').click()
    cy.contains('button', 'Checkout').should('be.visible').click()
})

Cypress.Commands.add('customerForm', function () {
    const firstName = "Lucas";
    const lastName = "Barros";

    cy.get('#first_name').type(firstName).should('have.value', firstName);
    cy.get('#last_name').type(lastName).should('have.value', lastName);
    cy.get('#country').select('Ireland').should('be.visible', 'Ireland');
    cy.get('#house_name_or_number').clear().type('23').should('have.value', '23');
    cy.get('#line_1').clear().type("O'Connell Street Upper, North City").should('have.value', "O'Connell Street Upper, North City");
    cy.get('#city').clear().type('Dublin').should('have.value', 'Dublin');
    cy.get('#state').select('D').should('have.value', 'D');
    cy.get('#postcode').clear().type('D01 C3W7').should('have.value', 'D01 C3W7');
    cy.get('#laced_guest_checkout_email').clear().type('Teste@gmail.com').should('have.value', 'Teste@gmail.com');
    cy.get('#laced_guest_checkout_dialing_code').select('+353').should('have.value', '+353');
    cy.get('#laced_guest_checkout_phone_number').clear().type('087123456').should('have.value', '087123456');
    cy.get('label[for="laced_guest_checkout_marketing_consent"]').click();
    cy.get('#laced_guest_checkout_marketing_consent').should('be.checked');
    cy.get('input[type="submit"][value="Next"]').click();
});

Cypress.Commands.add('finishPay', function() {
    cy.get('#cardholder_name')
    .clear()
    .type(faker.name.findName());
}) 