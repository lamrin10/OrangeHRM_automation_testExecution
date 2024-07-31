import Login from "../objectPage/login";
import Personal from "../objectPage/personaldetails";

describe("personal detail check", () => {
    it("details personal", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        let hn = new Login();
        let pn = new Personal();
        hn.setUsername("Admin");
        hn.setPassword("admin123");
        hn.clickLogin();
        
        pn.vewDetails();
        pn.editDetails()
    });
});
