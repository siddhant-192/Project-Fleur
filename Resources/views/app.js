// import axios from 'axios'
       let addToCart = document.querySelectorAll('.item-button')
       function updateCart(appetizer){
        // axios.post('/update-cart',appetizer).then(res=>{
        //   console.log(res)

        // })
       }

          addToCart.forEach((btn)=>{
              btn.addEventListener('click',(e)=>{
                  console.log(e)
              let appetizer = JSON.parse(btn.dataset.appetizers)
              updateCart(appetizer)
  
                
    })
})