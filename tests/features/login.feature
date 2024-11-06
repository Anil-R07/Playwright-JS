Feature: Login to application 

Scenario Outline: Valid login 
    Given User is on Login screen 
    When Adding valid username 
    And Adding valid password
    Then Click on Login button 
