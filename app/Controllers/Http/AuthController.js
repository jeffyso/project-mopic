'use strict'
const Database = use("Database")

let token; 
let user ;
//--------------------------------------------------------EndGame Variable---------------------------------------------------------------------

let rating;
let total=0;
let sumUse = {user5:0,user4:0,user3:0,user2:0,user1:0}
let sumEnd ={sum1:0,sum2:0,sum3:0,sum4:0,sum5:0};
let end = {star1:0,star2:0,star3:0,star4:0,star5:0}

//--------------------------------------------------------1917 Variable---------------------------------------------------------------------


let rating19;
let total19=0;
let sumUse19 = {user5:0,user4:0,user3:0,user2:0,user1:0}
let sum19 ={sum1:0,sum2:0,sum3:0,sum4:0,sum5:0};
let onenine = {star1:0,star2:0,star3:0,star4:0,star5:0}


//--------------------------------------------------------login---------------------------------------------------------------------

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

    
//--------------------------------------------------------register---------------------------------------------------------------------
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

    
//--------------------------------------------------------news---------------------------------------------------------------------

    news({view}){
        return view.render("news",{token,user});
    }
    

    
//--------------------------------------------------------movies---------------------------------------------------------------------
    movies({view}){
        return view.render("movies",{token,user});
    }

//--------------------------------------------------------home---------------------------------------------------------------------
    home({view}){
        return view.render("home",{token,user});
    }

//--------------------------------------------------------endgame---------------------------------------------------------------------
    endgame({view}){
        return view.render("endgame",{token,user,rating});
    }
    
    endgameRate({view,request,response}){
        const {endgame} = request.body
        let sumRate =0;
        

        if(endgame == 5){
            total = total + 1;
            sumUse.user5 =sumUse.user5 + 1;
            end.star5 = endgame;
            end.star5 = (end.star5*sumUse.user5)
            sumEnd.sum5 = sumEnd.sum5+end.star5;
            console.log("star :"+sumEnd.sum5);
            console.log("user :"+total);
        }

        else if(endgame == 4){
            total = total + 1;
            sumUse.user4 =+ 1;
            end.star4 = endgame;
            end.star4 = (end.star4*sumUse.user4) 
            sumEnd.sum4 = sumEnd.sum4+end.star4;
            
            console.log("star :"+sumEnd.sum4);
            console.log("user :"+total);
        }

        else if(endgame == 3){
            total = total + 1;
            end.star3 = endgame
            sumUse.user3 =+ 1;
            end.star3 = (end.star3*sumUse.user3)
            sumEnd.sum3 = sumEnd.sum3+end.star3;
            console.log("star :"+sumEnd.sum3);
            console.log("user :"+total);
        }

        else if(endgame == 2){
            total = total + 1;
            end.star2 = endgame;
            sumUse.user2 =+ 1;
            end.star2 = (end.star2*sumUse.user2)
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

            sumRate = sumEnd.sum1+sumEnd.sum2+sumEnd.sum3+sumEnd.sum4+sumEnd.sum5;
            sumRate = sumRate/total;

            console.log("total: "+sumRate);


        return view.render("/endgame")
    }

    
//--------------------------------------------------------joker---------------------------------------------------------------------
    joker({view}){
        return view.render("joker",{token,user});
    }

    
//--------------------------------------------------------1917---------------------------------------------------------------------
    1917({view}){
        return view.render("1917",{token,user,rating19});
    }

//--------------------------------------------------------parasite---------------------------------------------------------------------
    parasite({view}){
        return view.render("parasite");
    }

//--------------------------------------------------------traintobusan---------------------------------------------------------------------
    traintobusan({view}){
        return view.render("traintobusan");
    }

//--------------------------------------------------------news1---------------------------------------------------------------------
    news1({view}){
        return view.render("news1");
    }

//--------------------------------------------------------news2---------------------------------------------------------------------
    news2({view}){
        return view.render("news2");
    }
    
//--------------------------------------------------------news 3---------------------------------------------------------------------
    news3({view}){
        return view.render("news3");
    }

    logout({view,redirect,request}){
        token == 0
        return view.render("/home",token)
    }
}

module.exports = AuthController;


    
