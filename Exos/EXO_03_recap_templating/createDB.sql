CREATE TABLE allergenes (
id INTEGER PRIMARY KEY AUTOINCREMENT,
nom VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE ingredients (
id INTEGER PRIMARY KEY AUTOINCREMENT,
nom VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE categories (
id INTEGER PRIMARY KEY AUTOINCREMENT,
nom VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE plats (
id INTEGER PRIMARY KEY AUTOINCREMENT,
nom VARCHAR(100) NOT NULL,
prix DECIMAL(10,2) NOT NULL,
description TEXT,
image_url TEXT,
categorie_id INTEGER,
FOREIGN KEY (categorie_id) REFERENCES categories(id)
);

CREATE TABLE plats_allergenes (
plat_id INTEGER,
allergene_id INTEGER,
PRIMARY KEY (plat_id, allergene_id),
FOREIGN KEY (plat_id) REFERENCES plats(id),
FOREIGN KEY (allergene_id) REFERENCES allergenes(id)
);

CREATE TABLE plats_ingredients (
plat_id INTEGER,
ingredient_id INTEGER,
PRIMARY KEY (plat_id, ingredient_id),
FOREIGN KEY (plat_id) REFERENCES plats(id),
FOREIGN KEY (ingredient_id) REFERENCES ingredients(id)
);

CREATE TABLE vins (
id INTEGER PRIMARY KEY AUTOINCREMENT,
nom VARCHAR(100) NOT NULL,
prix DECIMAL(10,2) NOT NULL
);

CREATE TABLE menu_jour (
id INTEGER PRIMARY KEY AUTOINCREMENT,
plat_id INTEGER,
categorie_id INTEGER,
FOREIGN KEY (plat_id) REFERENCES plats(id),
FOREIGN KEY (categorie_id) REFERENCES categories(id)
);

CREATE TABLE menu_vins (
menu_id INTEGER,
vin_id INTEGER,
PRIMARY KEY (menu_id, vin_id),
FOREIGN KEY (menu_id) REFERENCES menu_jour(id),
FOREIGN KEY (vin_id) REFERENCES vins(id)
);
