import 'cypress-file-upload';

class Profile {
    updateProfile(filename) {
        cy.get(":nth-child(6) > .oxd-main-menu-item").click()
        cy.get(".orangehrm-edit-employee-image > .employee-image").click();
        // cy.get(".oxd-file-div > .oxd-icon-button > .oxd-icon").attachFile(filename)
    }
    verifyMessage(){
        cy.get(".oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space").click()
        cy.on('alert:window',(alert)=>{
            expect(alert).to.contains("Success")
        })
    }
}

export default Profile;