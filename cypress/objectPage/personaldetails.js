class Personal{
    vewDetails(){
        cy.get(":nth-child(6) > .oxd-main-menu-item").click()
        cy.get(".orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6", { timeout: 10000 })
        .should("contain.text", "Personal Details")
    }

    editDetails(){
        cy.get("[name='firstName']").clear().type("hari")
        cy.get(":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button").click()


        cy.on('window:alert', (alertText) => {
            // Assert the alert text if necessary
            expect(alertText).to.contains('Success');
            // You can perform actions after the alert is captured
        });
        
    }
    
}

export default Personal