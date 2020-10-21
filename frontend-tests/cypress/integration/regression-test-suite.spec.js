/// <reference types="cypress" />


// this is a test suite
describe('Regression test suite',function(){

    //this is a test case
    it('Perform valid login',function(){
        cy.visit('http://localhost:3000')
    })

})