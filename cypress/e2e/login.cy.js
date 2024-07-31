import Login from "../objectPage/login";

describe("login automation", () => {
  it("test login", () => {

    cy.fixture("logindata.json").then((data)=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

      
        let ln = new Login();

      
        ln.setUsername(data.name);
        ln.setPassword(data.password);
        ln.clickLogin();
        if (data.name== "Admin" && data.password == "admin123"){
          ln.verifyLogin()

        }

        else{
          ln.verifyInvalid()
        }


      
      


    })
    
      
       
      
    
  });
});
