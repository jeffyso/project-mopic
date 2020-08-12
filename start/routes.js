'use strict'

const AuthController = require('../app/Controllers/Http/AuthController');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get("/home","AuthController.home");

Route.get("/login","AuthController.login");
Route.post("/login","AuthController.loginUser");

Route.get("/register","AuthController.register");
Route.post("/register","AuthController.registerUser");

Route.get("/news","AuthController.news");

Route.get("/movies","AuthController.movies");

Route.get("/endgame","AuthController.endgame");
Route.post("/endgame","AuthController.endgameRate");


Route.get("/joker","AuthController.joker");

Route.get("/1917","AuthController.1917");
Route.post("/1917","AuthController.1917Wish");

Route.get("/parasite","AuthController.parasite");

Route.get("/traintobusan","AuthController.traintobusan");

