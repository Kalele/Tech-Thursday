export class Login{

    //Selectors
    static loginBtn = ():string => {return "//input[@type='submit']"}

    //Action methods
    static ClickLoginButton(){
        cy.xpath(this.loginBtn())
        .click();
    }
}