'use strict'
const Database = use("Database")

let token; 
let user ;

let rating;
let total=0;
let sumEnd ={sum1:0,sum2:0,sum3:0,sum4:0,sum5:0};
let end = {star1:0,star2:0,star3:0,star4:0,star5:0}

let rating19;
let total19=0;
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

            sumRate = sumEnd.sum1+sumEnd.sum2+sumEnd.sum3+sumEnd.sum4+sumEnd.sum5;
            sumRate = sumRate/total;
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

    // oneWish({view,request,response}){


    // }


    onenine({view,request,response}){
        const {one} = request.body
        if(one == 5){
            total19 = total19 + 1;
            onenine.star5 = one;
            onenine.star5 = (end.star5*5)
            sum19.sum5 = sum19.sum5+onenine.star5;
            console.log("star :"+sumEnd.sum5);
            console.log("user :"+total);
        }

        else if(one == 4){
            total19 = total19 + 1;
            onenine.star4 = one;
            onenine.star4 = (onenine.star4*4) 
            sum19.sum4 = sum19.sum4+onenine.star4;
            
            console.log("star :"+sumEnd.sum4);
            console.log("user :"+total);
        }

        else if(one == 3){
            total19 = total19 + 1;
            onenine.star3 = one;
            onenine.star3 = (onenine.star3*3)
            sum19.sum3 = sum19.sum3+onenine.star3;
            console.log("star :"+sumEnd.sum3);
            console.log("user :"+total);
        }

        else if(one == 2){
            total19 = total19 + 1;
            onenine.star2 = one;
            onenine.star2 = (onenine.star2*2)
            sum19.sum2 = sum19.sum2+onenine.star2;
            console.log("star :"+sumEnd.sum2); 
            console.log("user :"+total);
        }
        else if(one == 1){
            total19 = total19 + 1;
            onenine.star1 = one;
            sum19.sum1 = sum19.sum1+(+onenine.star1);
            console.log("star :"+sumEnd.sum1);
            console.log("user :"+total); 
            
        }
        rating19 = sum19.sum1+sum19.sum2+sum19.sum3+sum19.sum4+sum19.sum5;
        rating19 = rating/total19;
            console.log(rating19)

        

        
        return view.render("/endgame")
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
}

module.exports = AuthController;


    
