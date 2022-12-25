class LoginPage{

    get userName(){
        return cy.get("#userName");

    }

    get password(){
        return cy.get("#password");
    }

    get loginBtn(){
        return cy.get("#login");
    }

    get logoutBtn(){
        return cy.get("#submit");
    }

    clickOnLoginBtn(){
        this.loginBtn.click();
    }

    clickOnLogoutBtn(){
        this.logoutBtn.click();
    }


    login(username, pass){
        this.userName.should("be.visible").type(username);
        this.password.should("be.visible").type(pass);
        this.loginBtn.should("be.visible").click();
    }


    


}

export const loginPage = new LoginPage();