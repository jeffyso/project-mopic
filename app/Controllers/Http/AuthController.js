'use strict'

const DB = use("Database");

class AuthController {
    async login({ view, request, response }) {

        return view.render("login");
    }
    loginUser({ view, request, response }) {
        const { username, password } = request.body

        //?{_csrf",username:"",password""}

        return response.redirect("/login")
    }

    register({ view }) {

        return view.render("register");
    }

    async registerUser({ request, response }) {
        const { email, password,username } = request.body
        await DB.from("users").insert({email,password,username})
        // console.log(email, password)
        return response.redirect("/login")
    }

}

module.exports = AuthController;

         // const name = await DB.select("name","age")
        //                      .from("user")
        //                      .where({ "name: John" }) ;
        //command Not = "<>" whereNot 
        //command "*" select all table     
        //const users = awiat DB.from("user");
        // const name ="JZO"
        // const age = 12
        // const friend=["Sue","Bam","Friend","Fern"]
        // const address= {
        //     postcode : "10140", 
        //     country:"Thailand",
