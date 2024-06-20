# Ello Fullstack Take Home Challenge 2024

## Table of Contents

- [Project Setup](#project-setup)
  - [With Docker](#with-docker-recommended)
  - [Without Docker](#without-docker)

## Project Setup

- Before setting up frontend ensure to navigate to `/backend` and run it first using:

  ```
  npm install
  ```

  then

  ```
  npm start
  ```

- The backend project should now be running on: [http://localhost:4000](http://localhost:4000), you can now proceed to run fronted as outlined below.

### With Docker (Recommended)

- Create a `.env` file and add the following variables

  ```bash
  VITE_BACKEND_URL="http://host.docker.internal:4000"
  ```

- Then build the frontend container

  ```bash
  make build
  ```

- Finally start the frontend container

  ```
  make start
  ```

And go to [http://localhost:4173](http://localhost:4173)

### Without Docker

- Create a `.env` file and add the following variables

  ```bash
  VITE_BACKEND_URL="http://localhost:4000"
  ```

- Then build the frontend app

  ```bash
  npm run build
  ```

- Finally start the frontend app

  ```
  npm run preview
  ```

And go to [http://localhost:4173](http://localhost:4173)
