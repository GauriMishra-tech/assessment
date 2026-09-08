import { Elements } from "../pages/elements.js"
describe('Validate elements', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("baseUrl"))
    }),
    it('ValidateElements', () => {
        const elements = new Elements()
        elements.validateText()
        elements.validateCheckBox()
        elements.validateRadioButton()
        elements.validateWebTables()
        elements.validateButtons()
        elements.validateLinks()
    })
})