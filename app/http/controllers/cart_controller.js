const Menu = require('../../models/menu')
function cart_controller(){

    return{
        index(req,res){
            res.render('customer_cart.ejs')
        }
        
        
            
        }
}
module.exports = cart_controller