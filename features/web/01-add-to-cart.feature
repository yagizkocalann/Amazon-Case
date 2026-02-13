Feature: Add a random product to cart from Amazon.com.tr homepage

  Background:
    Given I open the Amazon TR homepage

  Scenario: Add a product from the homepage to the cart
    When I click any product on the Amazon homepage
    And I add the product to the cart
    And I go to the Amazon cart page
    Then I should see at least one item in the Amazon cart

