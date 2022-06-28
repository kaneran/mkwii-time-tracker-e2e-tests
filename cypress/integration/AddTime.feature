Feature: Add time
    Scenario Outline: Add times with valid/invalid data
        Given the user visits the add track time page
        When the user selects <track> and <format>
        And enters a <time> time
        And submits the data
        Then the outcome should be <outcome>

        Examples:
            | track               | format       | time    | outcome |
            | Toads Factory       | shortcut     | valid   | success |
            | SNES Ghost Valley 2 | non shortcut | valid   | success |
            |                     |              | valid   | error   |
            | SNES Ghost Valley 2 | non shortcut | invalid | error   |
            | SNES Ghost Valley 2 |              | invalid | error   |