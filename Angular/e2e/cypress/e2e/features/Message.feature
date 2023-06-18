Feature: Message Functionality

    This feature tests the message scenarios

    Background:
        Given the user is on the landing page

    Scenario: As a toh user, I want to clear messages in order to see the message log cleared
        When the user clicks on the clear button
        Then the messages will be removed