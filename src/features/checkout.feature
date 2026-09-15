@checkout
Feature: Checkout
  Como usuario autenticado
  Quiero poder completar el proceso de checkout
  Para finalizar mi compra

  @checkout-01
  Scenario Outline: Completar el checkout con un producto
    Given que estoy autenticado con el usuario "standard_user"
    When agrego el producto "<producto>" al carrito
    And hago clic en el icono del carrito
    And hago clic en Checkout
    And lleno el formulario con "Peter", "Zegarra" y "12345"
    And hago clic en Continue
    Then deberia ver la pagina de resumen del checkout

    Examples:
      | producto              |
      | Sauce Labs Backpack   |
      | Sauce Labs Bike Light |
