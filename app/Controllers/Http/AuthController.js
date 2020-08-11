'use strict'
const Database = use("Database")
let rating = 0;
let token =0; 
let user =0;
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
            token =+ 1;
            console.log(token)
            return response.redirect('/home')
        }
        else{
            token == 0;
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
    
    // endgameRate({request,response}){
    //     const {endgame} = request.body
    //     if(endgame != 0){
    //         user =+1;
    //         rating = ((+endgame)+(+rating))/2;
    //     }

    // }
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

}

module.exports = AuthController;


    
