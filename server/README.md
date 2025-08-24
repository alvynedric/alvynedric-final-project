# Basic Express

## Step by Step

### Express

1. Membuat `package.json` : berisi list dependencies/package yg di gunakan dalam sebuah aplikasi, script dll

- npm init -y

2. Install package express pg sequelize

- npm install express pg sequelize

3. Install package nodemon sequelize-cli utk devDepencencies

- npm install nodemon sequelize-cli --save-dev

4. Buat file app.js

- app.js berfungsi sbg file utama

5. Buat router

6. Buat controller

### Database menggunakans sequelize

1. Membuat initialisasi db menggunakan sequelize-cli

- npx sequelize-cli init

2. Setting config.json

3. Membuat database

- npx sequelize-cli db:create

4. Membuat migration utk tables

- npx sequelize-cli model:generate --name User --attributes email:string,password:string,username:string,image:string

- npx sequelize-cli model:generate --name Item --attributes name:string,category:string,price:integer,stock:integer,image:string,UserId:integer,TypeId:integer,ProfileId:integer,BrandId:integer

- npx sequelize-cli model:generate --name Type --attributes name:string

- npx sequelize-cli model:generate --name Profile --attributes fullname:string,role:string,address:string

- npx sequelize-cli model:generate --name Brand --attributes name:string,city:string,region:string,country:string

5. Migrate table

- npx sequelize-cli db:migrate
