#!/bin/bash

npm run build
npm run typeorm -- -d ./dist/ormconfig.js migration:run

# Ajouter une pause pour attendre que l'utilisateur appuie sur une touche
echo "Appuyez sur une touche pour continuer..."
read -n 1 -s