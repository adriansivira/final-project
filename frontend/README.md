## INDICACIONES PARA INICIAR LA APLICACIÓN:

### Clonar el proyecto

Desde la consola:

```
cd nombre_carpeta
git clone - link del repositorio

```

### Para levantar el proyecto es necesario la instalación de:

- Node.js

- Express.js

### Adicionalmente se debe clonar el proyecto desde Github e instalar:

- Visual Studio Code
- PostgreSQL
- DBeaver
- Postman para realizar pruebas de endpoints en backend.
- Mockoon para realizar pruebas de fetchs en el frontend.
- Loguearse/Crear cuenta en Github.

### Instalación

### Iniciar frontend y backend:

Ya clonado el proyecto es necesario instalar todas las dependencias tanto en front como back, con el comando:

```
npm install

```

### Postgres

Se deberán crear 2 bases de datos:

- pokemones

```
create table pokemones(
  id varchar primary key,
  img varchar,
  nombre varchar,
  tipo varchar [],
  weight varchar,
  heigth varchar,
  moves varchar [],
  description varchar,
  hp varchar,
  atk varchar,
  def varchar,
  satk varchar,
  sdef varchar,
  spd varchar,
  color_primario varchar,
  color_secundario varchar
 );

```

- usuarios

```
create table usuarios(
  id serial primary key,
  nombre varchar,
  email varchar,
  pwd varchar
 );

```

### Conexión a la base de datos

Definir en .env las variables:

- POSTGRES_HOST=
- POSTGRES_USER=""
- POSTGRES_PORT=""
- POSTGRES_PASSWORD=""
- POSTGRES_DATABASE=""
- JWT_PRIVATE_KEY=""

## ESPECIFICACIONES:

## ACTORES:

Pokemones
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

#### `GET: /pokemones/{nombre}` Devolver un Pokémon en particular

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
  "description": "This man is dangerous. Be careful with him",
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
  "description": "This man is dangerous. Be careful with him",
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

- Como usuario puedo eliminar un Pokemon.

#### `DELETE: /pokemones/{id}` Crea una reserva.

```json
{
  "message": "Pokemon borrado"
}
```
