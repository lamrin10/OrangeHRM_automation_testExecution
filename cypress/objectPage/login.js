class Login {
    setUsername(name) {
        cy.get("[name='username']").type(name)
    }

    setPassword(password) {
        cy.get("[name='password']").type(password)
    }

    clickLogin() {
        cy.get("[type='submit']").click()
    }

   
    verifyLogin() {
        // Increase the timeout to wait for the element to appear
        cy.get(".oxd-topbar-header-breadcrumb > .oxd-text", { timeout: 10000 })
        .should("have.text", "My Info")
       


            
        }
    verifyInvalid()
    {
        cy.get(".oxd-text oxd-text--p oxd-alert-content-text",{timeout:10000}).should("have.text","Invalid credentials")
    }
    
}

export default Login;
