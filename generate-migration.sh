#!/bin/bash

NAME=$1

npm run build

npm run typeorm -- migration:generate -d dist/ormconfig.js ./migration/$NAME

# Ajouter une pause pour attendre que l'utilisateur appuie sur une touche
echo "Appuyez sur une touche pour continuer..."
read -n 1 -s