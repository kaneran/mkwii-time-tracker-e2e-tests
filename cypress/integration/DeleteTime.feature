Feature: Delete Time
    Scenario: Delete and restore time
        Given the user visits the personal records page
        When the user selects the track Toads Factory
        And deletes the first time
        Then the time should be deleted
        And the user undos the deleted time
        Then the time should be restored