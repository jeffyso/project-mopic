'use strict'

class AuthController {
    login({view, request, response}){
        const name ="JZO"
        const age = 12
        const friend=["Sue","Bam","Friend","Fern"]
        const address= {
            postcode : "10140", 
            country:"Thailand",
    }
    return view.render("login",{ name,age,friend,address })
};
    register({view}){
        return view.render("register");
    }
        
}
module.exports = AuthController;
