const appetizer_controller = require('../app/http/controllers/appetizer_controller')


function initRoutes(app){
    app.get('/' , (req,res) =>{
        res.render('home.ejs')
    })
    app.get('/customer_login.html',(req,res)=>{ 
        res.render('customer_login.ejs')
    })
    app.get('/customer.html',(req,res)=>{
        res.render('customer')
    })
    app.get('/customer_cuisine.html',(req,res)=>{
        res.render('customer_cuisine.ejs')
    })

    
    //appetizer_controller().index

    app.get('/customer_menu-appetizers.html', appetizer_controller().index)

    app.get('/customer_menu-main.html',(req,res)=>{
        res.render('customer_menu-main')
    })
    
    app.get('/customer_menu-dessert.html',(req,res)=>{
        res.render('customer_menu-dessert')
    })
    app.get('/index.html',(req,res)=>{
        res.render('index.html')
    })
    
}
module.exports=initRoutes