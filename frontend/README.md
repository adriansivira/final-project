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

Status: **200 OK**. Si no existe **404 NOT FOUND**.

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
  "message": "No encontramos la reserva en la base"
}
```

### Sesion iniciada:

- Como mozo quiero poder dar de alta una reserva.

#### `POST: /reservas` Crea una reserva.

**Request:**

```json
{
  "nombre": "Nico",
  "mail": "joaco@senpai.com",
  "mozo_id": 4,
  "fecha_de_reserva": "2022-09-01 20:00"
}
```

Status: Si la reserva es creada **201 CREATED**

Si la reserva tiene errores en la validacion de sus campos:
**400 Bad Request**

**Response:**

```json
{
  "nombre": "Nico",
  "id": 1,
  "mail": "joaco@senpai.com",
  "mozo_id": 4,
  "mesa": null,
  "confirmada": false,
  "fecha_creada": "2022-08-31 23:00",
  "fecha_de_reserva": "2022-09-01 20:00",
  "fecha_de_confirmacion": null
}
```

- Como mozo quiero poder eliminar una reserva.

#### `DELETE: /reservas/{id}` Crea una reserva.

```json
{
  "message": "Reserva borrada"
}
```

- Como mozo quiero poder confirmar una reserva.

#### `PUT: /reservas/{id}` Editar una reserva.

Request Body:

```json
{
  "nombre": "Nico",
  "mail": "joaco@senpai.com",
  "mozo_id": 4,
  "confirmada": true,
  "mesa": 4
  "fecha_de_reserva": "2022-09-01 20:00"
}
```

#### `PATCH: /reservas/{id}` Editar una reserva.

Request Body:

```json
{
  "confirmada": true
}
```

## Admin / Dueño

- Como dueño quiero poder ver los mozos.

#### `GET: /mozos` Obtener todos los mozos.

```json
[
  {
    "nombre": "Juli",
    "id": 3,
    "apellido": "Juarez",
    "turno": "vespertino"
  }
]
```

#### `GET: /mozos/{id}` Obtener un mozo.

```json
{
  "nombre": "Juli",
  "id": 3,
  "apellido": "Juarez",
  "turno": "vespertino"
}
```

- Como dueño quiero poder registrar mozos.

#### `POST: /mozos` Registrar mozo.

```json
{
  "nombre": "Juli",
  "apellido": "Juarez",
  "turno": "vespertino"
}
```

Respuesta:

```json
{
  "nombre": "Juli",
  "id": 3,
  "apellido": "Juarez",
  "turno": "vespertino"
}
```

- Como dueño quiero poder asignar mozos a turnos.

#### `PATCH: /mozos/{id}` Editar campos del mozo

Request / Solicitud:

```json
{
  "turno": "matutino"
}
```

Response o respuesta:
**200 OK**

```json
{
  "nombre": "Juli",
  "id": 3,
  "apellido": "Juarez",
  "turno": "matutino"
}
```

- Como dueño quiero poder ver cuantas mesas atendio cada mozo.

#### `GET: /suma-mesas`

```json
[
  {
    "mozo_id": 1,
    "suma": 4,
    "promedio_por_noche": 3
  },
  {
    "mozo_id": 2,
    "suma": 1,
    "promedio_por_noche": 3
  },
  {
    "mozo_id": 3,
    "suma": 10,
    "promedio_por_noche": 3
  }
]
```
