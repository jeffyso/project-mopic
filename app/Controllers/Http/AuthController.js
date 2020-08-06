'use strict'


class AuthController {

    async login({view,request,response}) {
    
        return view.render("login")
    }

    loginUser({view,request,response}) {
        const profile = request.body
        console.log(profile)

        //return view.render("login");
        return response.redirect("/login")

        }   
     

    register({view}) {
        return view.render("register");
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
