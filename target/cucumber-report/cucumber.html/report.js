$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/walesticket.feature");
formatter.feature({
  "line": 1,
  "name": "NHS help cost test",
  "description": "As a person from Wales\r\nI need to know what help I can get with my NHS costs\r\nSo that I can get the treatment I need",
  "id": "nhs-help-cost-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4013435400,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "I am on NHS Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I click on accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Start now button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select Wales as a country",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select yes radio button for your gp practice in scotland or wales",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select wales as dental practice",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "Mystepdef.iClickOnAcceptCookies()"
});
formatter.result({
  "duration": 140555300,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnStartNowButton()"
});
formatter.result({
  "duration": 493918100,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSelectWalesAsACountry()"
});
formatter.result({
  "duration": 59867800,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 284598700,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSelectYesRadioButtonForYourGpPracticeInScotlandOrWales()"
});
formatter.result({
  "duration": 46245400,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 260123300,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSelectWalesAsDentalPractice()"
});
formatter.result({
  "duration": 41636000,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 378021800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "As a user I want to check if I get help for nhs costs for age over 18 and want to see to get help with NHS costs message Successfully",
  "description": "",
  "id": "nhs-help-cost-test;as-a-user-i-want-to-check-if-i-get-help-for-nhs-costs-for-age-over-18-and-want-to-see-to-get-help-with-nhs-costs-message-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I enter \"4\" date of birth",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I enter \"12\" month of birth",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter \"1987\" year of birth",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Yes radio button of live with a partner",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select No radio button with  partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select No radio button for question Are you pregnant or have you given birth in the last 12 months",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select Yes radio button for question Do you have an injury or illness caused by serving in the armed forces?",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select No radio button after selecting question you have diabetes",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select No radio Button after selecting question you have glaucoma",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select No radio button for partner live permanently in a care home",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select No radio button for investments or property",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User can get help for nhs costs for age over eighteen and see message Successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 9
    }
  ],
  "location": "Mystepdef.iEnterDateOfBirth(String)"
});
formatter.result({
  "duration": 62059100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 9
    }
  ],
  "location": "Mystepdef.iEnterMonthOfBirth(String)"
});
formatter.result({
  "duration": 56767000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1987",
      "offset": 9
    }
  ],
  "location": "Mystepdef.iEnterYearOfBirth(String)"
});
formatter.result({
  "duration": 60290000,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 288875100,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSelectYesRadioButtonOfLiveWithAPartner()"
});
formatter.result({
  "duration": 54688800,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 274615700,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSelectNoRadioButtonWithPartnerClaimAnyBenefitsOrTaxCredits()"
});
formatter.result({
  "duration": 46394800,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 254586100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 91
    }
  ],
  "location": "Mystepdef.iSelectNoRadioButtonForQuestionAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(int)"
});
formatter.result({
  "duration": 43156900,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 266694900,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSelectYesRadioButtonForQuestionDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces()"
});
formatter.result({
  "duration": 43404800,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 249788200,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSelectNoRadioButtonAfterSelectingQuestionYouHaveDiabetes()"
});
formatter.result({
  "duration": 51130000,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 257315800,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSelectNoRadioButtonAfterSelectingQuestionYouHaveGlaucoma()"
});
formatter.result({
  "duration": 41470800,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 269810200,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSelectNoRadioButtonForPartnerLivePermanentlyInACareHome()"
});
formatter.result({
  "duration": 45727500,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 269230000,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSelectNoRadioButtonForInvestmentsOrProperty()"
});
formatter.result({
  "duration": 49730000,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 297461100,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.userCanGetHelpForNhsCostsForAgeOverEighteenAndSeeMessageSuccessfully()"
});
formatter.result({
  "duration": 35023000,
  "status": "passed"
});
formatter.after({
  "duration": 77900,
  "status": "passed"
});
formatter.before({
  "duration": 2285508900,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "I am on NHS Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I click on accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Start now button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select Wales as a country",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select yes radio button for your gp practice in scotland or wales",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select wales as dental practice",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "Mystepdef.iClickOnAcceptCookies()"
});
formatter.result({
  "duration": 56345700,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnStartNowButton()"
});
formatter.result({
  "duration": 297978200,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSelectWalesAsACountry()"
});
formatter.result({
  "duration": 66354300,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 363119600,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSelectYesRadioButtonForYourGpPracticeInScotlandOrWales()"
});
formatter.result({
  "duration": 49337400,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 389605000,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSelectWalesAsDentalPractice()"
});
formatter.result({
  "duration": 45247700,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 275135600,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "As a User I want to check if I get help with nhs costs for age over 65",
  "description": "",
  "id": "nhs-help-cost-test;as-a-user-i-want-to-check-if-i-get-help-with-nhs-costs-for-age-over-65",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "I enter \"21\" date of birth",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I enter \"08\" month of birth",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter \"1950\" year of birth",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I select No radio button of live with a partner",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I select No radio button with  partner claim any benefits or tax credits",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I select No for injury and illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I select No for do you live permanently in care home question",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I select No radio button for Investments and property",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I see the message you get help with nhs",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 9
    }
  ],
  "location": "Mystepdef.iEnterDateOfBirth(String)"
});
formatter.result({
  "duration": 61717300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08",
      "offset": 9
    }
  ],
  "location": "Mystepdef.iEnterMonthOfBirth(String)"
});
formatter.result({
  "duration": 54511400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1950",
      "offset": 9
    }
  ],
  "location": "Mystepdef.iEnterYearOfBirth(String)"
});
formatter.result({
  "duration": 64973500,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 266386300,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSelectNoRadioButtonOfLiveWithAPartner()"
});
formatter.result({
  "duration": 50768600,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 236515900,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSelectNoRadioButtonWithPartnerClaimAnyBenefitsOrTaxCredits()"
});
formatter.result({
  "duration": 47106000,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 257564200,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSelectNoForInjuryAndIllnessCausedByServingInTheArmedForces()"
});
formatter.result({
  "duration": 47596600,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 251448600,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSelectNoForDoYouLivePermanentlyInCareHomeQuestion()"
});
formatter.result({
  "duration": 46226300,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 267987500,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSelectNoRadioButtonForInvestmentsAndProperty()"
});
formatter.result({
  "duration": 54008900,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 265914600,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSeeTheMessageYouGetHelpWithNhs()"
});
formatter.result({
  "duration": 33296400,
  "status": "passed"
});
formatter.after({
  "duration": 50000,
  "status": "passed"
});
formatter.before({
  "duration": 2277914400,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "I am on NHS Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I click on accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Start now button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select Wales as a country",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select yes radio button for your gp practice in scotland or wales",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select wales as dental practice",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.match({
  "location": "Mystepdef.iClickOnAcceptCookies()"
});
formatter.result({
  "duration": 62307000,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnStartNowButton()"
});
formatter.result({
  "duration": 272864700,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSelectWalesAsACountry()"
});
formatter.result({
  "duration": 52188100,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 336682800,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSelectYesRadioButtonForYourGpPracticeInScotlandOrWales()"
});
formatter.result({
  "duration": 43755000,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 445074500,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSelectWalesAsDentalPractice()"
});
formatter.result({
  "duration": 50119000,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 258145500,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "As a User I want to check if I get help with nhs costs for age under 18",
  "description": "",
  "id": "nhs-help-cost-test;as-a-user-i-want-to-check-if-i-get-help-with-nhs-costs-for-age-under-18",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 60,
  "name": "I enter \"21\" date of birth",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I enter \"08\" month of birth",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I enter \"2010\" year of birth",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click on Next button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I see the result you get help with nhs for under age",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 9
    }
  ],
  "location": "Mystepdef.iEnterDateOfBirth(String)"
});
formatter.result({
  "duration": 60257800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08",
      "offset": 9
    }
  ],
  "location": "Mystepdef.iEnterMonthOfBirth(String)"
});
formatter.result({
  "duration": 64677600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2010",
      "offset": 9
    }
  ],
  "location": "Mystepdef.iEnterYearOfBirth(String)"
});
formatter.result({
  "duration": 56147100,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iClickOnNextButton()"
});
formatter.result({
  "duration": 434651100,
  "status": "passed"
});
formatter.match({
  "location": "Mystepdef.iSeeTheResultYouGetHelpWithNhsForUnderAge()"
});
formatter.result({
  "duration": 34694400,
  "status": "passed"
});
formatter.after({
  "duration": 17200,
  "status": "passed"
});
});