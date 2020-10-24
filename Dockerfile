#node con la versión 15
FROM node:15

#creamos directorio de trabajo en el que tendremos todos los archivos
#necesarios para que funcione la aplicación
WORKDIR /home/irene/proyectoIdiomas

#pasamos los archivos al directorio de trabajo
#usamos el asterisco para copiar directamente package.json y package-lock.json
COPY package*.json ./

#ejecutamos npm install para instalar las dependencias
RUN npm install

#queremos copiar todo en nuestro contenedor excepto el directorio node_modules
#por lo cual crearemos también el .dockerignore.
COPY . ./home/irene/proyectoIdiomas

#para ejecutar los tests
CMD ["grunt", "run:tests"]
