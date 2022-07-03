import { Given } from "cypress-cucumber-preprocessor/steps";
import PersonalRecordsPage from "../_pageObjects/PersonalRecordsPage";

Given("the user visits the personal records page", () => {
    PersonalRecordsPage.visit();
  });