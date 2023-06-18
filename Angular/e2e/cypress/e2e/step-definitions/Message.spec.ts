import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import { CommonObjects } from '../Page-objects/CommonObjects';

let commonObjects : CommonObjects = new CommonObjects();

Given(/^the user is on the landing page$/, () => {
    cy.visit("http://localhost:4200/dashboard");
});

Then(/^the messages are displayed$/, () => {
    commonObjects.FindDomItem(commonObjects.ClearButton())
});

When(/^the user clicks on the clear messages button$/, () => {
    commonObjects.ClickButtonByXpath(commonObjects.ClearButton())
});

Then(/^the all messages are removed$/, () => {
    commonObjects.VerifyDomItemDoesNotExist(commonObjects.ClearButton())
});