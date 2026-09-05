
describe('Validate elements', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("baseUrl")),
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
    })
    it('Validate CheckBox', () => {
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
    it('Validate Radio Button', () => {
        cy.get('span').contains('Radio Button').click(),
        cy.get('div.mb-3').contains('Do you like the site?').should('be.visible'),
        cy.get('label[for="yesRadio"]').click(),
        cy.get('p').contains('You have selected').should('be.visible'),
        cy.get('span').contains('Yes').should('be.visible'),
        cy.get('label[for="impressiveRadio"]').click(),
        cy.get('p').contains('You have selected ').should('be.visible'),
        cy.get('span').contains('Impressive').should('be.visible'),
        cy.get('label[for="noRadio"]').siblings().should('have.attr','disabled')
    }),
    it('Validate Web Tables', () => {
        cy.get('span').contains('RWeb Tables').click(),
        cy.get('button').contains('Add').click(),
        cy.get('input[placeholder="First Name"]').type('Sam'),
        cy.get('input[placeholder="Last Name"]').type('Smith'),
        cy.get('input[placeholder="name@example.com"]').type('test@gmail.com'),
        cy.get('input[placeholder="Age"]').type('25'),
        cy.get('input[placeholder="Salary"]').type('10000'),
        cy.get('input[placeholder="Department"]').type('Sales'),
        cy.get('button').contains('Submit').click(),
        cy.get('table>tbody>tr').should('have.length',4),
        cy.get('input[placeholder="Type to search"]').type('Sales'),
        cy.get('table>tbody>tr').should('have.length',1),
        cy.get('span[title="Edit"]').click(),
        cy.get('input[placeholder="Department"]').type('Finance'),
        cy.get('table>tbody>tr').should('have.length',0)
    })
    it('Validate Buttons', () => {
        cy.get('span').contains('Double Click Me').dblclick(),
        cy.get('p').contains('You have done a double click').should('be.visible'),
        cy.get('span').contains('Right Click Me').rightclick(),
        cy.get('p').contains('You have done a right click').should('be.visible')
        cy.get('span').contains('Click Me').click(),
        cy.get('p').contains('You have done a dynamic click').should('be.visible')
    })
})