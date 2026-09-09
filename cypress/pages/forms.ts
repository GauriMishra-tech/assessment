import selector from "../selectors/selectors.json"
import testdata from "../fixtures/testdata.json"
export class Forms{
    validateForms(){
        cy.get('span').contains('Forms').click()
        cy.get('span').contains('Practice Form').click()
        cy.get(selector.inputFirstName).type(testdata.firstName)
        cy.get(selector.inputLastName).type(testdata.lastName)
        cy.get(selector.inputEmail).type(testdata.email)
        cy.get(selector.genderRadioBtn).click()
        cy.get(selector.inputMobileNo).type(testdata.mobileNumber)
        //cy.get(selector.inputDate).click()
        //cy.get(selector.inputDate).click()
        //cy.get(selector.selectYear).click()
        //cy.get(selector.selectMonth).click()
        //cy.get(selector.selectDay).click()
        cy.get(selector.inputSubject).type(testdata.subject + "{Enter}")
        cy.get(selector.hobbiesCheckbox).click()
        cy.get(selector.inputCurrentAddress).type(testdata.currentAddress)
        cy.get(selector.selectState).type("N {Enter}")
        cy.get(selector.selectCity).type("D {Enter}")
        cy.get('button').contains('Submit').click()
        cy.get('.modal-content div').contains('Thanks for submitting the form').should("be.visible")
        cy.get('tr>td').contains(testdata.firstName+' '+testdata.lastName)
        cy.get('tr>td').contains(testdata.email)
        cy.get('tr>td').contains(testdata.mobileNumber)
        cy.get('tr>td').contains(testdata.subject)
        cy.get('tr>td').contains(testdata.currentAddress)
    }

}