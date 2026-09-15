@products
Feature: Productos
  Como usuario autenticado
  Quiero poder agregar productos al carrito
  Para poder comprarlos

  @products-01
  Scenario Outline: Agregar producto al carrito actualiza el contador
    Given que estoy autenticado con el usuario "<usuario>"
    When agrego el producto "<producto>" al carrito
    Then el contador del carrito deberia mostrar "<cantidad>"

    Examples:
      | usuario       | producto              | cantidad |
      | standard_user | Sauce Labs Backpack   | 1        |
      | standard_user | Sauce Labs Bike Light | 1        |
