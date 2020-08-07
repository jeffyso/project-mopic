'use strict'
const Database = use("Database")

class AuthController {

    async login({view,request,response}) {
    
        return view.render("login",{})
    }

    loginUser({view,request,response}) {
        const {username,password} =  request.body
        //? {_csrf:"",username:'}
        // console.log(profile)

        //return view.render("login");
        return response.redirect("/login")

        }   
     

     register({view}) {
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


module.exports = AuthController



//     const users =  await Database.from("profiles") //.where("name","John"); เนม=จอห์น .where คือการ filter เท่ากับ ทำให้เป็น Object 
    //    // เท่ากับ const users =  await Database.from("user");
    //    .where({name:"John"}) //เท่ากับอย่างเดียว ไม่เท่ากับไม่ได้ แต่ถ้าไม่เท่ากับ จะเป็น 
    // //    .whereNot({age:"20"})
    // //    .whereBetween('age',[18,32]);

    //     const name ="NArisza"
    //     const age = 19;
    //     const friends = ["Sue","Sam","Bam","Friend","Fern"]
    //     const address = {
    //         postcode: "10140",
    //         country: "TH"
    //     };
