const btn = document.querySelector('button')
const inputText = document.querySelector('#text-input')
const display = document.querySelector('h2')
const dollar = document.querySelector("#USD")
const south = document.querySelector("#ZAR")



const selim = async()=> {
    const response = await fetch("https://api.frankfurter.app/latest?from=ZAR")
    const result = await response.json()
    const value = result;

    return value.rates.USD;

  } 

  const exchange = async()=> {
    const response = await fetch("https://api.frankfurter.app/latest?from=ZAR")
    const total = await response.json()
    const zarValue = result;


    return zarValue.rates.ZAR;
      
  } 

  const selimExchange = async()=> {
    const response = await fetch("https://api.frankfurter.app/latest?from=ZAR")
    const result = await response.json()
    const value = result;

    return value.base;

  } 

  const zarExchange = async()=> {
    const response = await fetch("https://api.frankfurter.app/latest?from=ZAR")
    const total = await response.json()
    const zarValue = result;


    return zarValue.base;
  }


  
  south.addEventListener("click", sync ()=> {
    let zValue = await zarExchange()
    let zBase = await exchange();
    btn.addEventListener("click", async () => {
      display.textContent = input.value * zBase + zValue
      input.value = ""
    })
  })
  
  dollar.addEventListener("click", sync ()=> {
    let dValue = await zarExchange()
    let dBase = await exchange();
    btn.addEventListener("click", async () => {
      display.textContent = input.value * dBase + dValue
      input.value = ""
    })
  })
