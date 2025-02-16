Feature: Purchase flow validation

  Scenario: Add 2 products to Cart and complete the purchase
    Given I navigate to Home page
    And select firstProduct from Home page
    And add firstProduct to the cart
    And select secondProduct from Home page
    And add secondProduct to the cart
    And view the cart
    And click on the Place Order button
    And complete the purchase form with my information
      | clientName | Cristian Riva    |
      | country    | Ecuador          |
      | city       | Quito            |
      | creditCard | 1122334455667788 |
      | month      | 12               |
      | year       | 2027             |
    When click on the purchase button
    Then I should see the confirmation message "Thank you for your purchase!"