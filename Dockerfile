# Usa la imagen oficial de node
FROM node:18.13.0

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalamos las dependencias del proyecto
RUN npm install

# Copiamos todo el código fuente al contenedor
COPY . .

# Construimos la aplicación
RUN npm run build

# Exponemos el puerto 5050
EXPOSE 5050

# Arrancamos la aplicación
CMD [ "npm", "run", "preview" ]
