Feature: NHS help cost test
  As a person from Wales
  I need to know what help I can get with my NHS costs
  So that I can get the treatment I need


  Background:I am on NHS Home Page
    When I click on accept cookies
    And I click on Start now button
    And I select Wales as a country
    And I click on Next button
    And I select yes radio button for your gp practice in scotland or wales
    And I click on Next button
    And I select wales as dental practice
    And I click on Next button

  Scenario: As a user I want to check if I get help for nhs costs for age over 18 and want to see to get help with NHS costs message Successfully
    When   I enter "4" date of birth
    And   I enter "12" month of birth
    And   I enter "1987" year of birth
    And   I click on Next button
    And   I select Yes radio button of live with a partner
    And   I click on Next button
    And   I select No radio button with  partner claim any benefits or tax credits
    And   I click on Next button
    And   I select No radio button for question Are you pregnant or have you given birth in the last 12 months
    And   I click on Next button
    And   I select Yes radio button for question Do you have an injury or illness caused by serving in the armed forces?
    And   I click on Next button
    And   I select No radio button after selecting question you have diabetes
    And   I click on Next button
    And   I select No radio Button after selecting question you have glaucoma
    And   I click on Next button
    And   I select No radio button for partner live permanently in a care home
    And   I click on Next button
    And   I select No radio button for investments or property
    And   I click on Next button
    Then  User can get help for nhs costs for age over eighteen and see message Successfully


  Scenario: As a User I want to check if I get help with nhs costs for age over 65
    When I enter "21" date of birth
    And  I enter "08" month of birth
    And  I enter "1950" year of birth
    And  I click on Next button
    And  I select No radio button of live with a partner
    And  I click on Next button
    And  I select No radio button with  partner claim any benefits or tax credits
    And  I click on Next button
    And  I select No for injury and illness caused by serving in the armed forces
    And  I click on Next button
    And  I select No for do you live permanently in care home question
    And  I click on Next button
    And  I select No radio button for Investments and property
    And  I click on Next button
    Then I see the message you get help with nhs


  Scenario: As a User I want to check if I get help with nhs costs for age under 18
    When I enter "21" date of birth
    And  I enter "08" month of birth
    And  I enter "2010" year of birth
    And  I click on Next button
    Then I see the result you get help with nhs for under age


