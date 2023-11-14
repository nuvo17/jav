const btn = document.querySelector('button')
const inputText = document.querySelector('#hi')
const display = document.querySelector('h2')



const selim = async()=> {
    const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    const result = await response.json()
    
    return(result.bpi.USD.rate_float)
  
  } 

  btn.addEventListener("click", sync ()=> {
    let newResult = await selim()
    const NigerianButton = document.querySelector('#NGN')
    const AmericanButton = document.querySelector('#USD')


  })
  

