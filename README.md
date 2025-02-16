# Automación de Pruebas E2E con Cypress y Cucumber

Este proyecto contiene un ejercicio practico de pruebas automatizadas para el flujo de compra en el sitio web [Demoblaze](https://www.demoblaze.com/), utilizando **Cypress** y **Cucumber**. Está diseñado para realizar una prueba E2E que cubre el proceso de agregar productos al carrito, completar un formulario de compra y finalizar la compra.

## Requisitos Previos
Para ejecutar este proyecto localmente, se requiere tener instalados los siguientes programas:

- **Node.js** (versión 14 o superior): [Descargar Node.js](https://nodejs.org/)
- **npm**: Viene instalado con Node.js.

## Instalación

Sigue estos pasos para clonar el repositorio y configurar el proyecto en tu máquina local.

**1. Clonar el repositorio**

Abre una terminal y ejecuta el siguiente comando para clonar el repositorio:

git clone https://github.com/dianadance/cypress-cucumber-exercise1.git

**2. Instalar las dependencias**

Accede a la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias:

npm install

**3. Configuración de Cypress y Cucumber**

El proyecto ya está configurado para utilizar Cypress con el preprocesador de Cucumber, pero si por alguna razón necesitas reconfigurarlo, sigue estos pasos:

- Asegúrate de que el archivo cypress.config.js esté configurado para usar Cucumber.
- El archivo de características (.feature) está ubicado en cypress/e2e/features/PurchaseProducts.feature y los pasos en cypress/e2e/step_definitions/PurchaseProductsSteps.js.

## Ejecutar las Pruebas

- **Abrir Cypress**

1. Para abrir la interfaz de Cypress y ejecutar las pruebas de manera interactiva, utiliza el siguiente comando:

npx cypress open

2. Esto abrirá una ventana gráfica donde podrás seleccionar la opción **E2E Testing**.

3. Debes seleccionar el navegador en el que quieres ejecutar las pruebas y darle click al botón **Start E2E Testing in (nombre del navegador seleccionado)**

4. Se abrirá una ventana en la que se muestra el archivo .feature que contiene las pruebas para el ejercicio de flujo de compra. Dar click sobre este archivo: **PurchaseProducts.feature**


-**Ejecutar las pruebas en modo headless (sin interfaz gráfica)**

Si prefieres ejecutar las pruebas en segundo plano, sin la interfaz gráfica de Cypress, puedes usar el siguiente comando:

npx cypress run

Este comando ejecutará todas las pruebas de forma automática en la terminal.

## Tecnologías Usadas
- **Cypress:** Herramienta de pruebas E2E para JavaScript.
- **Cucumber:** Framework de pruebas basado en comportamiento (BDD) que utiliza el lenguaje Gherkin para describir las pruebas.
- **Node.js:** Entorno de ejecución para JavaScript.
- **npm:** Gestor de dependencias de Node.js.


