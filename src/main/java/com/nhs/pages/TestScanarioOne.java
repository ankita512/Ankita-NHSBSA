package com.nhs.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.nhs.utility.Utility;

public class TestScanarioOne extends Utility {

    public TestScanarioOne() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//button[@id='nhsuk-cookie-banner__link_accept_analytics']")
    WebElement acceptCookies;


    @CacheLookup
    @FindBy(xpath = "//input[@id='next-button']")
    WebElement clickOnStartButton;


    @CacheLookup
    @FindBy(xpath = "//input[@id='radio-wales']")
    WebElement radioWales;

    @CacheLookup
    @FindBy(xpath = "//input[@id='next-button']")
    WebElement nextButton;


    @CacheLookup
    @FindBy(xpath = "//input[@id='radio-yes']")
    WebElement selectRadioYes;

    @CacheLookup
    @FindBy(xpath = "//input[@id='dob-day']")
    WebElement dateOfBirth;

    @CacheLookup
    @FindBy(xpath = "//input[@id='dob-month']")
    WebElement monthOfBirth;

    @CacheLookup
    @FindBy(xpath = "//input[@id='dob-year']")
    WebElement yearOfBirth;

    @CacheLookup
    @FindBy(xpath = "//input[@id='radio-no']")
    WebElement selectRadioNO;

    @CacheLookup
    @FindBy(xpath = "//h1[@id='result-heading']")
    WebElement result;

    @CacheLookup
    @FindBy(xpath = "//p[@class='lede']")
    WebElement underAgeMessage;



    public void clickOnAcceptCookies(){
        clickOnElement(acceptCookies);
    }

    public void setClickOnStartButton(){
        clickOnElement(clickOnStartButton);
    }

    public void selectWalesRadioButton(){
        clickOnElement(radioWales);
    }

    public void clickOnNextButton(){
        clickOnElement(nextButton);
    }

    public void selectYesRadioButton(){
        clickOnElement(selectRadioYes);
    }

    public void enterDayOfBirth(String date){
        sendTextToElement(dateOfBirth,date);
    }

    public void enterMonthOfBirth(String month){
        sendTextToElement(monthOfBirth,month);
    }


    public void enterYearOfBirth(String year){
        sendTextToElement(yearOfBirth,year);
    }

    public void selectNoRadioButton(){
        clickOnElement(selectRadioNO);
    }

    public String setResultYougetHelp(){
        String actual = getTextFromElement(result);
        System.out.println(getTextFromElement(result));
        return  actual;
    }

    public String verifyMessage(){
        String actual = getTextFromElement(underAgeMessage);
        System.out.println(getTextFromElement(underAgeMessage));
        return  actual;
    }






























































}
