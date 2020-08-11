'use strict'
const Database = use("Database")

let token; 
let user ;

let rating;
let total=0;
let sumEnd ={sum1:0,sum2:0,sum3:0,sum4:0,sum5:0};
let end = {star1:0,star2:0,star3:0,star4:0,star5:0}

// let rating;
// let total=0;
// let sumEnd ={sum1:0,sum2:0,sum3:0,sum4:0,sum5:0};
// let end = {star1:0,star2:0,star3:0,star4:0,star5:0}




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
        return view.render("news",{token,user});
    }
    
    movies({view}){
        return view.render("movies",{token,user});
    }

    home({view}){
        return view.render("home",{token,user});
    }

    endgame({view}){
        return view.render("endgame",{token,user,rating});
    }
    
    endgameRate({view,request,response}){
        const {endgame} = request.body
        if(endgame == 5){
            total = total + 1;
            end.star5 = endgame;
            end.star5 = (end.star5*5)
            sumEnd.sum5 = sumEnd.sum5+end.star5;
            console.log("star :"+sumEnd.sum5);
            console.log("user :"+total);
        }

        else if(endgame == 4){
            total = total + 1;
            end.star4 = endgame;
            end.star4 = (end.star4*4) 
            sumEnd.sum4 = sumEnd.sum4+end.star4;
            
            console.log("star :"+sumEnd.sum4);
            console.log("user :"+total);
        }

        else if(endgame == 3){
            total = total + 1;
            end.star3 = endgame;
            end.star3 = (end.star3*3)
            sumEnd.sum3 = sumEnd.sum3+end.star3;
            console.log("star :"+sumEnd.sum3);
            console.log("user :"+total);
        }

        else if(endgame == 2){
            total = total + 1;
            end.star2 = endgame;
            end.star2 = (end.star2*2)
            sumEnd.sum2 = sumEnd.sum2+end.star2;
            console.log("star :"+sumEnd.sum2); 
            console.log("user :"+total);
        }
        else if(endgame == 1){
            total = total + 1;
            end.star1 = endgame;
            sumEnd.sum1 = sumEnd.sum1+(+end.star1);
            console.log("star :"+sumEnd.sum1);
            console.log("user :"+total); 
            
        }
            rating = sumEnd.sum1+sumEnd.sum2+sumEnd.sum3+sumEnd.sum4+sumEnd.sum5;
            rating = rating/total;
            console.log(rating)

        

        
        return view.render("/endgame")
    }
    joker({view}){
        return view.render("joker",{token,user});
    }
    1917({view}){
        return view.render("1917",{token,user});
    }

    parasite({view}){
        return view.render("parasite");
    }

    traintobusan({view}){
        return view.render("traintobusan");
    }

}

module.exports = AuthController;


    
