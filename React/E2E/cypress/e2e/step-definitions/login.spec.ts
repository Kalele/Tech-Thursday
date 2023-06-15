import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import { Login } from "../page-objects/Login";

Given(/^the user on the react-app landing page$/, () => {
	cy.visit("http://localhost:3000/");
});

Given(/^the user is on the login screen$/, () => {
	return true;
});

When(/^the user executes a login$/, () => {
	Login.ClickLoginButton();
});

Then(/^the user shall see the employee dashboard$/, () => {
	return true;
});
