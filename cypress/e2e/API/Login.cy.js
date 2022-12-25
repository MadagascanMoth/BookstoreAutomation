/// <reference types="cypress" />

import { navigation } from "../../PageObject/Navigation"
import { loginPageAPI } from "../../fixtures/mockAPI/loginPageAPI";
import token from "../../fixtures/token.json";
import dataCredentials from "../../fixtures/dataCredentials.json";


describe("Login through Backend Test Cases", ()=>{
    beforeEach("Visit bookstore and login", ()=>{
        navigation.beforeLogin();
    })

    it("Login with valid credentials and logout", () => {
        loginPageAPI.post({}).then((response)=>{
           // token = response.body.token;
            cy.writeFile("cypress/fixtures/token.json", { token: token });

        })
        
    })


    it("Login without mandatory credentials", ()=>{
      loginPageAPI.post({userName:" ",password:" "}).then((response)=>{
        expect(response.status).to.eq(400);
        expect(response.statusText).to.eq("Bad Request");

      })
       

    })

    it("Login without password", ()=>{
       loginPageAPI.post({password:" "}).then((response)=>{
        expect(response.status).to.eq(400);
        expect(response.statusText).to.eq("Bad Request");

       })

    })

    it("Login without username", ()=>{
        loginPageAPI.post({userName: " "}).then((response)=>{
            expect(response.status).to.eq(400);
            expect(response.statusText).to.eq("Bad Request");
        })
       
       
        
    })

    it("Login with invalid username and password", ()=>{
       loginPageAPI.post({userName:dataCredentials.invalidUserName, password:dataCredentials.invalidPassword}).then((response)=>{
        expect(response.status).to.eq(401);
        expect(response.statusText).to.eq("Unauthorized");

       })
       
        
    })


})