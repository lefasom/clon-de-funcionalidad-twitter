### instalar nest.js de forma global
- [x] npm i @nestjs/cli -g
### creando  proyecto con nest.js
- [x] nest new backend
- [x] elijo un gestor de paquetes
#### instalar module
- [x] nest generate module tasks
#### instalar controller
- [x] nest generate controller tasks --no-spec
#### instalar service
- [x] nest generate service tasks --no-spec
##### si no tienes los permisos para usar nest en tu terminal
- [x] Set-ExecutionPolicy RemoteSigned 
##### creart validaciones
- [x] npm i --save class-validator class-transformer


# PRISMA
- [x] npm install prisma -D
- [x] npx prisma init -datasource-provider sqlite
- [x] npx prisma migrate dev --name init

# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

### DATABASE_URL="postgresql://neondb_owner:*******************@ep-wild-shape-a5z5scny-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"