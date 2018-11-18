#!/bin/bash

echo "Installing dependencies..."

echo "Creating tables for the database"
mysql -u newuser -e "CREATE DATABASE victory" -p
echo "Database created. Create user victory. Will prompt an error if user already exists"
mysql -u newuser -e "CREATE USER 'victory'@'%' IDENTIFIED BY 'v1ct0ry'" -p
echo "User victory created. Grant privileges to victory for development."
mysql -u newuser -e "GRANT ALL PRIVILEGES ON *.* TO 'victory'@'%' WITH GRANT OPTION" -p
echo "Privileges granted. Flush privileges"
mysql -u newuser -e "FLUSH PRIVILEGES" -p;
sequelize db:migrate