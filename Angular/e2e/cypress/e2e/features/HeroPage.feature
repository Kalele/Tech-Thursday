Feature: HeroPage Functionality

    This feature tests the hero scenarios

    Background:
        Given the user is on the hero page

    Scenario: As a toh user, I want to remove a hero in order to see the hero list decrease
        Then the hero list will decrease