const Menu = require('../../models/menu')
function appetizer_controller(){

    return{
        async index(req,res){
           const appetizers = await Menu.find()
           console.log(appetizers)
           return res.render('customer_menu-appetizers.ejs',{appetizers:appetizers})
            //Menu.find().then(function(appetizers){
            //    console.log(appetizers)
            //   return res.render('customer_menu-appetizers.ejs',{appetizers:appetizers})
           // })
        }

    }
}
module.exports = appetizer_controller