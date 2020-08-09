'use strict'
const Database = use("Database")

class AuthController {
    login({ view, request, response }) {

        return view.render("login",{})
    }


    async loginUser({request, response }) {
        
        const {userform,password} =  request.body
        
        const data = await Database
                             .select("*")
                             .from('users')
                             .where({username: userform,password})
        if(data.length){
            return response.redirect('/home')
        }
        else{
            return response.redirect('/register')
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

    endgame({view}){
        return view.render("endgame");
    }

    


    }

    joker({view}){
        return view.render("joker");
    }
    1917({view}){
        return view.render("1917");
    }

    parasite({view}){
        return view.render("parasite");
    }

    traintobusan({view}){
        return view.render("traintobusan");
    }



module.exports = AuthController;


    
