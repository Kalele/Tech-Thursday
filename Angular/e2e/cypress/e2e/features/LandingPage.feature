Feature: LandingPage Functionality

    This Feature tests login scenarios

    Background: 
        Given the user is on the landing page

    Scenario: As a toh user, I want to navigate to landingpage in order to see the dashboard
        Then the user shall see the employee dashboard
        Then the top four heroes are displayed

    Scenario: As a TOH user, I want to navigate to dashboard in order to see top 4 Heroes displayed
        Then the top four heroes are displayed
    
    Scenario: As a TOH user, I want to select a hero from the dashboard in order to see the hero details displayed
        When the user clicks on first hero on the dashboard
        Then the hero detail is displayed

    Scenario: As a TOH user, I want to navigate to heroes page in order to see the heroes details
        When the user clicks on heroes tab
        Then the heroes detail is displayed