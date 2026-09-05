describe('Validate elements', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/forms'),
        cy.get('span').contains('Elements').click()
    }),
    it('ValidateText', () => {
        
        cy.get('span').contains('Text Box').click(),
        cy.get('input[placeholder="Full Name"]').type('Test Full Name'),
        cy.get('input[placeholder="name@example.com"]').type('test@gmail.com'),
        cy.get('textarea[placeholder="Current Address"]').type('Test Current Address'),
        cy.get('#permanentAddress').type('Test Permanent Address'),
        cy.get('button').contains('Submit').click(),
        cy.get('p').contains('Test Full Nam').should('be.visible'),
        cy.get('p').contains('test@gmail.com').should('be.visible'),
        cy.get('p').contains('Test Current Address').should('be.visible'),
        cy.get('p').contains('Test Permanent Address').should('be.visible')
    }),
    it('Validate CheckBox', () => {
        //cy.visit('https://demoqa.com/forms'),
        //cy.get('span').contains('Elements').click(),
        cy.get('span').contains('Check Box').click(),
        cy.get('.rc-tree-switcher.rc-tree-switcher_close').click(),
        cy.get('.rc-tree-checkbox[aria-label="Select Home"]').click(),
        cy.get('.rc-tree-checkbox[aria-label="Select Home"]').should('have.attr','aria-checked','true'),
        cy.get('span').contains('You have selected :').should('be.visible'),
        cy.get('span').contains('home').should('be.visible'),
        cy.get('.rc-tree-checkbox[aria-label="Select Downloads"]').click(),
        cy.get('.rc-tree-checkbox[aria-label="Select Downloads"]').should('have.attr','aria-checked','false'),
        cy.get('span').contains('downloads').should('not.exist')
    })
})