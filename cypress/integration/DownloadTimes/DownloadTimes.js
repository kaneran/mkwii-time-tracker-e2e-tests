import { Then } from "cypress-cucumber-preprocessor/steps";
import { verifyCsvData } from "../utils";
import PersonalRecordsPage from "../_pageObjects/PersonalRecordsPage";

When("the user downloads the times", () => {
  PersonalRecordsPage.downloadButton.click();
});

Then("the downloaded file should contain data", () => {
  verifyCsvData("personal_times.csv");
});
