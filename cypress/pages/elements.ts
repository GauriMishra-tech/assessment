import { Element } from "../selectors/element.js"
import { TestData } from "../fixtures/testdata.js"
import { should } from "chai"
export class Elements{ 
    element = new Element()
    testdata = new TestData() 
    validateText(){
        cy.get('span').contains('Elements').click()
        cy.get('span').contains('Text Box').click(),
        cy.get(this.element.inputName).type(this.testdata.name),
        cy.get(this.element.inputEmail).type(this.testdata.email),
        cy.get(this.element.inputCurrentAddress).type(this.testdata.currentAddress),
        cy.get(this.element.inputPermanentAddress).type(this.testdata.permanentAddress),
        cy.get('button').contains('Submit').click(),
        cy.get('p').contains(this.testdata.name).should('be.visible'),
        cy.get('p').contains(this.testdata.email).should('be.visible'),
        cy.get('p').contains(this.testdata.currentAddress).should('be.visible'),
        cy.get('p').contains(this.testdata.permanentAddress).should('be.visible')
    }
    validateCheckBox(){
        cy.get('span').contains('Check Box').click(),
        cy.get(this.element.checkboxExpand).click(),
        cy.get(this.element.homeCheckbox).click(),
        cy.get(this.element.homeCheckbox).should('have.attr','aria-checked','true'),
        cy.get('span').contains('You have selected :').should('be.visible'),
        cy.get('span').contains('home').should('be.visible'),
        cy.get(this.element.downloadsCheckbox).click(),
        cy.get(this.element.downloadsCheckbox).should('have.attr','aria-checked','false'),
        cy.get('span').contains('downloads').should('not.exist')
    }
    validateRadioButton(){
        cy.get('span').contains('Radio Button').click(),
        cy.get('div.mb-3').contains('Do you like the site?').should('be.visible'),
        cy.get(this.element.yesRadioBtn).click(),
        cy.get('p').contains('You have selected').should('be.visible'),
        cy.get('span').contains('Yes').should('be.visible'),
        cy.get(this.element.impressiveRadioBtn).click(),
        cy.get('p').contains('You have selected ').should('be.visible'),
        cy.get('span').contains('Impressive').should('be.visible'),
        cy.get(this.element.noRadioBtn).siblings().should('have.attr','disabled')
    }
    validateWebTables(){
        cy.get('span').contains('Web Tables').click(),
        cy.get('button').contains('Add').click(),
        cy.get(this.element.inputFirstName).type('Sam'),
        cy.get(this.element.inputLastName).type('Smith'),
        cy.get(this.element.inputEmail).type('test@gmail.com'),
        cy.get(this.element.inputAge).type('25'),
        cy.get(this.element.inputSalary).type('10000'),
        cy.get(this.element.inputDepartment).type('Sales'),
        cy.get('button').contains('Submit').click(),
        cy.get('table>tbody>tr').should('have.length',4),
        cy.get(this.element.searchBar).type('Sales'),
        cy.get('table>tbody>tr').should('have.length',1),
        cy.get(this.element.editBtn).click(),
        cy.get(this.element.inputDepartment).clear().type('Finance'),
        cy.get('button').contains('Submit').click(),
        cy.get('table>tbody>tr').should('have.length',0)
    }
    validateButtons(){
        cy.get('span').contains('Buttons').click(),
        cy.get('button').contains('Double Click Me').dblclick(),
        cy.get('p').contains('You have done a double click').should('be.visible'),
        cy.get('button').contains('Right Click Me').rightclick(),
        cy.get('p').contains('You have done a right click').should('be.visible')
        cy.get('button.btn.btn-primary').last().click(),
        cy.get('p').contains('You have done a dynamic click').should('be.visible')
    }
    validateLinks(){
        cy.intercept('GET', 'https://demoqa.com/created').as('Created')
        cy.get('span').contains('Links').click()
        cy.get('a').contains('Home').should('have.attr','target', '_blank')
        .and('have.attr', 'href', 'https://demoqa.com')
        cy.get('a').contains('Created').click()
        cy.wait("@Created").its('response.statusCode').should('equal',201)
    }
}