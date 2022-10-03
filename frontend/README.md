## ACTORES:

Pokemones -
Usuario

## Entidades

#### Pokémon

```json
{
  "name": "Aron",
  "id": "304",
  "img": "/imagenes/Pokemones/aron.png",
  "type": ["Steel", "Rock"],
  "weight": 60.0,
  "heigth": 0.4,
  "moves": ["Sturdy", "Rock-Head"],
  "description": "It eats iron ore - and sometimes railroad tracks - to build up the steel armor that projects its body.",
  "hp": "050",
  "atk": "070",
  "def": "100",
  "satk": "040",
  "sdef": "040",
  "spd": "030",
  "primary_color": "#B7B9D0",
  "secondary_color": "#B69E31"
}
```

#### Users

```json
{
  "id": 1,
  "nombre": "Adrian Sivira",
  "email": "adriansivira@gmail.com",
  "pwd": "12345"
}
```

## User

- Como usuario puedo iniciar sesión.

#### `POST: /login` Inicio de sesión

Formato: **JSON**

Status: Si user es válido: **200 OK**. Si no hay user válido: **401 UNAUTHORIZED**.

```json
{
  "id": 1,
  "nombre": "Adrian Sivira",
  "email": "adriansivira@gmail.com",
  "pwd": "12345"
}
```

## Sesión Iniciada

- Como usuario puedo ver todos los pokemones.

#### `GET: /pokemones` Devolver lista de todos los pokemones.

Formato: **JSON**

Status: **200 OK**.

```json
[
  {
    "name": "Aron",
    "id": "304",
    "img": "/imagenes/Pokemones/aron.png",
    "primary_color": "#B7B9D0"
  }
]
```

- Como usuario puedo ver un Pokémon en particular.

#### `GET: /pokemones/{id}` Devolver un Pokémon en particular

Formato: **JSON**

Status: **200 OK**.

```json
{
  "name": "Aron",
  "id": "304",
  "img": "/imagenes/Pokemones/aron.png",
  "type": ["Steel", "Rock"],
  "weight": 60.0,
  "heigth": 0.4,
  "moves": ["Sturdy", "Rock-Head"],
  "description": "It eats iron ore - and sometimes railroad tracks - to build up the steel armor that projects its body.",
  "hp": "050",
  "atk": "070",
  "def": "100",
  "satk": "040",
  "sdef": "040",
  "spd": "030",
  "primary_color": "#B7B9D0",
  "secondary_color": "#B69E31"
}
```

Status: Si no existe **404 Not Found**

```json
{
  "message": "No existe este Pokemon"
}
```

- Como usuario puedo crear un Pokémon.

#### `POST: /pokemones` Crea un Pokémon

**Request:**

```json
{
  "name": "Voldemort",
  "id": "666",
  "img": "/imagenes/Pokemones/voldemort.png",
  "type": ["Serpiente", "Híbrido"],
  "weight": 60.0,
  "heigth": 0.4,
  "moves": ["Avakedabra", "Kill people"],
  "description": "This man es una verga. Be careful with him",
  "hp": "050",
  "atk": "070",
  "def": "100",
  "satk": "040",
  "sdef": "040",
  "spd": "030",
  "primary_color": "#B7B9D0",
  "secondary_color": "#B69E31"
}
```

Status: Si la reserva es creada **201 CREATED**

Si la reserva tiene errores en la validacion de sus campos:
**400 Bad Request**

**Response:**

```json
{
  "name": "Voldemort",
  "id": "666",
  "img": "/imagenes/Pokemones/voldemort.png",
  "type": ["Serpiente", "Híbrido"],
  "weight": 60.0,
  "heigth": 0.4,
  "moves": ["Avakedabra", "Kill people"],
  "description": "This man es una verga. Be careful with him",
  "hp": "050",
  "atk": "070",
  "def": "100",
  "satk": "040",
  "sdef": "040",
  "spd": "030",
  "primary_color": "#B7B9D0",
  "secondary_color": "#B69E31"
}
```

- Como usuario puedo eliminar un Pokemon

#### `DELETE: /pokemones/{id}` Crea una reserva.

```json
{
  "message": "Reserva borrada"
}
```
