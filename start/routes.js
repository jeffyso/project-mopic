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

<<<<<<< HEAD
Route.post("/register","AuthController.registerUser");
=======
Route.get("/home","AuthController.home");
>>>>>>> 298d905043cbad209bfd6b5f92c2baec3a8c0857

Route.get("/login","AuthController.login");
Route.post("/login","AuthController.loginUser");

<<<<<<< HEAD
Route.post("/api/register","AuthController.registerUser");
=======
Route.get("/register","AuthController.register");
Route.post("/register","AuthController.registerUser");

Route.get("/news","AuthController.news");

Route.get("/movies","AuthController.movies");
>>>>>>> 298d905043cbad209bfd6b5f92c2baec3a8c0857
