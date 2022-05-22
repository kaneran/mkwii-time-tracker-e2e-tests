Feature: Add time
    Scenario Outline: Add times with valid/invalid data
        Given the user visits the add track time page
        When the user selects <track> and <format>
        And enters <time>
        And submits the data
        Then the outcome should be <outcome>

        Examples:
            | track               | format       | time      | outcome |
            | Toads Factory       | shortcut     | 01:02.345 | success |
            | SNES Ghost Valley 2 | non shortcut | 00:52.521 | success |
            |                     |              | 01:02.345 | error   |
            | SNES Ghost Valley 2 | non shortcut |           | error   |
            | SNES Ghost Valley 2 |              |           | error   |