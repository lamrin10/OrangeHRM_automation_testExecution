import 'cypress-file-upload';


describe("profile picture",()=>{
    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")
        cy.get("[type='submit']").click()


    })
    it("profile pic update",()=>{
        cy.get(":nth-child(6) > .oxd-main-menu-item").click()
        cy.get(".orangehrm-edit-employee-image > .employee-image").click()
        cy.get(".oxd-file-div > .oxd-icon-button > .oxd-icon").attachFile("png.jpeg")

    })
      
    
})