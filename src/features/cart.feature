@cart
Feature: Carrito
  Como usuario autenticado
  Quiero poder ver los productos agregados en el carrito
  Para confirmar mi seleccion antes del pago

  @cart-01
  Scenario Outline: Ver producto en el carrito despues de agregarlo
    Given que estoy autenticado con el usuario "<usuario>"
    When agrego el producto "<producto>" al carrito
    And hago clic en el icono del carrito
    Then el carrito deberia mostrar el producto "<producto>"

    Examples:
      | usuario       | producto              |
      | standard_user | Sauce Labs Backpack   |
      | standard_user | Sauce Labs Bike Light |
