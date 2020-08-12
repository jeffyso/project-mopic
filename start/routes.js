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

Route.get("/layout","AuthController.logout");

Route.get("/login","AuthController.login");
Route.post("/login","AuthController.loginUser");

Route.get("/register","AuthController.register");
Route.post("/register","AuthController.registerUser");

Route.get("/news","AuthController.news");

Route.get("/movies","AuthController.movies");

Route.get("/endgame","AuthController.endgame");
Route.post("/endgame","AuthController.endgameRate");


Route.post("/wishlist","AuthController.wishlistEndgame");


Route.get("/joker","AuthController.joker");
Route.post("/joker","AuthController.jokerRate");

Route.get("/1917","AuthController.one");
Route.post("/1917","AuthController.oneRate");

Route.get("/parasite","AuthController.parasite");
Route.post("/parasite","AuthController.parasiteRating");

Route.get("/traintobusan","AuthController.traintobusan");
Route.post("/traintobusan","AuthController.trainRate");

Route.get("/wish","AuthController.wish");
Route.get("/news1","AuthController.news1");

Route.get("/news2","AuthController.news2");

Route.get("/news3","AuthController.news3");

Route.get("/account","AuthController.account");

