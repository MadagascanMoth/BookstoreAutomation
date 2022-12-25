import "cypress-iframe";
class RegisterPage{

    get firstName (){
        return cy.get("#firstname");
    }

    get lastName(){
        return cy.get ("#lastname");
    }
    
    get userName(){
        return cy.get ("#userName");
    }

    get password(){
        return cy.get ("#password");
    }

    get reCaptcha(){
        return cy.get("iframe[title='reCAPTCHA'");
    }

    get registerBtn(){
        return cy.get ("#register");
    }


    register(name, surname, user, pass){
        this.firstName.should("be.visible").type(name);
        this.lastName.should("be.visible").type(surname);
        this.userName.should("be.visible").type(user);
        this.password.should("be.visible").type(pass);  
        this.reCaptcha.click();
        this.registerBtn.click();



    }

}

export const registerPage = new RegisterPage();