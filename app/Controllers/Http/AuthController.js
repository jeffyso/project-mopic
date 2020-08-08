'use strict'
const Database = use("Database")

class AuthController {
    login({ view, request, response }) {

        return view.render("login",{})
    }


    async loginUser({request, response }) {
        
        const {userform,password} =  request.body
        
        const data = await Database
                             .select()
                             .from('users')
                             //.where({ username : jeffy ,password : 12345 })

        if( data === true ){
            return response.redirect("/register")
        }
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


    
