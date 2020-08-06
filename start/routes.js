'use strict'

const AuthController = require('../app/Controllers/Http/AuthController')

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

Route.on('/').render('home')
Route.on('/login').render('login')


Route.get("/register",({view, request,reponse}) => {
    return view.render("register")
})

Route.get("/login","AuthController.login");
