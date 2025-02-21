INSERT INTO categories (nom)
VALUES ('entrees'),
       ('plats'),
       ('desserts');

INSERT INTO allergenes (nom)
VALUES ('gluten'),
       ('poisson'),
       ('fruits de mer'),
       ('œufs'),
       ('lait'),
       ('mollusques'),
       ('noix');

INSERT INTO ingredients (nom)
VALUES ('choux verts'),
       ('chorizo'),
       ('pommes de terre'),
       ('sardines'),
       ('sel'),
       ('poulpe'),
       ('oignons'),
       ('poivrons'),
       ('persil'),
       ('citron'),
       ('huile d''olive'),
       ('morue'),
       ('œufs'),
       ('poulet'),
       ('sauce piri piri'),
       ('palourdes'),
       ('coriandre'),
       ('haricots rouges'),
       ('carottes'),
       ('chou'),
       ('canard'),
       ('riz'),
       ('ail'),
       ('crème pâtissière'),
       ('pâte feuilletée'),
       ('lait'),
       ('cannelle'),
       ('sucre'),
       ('café'),
       ('amandes'),
       ('pain');

INSERT INTO plats (nom, prix, description, image_url, categorie_id)
VALUES ('Caldo Verde', 5.00, 'Soupe traditionnelle portugaise aux choux verts et au chorizo', 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7GVDC762YBRV5L3LSAOU4XBVQU.JPG&w=1440', 1),
       ('Chorizo grillé', 6.00, 'Chorizo grillé au feu de bois', 'https://thumbs.dreamstime.com/b/le-chourico-portugais-traditionnel-ou-chorizo-espagnol-pr%C3%A9par%C3%A9-dans-115144243.jpg', 1),
       ('Sardines grillées', 7.00, 'Sardines grillées avec du sel marin', 'https://lisbonne.net/wp-content/uploads/2020/01/conseils_sardines_grillees_portugal.jpg', 1);

INSERT INTO vins (nom, prix)
VALUES ('Vinho Verde', 15.00),
       ('Vinho do Porto', 25.00),
       ('Alentejo Red', 20.00);

INSERT INTO plats_allergenes (plat_id, allergene_id)
VALUES (1, 1),
       (3, 2);


INSERT INTO plats_ingredients (plat_id, ingredient_id)
VALUES (1, 1),
       (1, 2),
       (1, 3),
       (2, 2),
       (3, 4),
       (3, 5);


INSERT INTO menu_jour (plat_id, categorie_id)
VALUES (1, 1),
       (3, 1);
