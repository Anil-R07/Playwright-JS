Feature: Login to ParaBank 

Scenario Outline: Valid login 
    Given User is on Login screen 
    When Adding valid username 
    When Adding valid password
    Then Click on Login button 
