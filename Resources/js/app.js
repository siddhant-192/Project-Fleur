import axios from 'axios'
import Noty from 'noty'
       let addToCart = document.querySelectorAll('.item-button')
       function updateCart(appetizer){
        axios.post('/update-cart',appetizer).then(res=>{
          //cartCounter.innertext = res.data.totalqty
        //   new Noty({

        //     theme: mint,
          
        //     text: 'Item added to cart'
          
        // }).show();
          console.log(res)

        })
       }

          addToCart.forEach((btn)=>{
              btn.addEventListener('click',(e)=>{
                  console.log(e)
              let appetizer = JSON.parse(btn.dataset.appetizers)
              updateCart(appetizer)
  
                
    })
})