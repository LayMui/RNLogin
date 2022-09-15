Feature: Select Picker
  In order to select my favourite sport
  As a farmer James
  James want to able select sport using the select picker

  Scenario: Able to select sport using select picker
    Given James is at the app to login
    When he select a sport
    | sport    |
    | football |
    Then he is able to select

  