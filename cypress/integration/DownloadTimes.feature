Feature: Download Times
    Scenario: Download times and read file
        Given the user visits the personal records page
        When the user downloads the times
        Then the downloaded file should contain data
