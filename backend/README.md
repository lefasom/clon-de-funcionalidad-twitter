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

# configuro Postgresql (variable de entorno) 
- [x] DATABASE_URL="postgresql://neondb_owner:*******************@ep-wild-shape-a5z5scny-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"

# comandos para mejorar la seguridad y el manejo de datos de sesiones
- [] npm install --save @nestjs/jwt passport-jwt
- [] npm install --save-dev @types/passport-jwt
- [] npm install bcrypt