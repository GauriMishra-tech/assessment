import { TestData } from "../fixtures/testdata.js";
export class ApiTest{
    testData = new TestData()
    validateUser(){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        expect(this.testData.user, 'User object').to.have.property('id');
        expect(this.testData.user.id, 'Id should be a number').to.be.a('number');
        expect(this.testData.user, 'User object').to.have.property('name');
        expect(this.testData.user.name, 'Name should be a string').to.be.a('string');
        expect(this.testData.user.name.trim(), 'Name should not be empty').to.not.equal('');
        expect(this.testData.user, 'User object').to.have.property('email');
        expect(this.testData.user.email, 'Email should have valid format').to.match(emailRegex);
        expect(this.testData.user, 'User object').to.have.property('role');
        expect(this.testData.user.role, 'Role should be an array').to.be.an('array');
        expect(this.testData.user.role.length, 'Atleat 1 Role exists').to.be.greaterThan(0);
    }
}