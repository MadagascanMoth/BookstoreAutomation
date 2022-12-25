/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import "cypress-iframe";

import { navigation } from "../../PageObject/Navigation";
import { registerPage } from "../../PageObject/registerPage";
import { faker } from "@faker-js/faker";
import dataCredentials from "../../fixtures/dataCredentials.json";
import data from "../../fixtures/data.json";
import { general } from "../../PageObject/General";

let user = {
    firstName: faker.name.firstName() ,
    lastName: faker.name.lastName(),
    userName: faker.internet.userName(),
    password: Cypress.env("validPassword")
    
  
  };
describe("Bookstore Register Test Cases",()=>{
    beforeEach("Visit Bookstore and register with a new user",()=>{
        navigation.beforeRegister();
    })

      it("Register without required reCaptcha check in button checked",()=>{
        registerPage.register(user.firstName,user.lastName,user.userName,Cypress.env("validPassword"));
        general.errorRecaptcha.should("have.text", data.verifyRecaptchaMessage);

    })
    it("Register with invalid password",()=>{
        registerPage.register(user.firstName,user.lastName,user.userName,dataCredentials.invalidPassword);
        

    })
    

})