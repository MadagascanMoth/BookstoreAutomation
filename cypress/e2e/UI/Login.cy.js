/// <reference types="Cypress" />

import { loginPage } from "../../PageObject/loginPage";
import { navigation } from "../../PageObject/Navigation";
import data from "../../fixtures/data.json";
import dataCredentials from "../../fixtures/dataCredentials.json"
import { general } from "../../PageObject/General";


describe("Bookstore Login Test Cases", () => {
    beforeEach("Visit bookstore and login", ()=> {
        navigation.beforeLogin();

    })

    // NEGATIVE TEST CASES 
    it("Login without mandatory credentials", ()=>{
        loginPage.clickOnLoginBtn();
        general.errorSign.should("be.visible");

    })

    it("Login without password", ()=>{
        loginPage.login(Cypress.env("validUserName"), "{backspace}");
        general.errorSign.should("be.visible");

    })

    it("Login without username", ()=>{
        loginPage.login("{backspace}",Cypress.env("validPassword"));
        general.errorSign.should("be.visible");
        
    })

    it("Login with invalid username and password", ()=>{
        loginPage.login(dataCredentials.invalidUserName, dataCredentials.invalidPassword);
        general.invalidCredentialsMessage.should("have.text", data.invalidCredentialsMessage);
        
    })

    it("Login without registered user", ()=>{
        loginPage.login(dataCredentials.unregisteredUserName,dataCredentials.uregisteredPassword);
        general.invalidCredentialsMessage.should("have.text", data.invalidCredentialsMessage);

    })

   //POSITIVE TEST CASE 

    it("Login with valid credentials and logout", () => {
        cy.intercept("POST","https://demoqa.com/Account/v1/GenerateToken").as("validLogin");
        loginPage.login(Cypress.env("validUserName"), Cypress.env("validPassword"));
        loginPage.clickOnLogoutBtn();
        cy.wait("@validLogin").then((intercept) => {
            expect(intercept.response.statusCode).to.eq(200);
            expect(intercept.response.statusMessage).to.eq("OK");
        })

    })





    

})
    
