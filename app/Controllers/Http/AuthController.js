'use strict'
const Database = use("Database")
let rating;
let token; 
let user ;
class AuthController {
    login({ view, request, response }) {

        return view.render("login",{token,user})
    }


    async loginUser({view,request, response }) {
        
        const {userform,password} =  request.body
        const data = await Database
                             .select("*")
                             .from('users')
                             .where({username: userform,password})
        if(data.length){
            token =+ 1;
            user = userform;
            console.log(user)
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
        return view.render("home",{token,user});
    }

    endgame({view}){
        return view.render("endgame");
    }
    
    // endgameRate({view,request,response}){
    //     const {endgame} = request.body
    //     if(endgame != 0){
    //         user = (+user)+1;
    //         rating = ((+endgame)+(+rating))/user;
    //     }
    //     return view.render(rating)
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

    news1({view}){
        return view.render("news1");
    }

    news2({view}){
        return view.render("news2");
    }
    news3({view}){
        return view.render("news3");
    }
}

module.exports = AuthController;


    
