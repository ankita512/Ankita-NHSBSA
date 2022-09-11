package com.nhs.cucumber.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import com.nhs.pages.TestScanarioOne;
import org.junit.Assert;

public class Mystepdef {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on accept cookies$")
    public void iClickOnAcceptCookies() {
        new TestScanarioOne().clickOnAcceptCookies();
    }
    @And("^I click on Start now button$")
    public void iClickOnStartNowButton() {
        new TestScanarioOne().setClickOnStartButton();
    }

    @And("^I select Wales as a country$")
    public void iSelectWalesAsACountry() {
        new TestScanarioOne().selectWalesRadioButton();
    }

    @And("^I click on Next button$")
    public void iClickOnNextButton() {
        new TestScanarioOne().clickOnNextButton();
    }

    @And("^I select yes radio button for your gp practice in scotland or wales$")
    public void iSelectYesRadioButtonForYourGpPracticeInScotlandOrWales() {
        new TestScanarioOne().selectYesRadioButton();
    }

    @And("^I select wales as dental practice$")
    public void iSelectWalesAsDentalPractice() {
        new TestScanarioOne().selectWalesRadioButton();
    }

    @When("^I enter \"([^\"]*)\" date of birth$")
    public void iEnterDateOfBirth(String date)  {
        new TestScanarioOne().enterDayOfBirth(date);

    }

    @And("^I enter \"([^\"]*)\" month of birth$")
    public void iEnterMonthOfBirth(String month)  {
        new TestScanarioOne().enterMonthOfBirth(month);
    }

    @And("^I enter \"([^\"]*)\" year of birth$")
    public void iEnterYearOfBirth(String year)  {
        new TestScanarioOne().enterYearOfBirth(year);
    }

    @And("^I select Yes radio button of live with a partner$")
    public void iSelectYesRadioButtonOfLiveWithAPartner() {
        new TestScanarioOne().selectYesRadioButton();
    }

    @And("^I select No radio button with  partner claim any benefits or tax credits$")
    public void iSelectNoRadioButtonWithPartnerClaimAnyBenefitsOrTaxCredits() {
        new TestScanarioOne().selectNoRadioButton();
    }


    @And("^I select No radio button for question Are you pregnant or have you given birth in the last (\\d+) months$")
    public void iSelectNoRadioButtonForQuestionAreYouPregnantOrHaveYouGivenBirthInTheLastMonths(int arg0) {
        new TestScanarioOne().selectNoRadioButton();
    }


    @And("^I select Yes radio button for question Do you have an injury or illness caused by serving in the armed forces\\?$")
    public void iSelectYesRadioButtonForQuestionDoYouHaveAnInjuryOrIllnessCausedByServingInTheArmedForces() {
        new TestScanarioOne().selectYesRadioButton();
    }


    @And("^I select No radio button after selecting question you have diabetes$")
    public void iSelectNoRadioButtonAfterSelectingQuestionYouHaveDiabetes() {
        new TestScanarioOne().selectNoRadioButton();
    }

    @And("^I select No radio Button after selecting question you have glaucoma$")
    public void iSelectNoRadioButtonAfterSelectingQuestionYouHaveGlaucoma() {
        new TestScanarioOne().selectNoRadioButton();
    }

    @And("^I select No radio button for partner live permanently in a care home$")
    public void iSelectNoRadioButtonForPartnerLivePermanentlyInACareHome() {
        new TestScanarioOne().selectNoRadioButton();
    }

    @And("^I select No radio button for investments or property$")
    public void iSelectNoRadioButtonForInvestmentsOrProperty() {
        new TestScanarioOne().selectNoRadioButton();
    }

    @Then("^User can get help for nhs costs for age over eighteen and see message Successfully$")
    public void userCanGetHelpForNhsCostsForAgeOverEighteenAndSeeMessageSuccessfully() {
        String exaptedresult  = "Based on what you've told us\n" +
                "You get help with NHS costs";
        Assert.assertEquals(exaptedresult,new TestScanarioOne().setResultYougetHelp());
    }


    @And("^I select No radio button of live with a partner$")
    public void iSelectNoRadioButtonOfLiveWithAPartner() {
        new TestScanarioOne().selectNoRadioButton();
    }

    @And("^I select No for injury and illness caused by serving in the armed forces$")
    public void iSelectNoForInjuryAndIllnessCausedByServingInTheArmedForces() {
        new TestScanarioOne().selectNoRadioButton();
    }

    @And("^I select No for do you live permanently in care home question$")
    public void iSelectNoForDoYouLivePermanentlyInCareHomeQuestion() {
        new TestScanarioOne().selectNoRadioButton();
    }

    @And("^I select No radio button for Investments and property$")
    public void iSelectNoRadioButtonForInvestmentsAndProperty() {
        new TestScanarioOne().selectNoRadioButton();
    }

    @Then("^I see the message you get help with nhs$")
    public void iSeeTheMessageYouGetHelpWithNhs() {
        String exaptedresult  = "Based on what you've told us\n" +
                "You get help with NHS costs";
        Assert.assertEquals(exaptedresult,new TestScanarioOne().setResultYougetHelp());
    }

    @Then("^I see the result you get help with nhs for under age$")
    public void iSeeTheResultYouGetHelpWithNhsForUnderAge() {
        String exaptedresult  = "Because you're under 16:";
        Assert.assertEquals(exaptedresult,new TestScanarioOne().verifyMessage());
    }


}