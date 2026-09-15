Feature: Login
  Como usuario registrado
  Quiero poder iniciar sesion en Sauce Demo
  Para acceder a la tienda

  @login-01
  Scenario: Login exitoso con credenciales validas
    Given que estoy en la pagina de login
    When ingreso el usuario "standard_user" y la contrasena "secret_sauce"
    Then deberia ver la pagina de productos

  @login-02
  Scenario: Login fallido con usuario bloqueado
    Given que estoy en la pagina de login
    When ingreso el usuario "locked_out_user" y la contrasena "secret_sauce"
    Then deberia ver un mensaje de error de usuario bloqueado

  @login-03
  Scenario: Login fallido con credenciales invalidas
    Given que estoy en la pagina de login
    When ingreso el usuario "invalid_user" y la contrasena "wrong_pass"
    Then deberia ver un mensaje de error de credenciales invalidas
