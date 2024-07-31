
import Personal from "../objectPage/personaldetails";
import Profile from "../objectPage/profilepicture";
import Login from "../objectPage/login";

describe("profile picture update",()=>{
    it("update profile",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        let lg = new Login()
        let vd =new Personal()
        let pr = new Profile()

        lg.setUsername("Admin")
        lg.setPassword("admin123")
        lg.clickLogin()
        
        pr.updateProfile()
        // pr.verifyMessage()





    })


})