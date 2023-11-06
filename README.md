# Notas
El archivo de configuracion se encuentra en "grupoBalPruebaFront\src\app" como "environment"
Contiene lo siguiente:

token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTkzMDE0MDcsImlzcyI6IkpXVCIsImF1ZCI6ImdydXBvQmFsUHJ1ZWJhIn0.E50soE80xzP0NiRxYq-m729vBJuYuy8eO3dMAV6y2no",
apiBaseUrl: 'https://localhost:7182/api',

donde tenemos que colocar el:
  * token generado el cual tiene un tiempo de expiración, esto se realizo de esta manera para fines de ejemplificar su uso ya que deberia generarse en un inicio de sessión desde el front.
  * url donde apunta el server de la API

Ejemplo de login para generar token:
url: https://localhost:7182/api/Authentication/login

Petición POST:
{
  "userName": "Admin",
  "password": "1234567"
}

Respuesta

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTkzMDE0MDcsImlzcyI6IkpXVCIsImF1ZCI6ImdydXBvQmFsUHJ1ZWJhIn0.E50soE80xzP0NiRxYq-m729vBJuYuy8eO3dMAV6y2no",
    "estatus": true,
    "msg": "Correcto."
}

