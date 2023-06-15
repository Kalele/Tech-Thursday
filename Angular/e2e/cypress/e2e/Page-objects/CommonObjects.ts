export class CommonObjects {
  DashboardButton = (): string => {
    return "//a[text()='Dashboard']";
  };
  HeroesButton = (): string => {
    return "//a[text()='Heroes']";
  };
  HeroDetail = (): string => {
    return '//app-hero-detail';
  };
  SelectFirstHero = (): string => {
    return "//div[@class='heroes-menu']/a[1]";
  };
  SelectDashboardHero = (number: string): string => {
    return "//div[@class='heroes-menu']/a[" + number + ']';
  };
  HeroesDetail = (): string => {
    return '//app-heroes';
  };
  HeroSearchInput = (): string => {
    return "//input[@id='search-box']";
  };
  HeroSearchFirstItem = (): string => {
    return "//*[@id='search-component']/ul/li/a";
  };
  ClearButton = (): string => {
    return "//button[@class='clear']";
  };
  HeroNameInput = (): string => {
    return "//input[@id='hero-name']";
  };
  GoBackButton = (): string => {
    return "//button[text()='go back']";
  };
  SaveButton = (): string => {
    return "//button[text()='save']";
  };

  ExecuteSearch() {
    this.ClickButtonByXpath(this.HeroSearchFirstItem());
  }

  ClickButtonByXpath(ElementXpath: string) {
    cy.xpath(ElementXpath).click();
  }

  EnterTextToInput(ElementXpath: string, Text: string) {
    cy.xpath(ElementXpath).clear().type(Text);
  }

  FindDomItem(ElementXpath: string) {
    cy.xpath(ElementXpath).should('exist');
  }

  VerifyIfTopFourHeoresDisplayed() {
    this.FindDomItem(this.SelectDashboardHero('1'));
    this.FindDomItem(this.SelectDashboardHero('2'));
    this.FindDomItem(this.SelectDashboardHero('3'));
    this.FindDomItem(this.SelectDashboardHero('4'));
  }

  VerifyIfHeroDetailIsDisplayed() {
    this.FindDomItem(this.HeroDetail());
  }

  VerifyIfHeroesDetailIsDisplayed(){
    this.FindDomItem(this.HeroesDetail());
  }
}