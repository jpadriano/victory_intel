#!/bin/bash

# -- Install app dependencies --
echo "Installing dependencies..."
REM 
REM npm install
REM 
REM npm install -g nodemon
REM 
REM npm install -g sequelize-cli

REM # -- Check if NODE_ENV exists -- #
REM echo "Dropping database...Checking if NODE_ENV exists.."
REM if [ $NODE_ENV ];
REM then
    REM echo "NODE_ENV exists. No need to drop the database.";
REM else    
    REM # -- Enter database setup commands below -- #
	     REM mysql -u root -e "CREATE DATABASE victory" -p
    REM echo "Please enter mySQL password for the following"
     REM mysql -u root -e "DROP DATABASE IF EXISTS victory" -p
    REM echo "Database dropped. Create new victory_db database"
     REM mysql -u root -e "CREATE DATABASE victory" -p
    REM echo "Database created. Create user victory. Will prompt an error if user already exists"
     REM mysql -u root -e "CREATE USER 'victory'@'%' IDENTIFIED BY 'v1ct0ry'" -p
    REM echo "User victory created. Grant privileges to victory for development."
     REM mysql -u root -e "GRANT ALL PRIVILEGES ON *.* TO 'victory'@'%' WITH GRANT OPTION" -p
    REM echo "Privileges granted. Flush privileges"
     REM mysql -u root -e "FLUSH PRIVILEGES" -p;
fi

echo "Creating tables for the database"
sequelize db:migrate


    REM # -- Enter database setup commands below -- #
	     REM mysql -u newuser -e "CREATE DATABASE victory" -p
    echo "Please enter mySQL password for the following"
     REM mysql -u newuser -e "DROP DATABASE IF EXISTS victory" -p
    echo "Database dropped. Create new victory_db database"
     mysql -u newuser -e "CREATE DATABASE victory" -p
    echo "Database created. Create user victory. Will prompt an error if user already exists"
     mysql -u newuser -e "CREATE USER 'victory'@'%' IDENTIFIED BY 'v1ct0ry'" -p
    echo "User victory created. Grant privileges to victory for development."
     mysql -u newuser -e "GRANT ALL PRIVILEGES ON *.* TO 'victory'@'%' WITH GRANT OPTION" -p
    echo "Privileges granted. Flush privileges"
     mysql -u newuser -e "FLUSH PRIVILEGES" -p;
	 sequelize db:migrate