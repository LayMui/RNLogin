Feature: Login via Azure AD
  In order to have SSO secured access the app services 
  As a farmer James
  James want to able login via azure AD

  @test
  Scenario: Able to login via Azure AD
    Given James is at the app to login via Azure
    When he provides email to sign in 
    | email                                  |
    | testuser@muiumehotmail.onmicrosoft.com |
    Then he is able to access the app

  