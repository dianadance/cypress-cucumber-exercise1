Feature: Purchase flow validation

  Scenario: Add 2 products to Cart and complete the purchase
    Given User1 navigates to Home page
    And User1 adds 2 products to the cart
    And User1 views the cart
    When User1 completes the purchase form with my information
      | userName | Cristian Riva    |
      | country    | Ecuador          |
      | city       | Quito            |
      | creditCard | 1122334455667788 |
      | month      | 12               |
      | year       | 2027             |
    Then User1 completes the purchase