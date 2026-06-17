# Mini App Integral con Fetch API y LocalStorage

## Description
A web application that allows users to manage products through a complete CRUD system, 
connected to a local API simulated with json-server.

## Technologies
- HTML5
- JavaScript (ES6+)
- json-server
- LocalStorage

## Installation
1. Clone or download this repository
2. Install json-server globally: `npm install -g json-server`

## Running the Project
1. Open the terminal in the project folder
2. Run: `json-server --watch servidor/db.json --port 1389`
3. Open `index.html` in your browser

## Running JSON Server
json-server --watch servidor/db.json --port 1389

## Project Structure
project/

├── index.html

├── app.js

├── api.js

└── servidor/

└── db.json

## Technical Decisions
- **LocalStorage** was used to persist data between sessions
- **Modular architecture** separating API logic (api.js) from DOM logic (app.js)
- **async/await** for handling asynchronous API requests