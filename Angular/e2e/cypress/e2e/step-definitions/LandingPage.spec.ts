import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import { CommonObjects } from '../Page-objects/CommonObjects';

let commonObjects : CommonObjects = new CommonObjects();

Given(/^the user is on the landing page$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

Then(/^the user shall see the employee dashboard$/, () => {
	return true;
});

Then(/^the top four heroes are displayed$/, () => {
	 commonObjects.VerifyIfTopFourHeoresDisplayed();
});

When(/^the user clicks on first hero on the dashboard$/, () => {
	commonObjects.ClickButtonByXpath(commonObjects.SelectFirstHero());
});

Then(/^the hero detail is displayed$/, () => {
	commonObjects.VerifyIfHeroDetailIsDisplayed();
});

When(/^the user clicks on heroes tab$/, () => {
	commonObjects.ClickButtonByXpath(commonObjects.HeroesButton());
});

Then(/^the heroes detail is displayed$/, () => {
	commonObjects.VerifyIfHeroesDetailIsDisplayed();
});