class LoginPageAPI{
    post({ 
        userName = Cypress.env("validUserName") ,
        password = Cypress.env("validPassword"), 
        url = "https://demoqa.com/Account/v1/GenerateToken",
        status = 200
      
    }) {
        return cy.request ({
            method:"POST",
            url:url,
            body:{
                failOnStatusCode: false,
                "userName":userName,
                "password":password
            }
           

    }).then((response)=>{
        return response;
    })
    }
}

export const loginPageAPI = new LoginPageAPI();