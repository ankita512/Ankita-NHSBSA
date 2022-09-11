package com.nhs.utility;

import com.nhs.drivers.ManageDriver;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;



public class Utility extends ManageDriver {

    public String getTextFromElement(WebElement element) {
        return element.getText();
    }



    public void clickOnElement(WebElement element) {
        element.click();
    }

    public void sendTextToElement(WebElement element, String str) {
        element.sendKeys(str);
    }





    public static String getScreenshot(WebDriver driver, String screenshotName) {
        String dateName = new SimpleDateFormat("yyyyMMddhhmmss").format(new Date());
        TakesScreenshot ts = (TakesScreenshot) driver;
        File source = ts.getScreenshotAs(OutputType.FILE);

        String destination = System.getProperty("user.dir") + "/src/main/java/com/nhs/screenshots/" + screenshotName + dateName + ".png";
        File finalDestination = new File(destination);
        try {
            FileUtils.copyFile(source, finalDestination);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return destination;
    }


}


