## INDICACIONES PARA INICIAR LA APLICACIÓN:

### Clonar el proyecto

Desde la consola:

```
cd nombre_carpeta
git clone - link del repositorio
```

### Instalación

### Iniciar frontend y backend:

Ya clonado el proyecto es necesario instalar todas las dependencias tanto en front como back, con el comando:

```
npm i
```

### Postgres

Se deberán crear 2 bases de datos:

- pokemones

```
create table pokemonlist(
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

### Insertar en la tabla pokemonlist los siguientes valores:

```

insert into pokemonlist (id, img, nombre, tipo, weight, heigth, moves, description, hp, atk, def, satk, sdef, spd, color_primario, color_secundario)
 values ('304','/imagenes/Pokemones/aron.png' , 'Aron', '{"Steel", "Rock"}', '60.0', '0.4', '{"Sturdy", "Rock-Head"}', 'It eats iron ore - and sometimes railroad tracks - to build up the steel armor that projects its body.', '050',
 '070', '100', '040', '040', '030', '#B7B9D0', '#B69E31');

insert into pokemonlist (id, img, nombre, tipo, weight, heigth, moves, description, hp, atk, def, satk, sdef, spd, color_primario)
 values ('004', '/imagenes/Pokemones/charmander.png', 'Charmander' , '{"Fire"}', '8.5', '0.6', '{"Mega-Punch", "Fire-Punch"}', 'It eats iron ore - and sometimes railroad tracks - to build up the steel armor that projects its body.', '039',
 '052', '043', '060', '050', '065', '#F57D31');

insert into pokemonlist (id, img, nombre, tipo, weight, heigth, moves, description, hp, atk, def, satk, sdef, spd, color_primario, color_secundario)
 values ('001', '/imagenes/Pokemones/bulbasaur.png','Bulbasur', '{"Grass", "Polson"}', '6.9', '0.7', '{"Chlorophyll", "Overgrow"}', 'There is a plant seed on its back right from the day this pokemon is born. The seed slowly grows larger.', '045',
 '049', '049', '065', '065', '045', '#74CB48', '#A43E9E');

insert into pokemonlist (id, img, nombre, tipo, weight, heigth, moves, description, hp, atk, def, satk, sdef, spd, color_primario)
 values ('007', '/imagenes/Pokemones/squirtle.png' , 'Squirtle', '{"Water"}', '9.0', '0.5', '{"Torrent", "Rain-Dish"}', 'When it retracts its long neck', '045',
 '049', '049', '065', '065', '045', '#6493EB');

insert into pokemonlist (id, img, nombre, tipo, weight, heigth, moves, description, hp, atk, def, satk, sdef, spd, color_primario)
 values ('132', '/imagenes/Pokemones/ditto.png' , 'Ditto', '{"Normal"}', '4.0', '0.3', '{"Limber", "Imposter"}', 'It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.', '048',
 '048', '048', '048', '048', '048', '#AAA67F');

insert into pokemonlist (id, img, nombre, tipo, weight, heigth, moves, description, hp, atk, def, satk, sdef, spd, color_primario, color_secundario)
 values ('012', '/imagenes/Pokemones/butterfree.png' , 'Butterfree', '{"Bug", "Flying"}', '32.0', '1.1', '{"Compund-Eyes", "Tinted-Lens"}', 'In battle, it flops its wings at greta speed to release highly toxic dust into the air.', '060',
 '045', '050', '090', '080', '070', '#A7B723', '#A891EC');

insert into pokemonlist (id, img, nombre, tipo, weight, heigth, moves, description, hp, atk, def, satk, sdef, spd, color_primario, color_secundario)
 values ('092', '/imagenes/Pokemones/gastly.png' , 'Gastly', '{"Ghost", "Type"}', '0.1', '1.3', '{"Levitate"}', 'Born form gases, anyone would faint if engulled by its gaseous body, which contains poison.', '030',
 '035', '030', '100', '035', '080', '#70559B', '#666666');

insert into pokemonlist (id, img, nombre, tipo, weight, heigth, moves, description, hp, atk, def, satk, sdef, spd, color_primario)
 values ('025', '/imagenes/Pokemones/pikachu.png' , 'Pikachu', '{"Electric"}', '6.0', '0.4', '{"Mega-Punchy", "Pay-Day"}', 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.', '035',
 '055', '040', '050', '050', '090', '#F9CF30');

insert into pokemonlist (id, img, nombre, tipo, weight, heigth, moves, description, hp, atk, def, satk, sdef, spd, color_primario)
 values ('152', '/imagenes/Pokemones/mew.png' , 'Mew', '{"Psychic"}', '4.0', '0.4', '{"Synchronize"}', 'When viewed through a microscope, this Pokemons short, fine, delicate hair can be seen.', '035',
 '055', '040', '050', '050', '090', '#FB5584');
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
