import { Elements } from "../pages/elements.js"
import {Forms} from "../pages/forms.js"
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
        elements.validateBrokenImageAndLink()
        elements.validateUploadAndDownload()
        elements.validateDynamicProperties()
    })
    it('Validate Forms', () => {
        const forms = new Forms()
        forms.validateForms()
    })
})