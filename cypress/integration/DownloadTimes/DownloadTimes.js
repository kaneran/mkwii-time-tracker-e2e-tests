import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import { verifyCsvData } from "../utils";
import PersonalRecordsPage from "../_pageObjects/PersonalRecordsPage";

Given("the user visits the personal records page", () => {
  PersonalRecordsPage.visit();
  PersonalRecordsPage.trackLinks.should("have.length", 32);
});

When("the user downloads the times", () => {
  PersonalRecordsPage.downloadButton.click();
});

Then("the downloaded file should contain data", () => {
  verifyCsvData("personal_times.csv");
});
