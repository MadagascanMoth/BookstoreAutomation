import { general } from "./General";
import data from "../fixtures/data.json";

class Navigation{



    get bookstoreAppBtn(){
        return cy.get(".category-cards :nth-child(6)");
    }

    clickOnBookstoreButton(){
        this.bookstoreAppBtn.click();
    }

    get loginButton(){
        return cy.get("#login");
    }

    get registerButton(){
        return cy.get("#newUser")
    }

    clickOnLoginButton(){
        this.loginButton.click();
    }

    clickOnRegisterButton(){
        this.registerButton.click();
    }

    beforeLogin(){
        cy.visit("/");
        cy.url().should("contain", "demoqa.com");
        this.clickOnBookstoreButton();
        this.clickOnLoginButton();
        general.header.should("have.text", data.loginHeader);
        general.greeting.should("have.text", data.loginGreeting);
        general.text.should("have.text", data.loginText);
        cy.url().should("contain", "/login");
    }

    beforeRegister(){
        cy.visit("/");
        cy.url().should("contain", "demoqa.com");
        this.clickOnBookstoreButton();
        this.clickOnLoginButton();
        this.clickOnRegisterButton();
        general.header.should("have.text", data.registerHader);
        general.regGreet.should("have.text", data.registerGreeting);
        cy.url().should("contain", "/register");

        


    }

}
export const navigation = new Navigation ();