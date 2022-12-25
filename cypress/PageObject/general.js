class General{

    get header(){
        return cy.get(".main-header");
    }

    get greeting(){
        return cy.get("h2");
    }

    get text(){
        return cy.get("h5");
    }

    get errorSign(){
        return cy.get(".is-invalid");
    }

    get invalidCredentialsMessage(){
        return cy.get("p");
    }

    get regGreet(){
        return cy.get ("h4")
    }

    get errorRecaptcha(){
        return cy.get("#name");
    }

    

   
    


   

}
export const general = new General();