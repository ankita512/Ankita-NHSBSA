package com.nhs.cucumber;

import com.cucumber.listener.Reporter;
import com.nhs.drivers.ManageDriver;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import com.nhs.propertyfile.PropertyReader;
import com.nhs.utility.Utility;

import java.io.IOException;

public class Hooks extends ManageDriver {


    @Before
    public void setUp() {

        selectBrowser(PropertyReader.getInstance().getProperty("browser"));
    }

    @After
    public void tearDown(Scenario scenario) {

        if (scenario.isFailed()) {
            String screenShotPath = Utility.getScreenshot(driver, scenario.getName().replace(" ", "_"));
            try {
                Reporter.addScreenCaptureFromPath(screenShotPath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}