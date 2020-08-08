'use strict'
const Database = use("Database")

class AuthController {
    async login({ view, request, response }) {

    
        return view.render("login",{})
    }
    loginUser({ view, request, response }) {
        const {username,password} =  request.body
        //? {_csrf:"",username:'}
        // console.log(profile)

        return response.redirect("/login")
    }

    register({ view }) {
        return view.render("register");
    }

   async registerUser({request,response}){
        const {email,password,username} = request.body
        // console.log(email,password)
        await Database.insert({email,password,username}).into("users")
        //หรือ  await Database.from("users").insert({email,password})
        return response.redirect("/login")
    }

    news({view}){
        return view.render("news");
    }
    
    movies({view}){
        return view.render("movies");
    }

    home({view}){
        return view.render("home");
    }
}


module.exports = AuthController;


    