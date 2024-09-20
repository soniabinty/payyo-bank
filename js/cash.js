document.getElementById('home-cash').addEventListener('click', function(Event){

  Event.preventDefault()
  const amountNmbr = document.getElementById('cash-amount').value 
  const amountInNmbr = parseFloat(amountNmbr)
  const pinNumber = document.getElementById('pin-nm').value
  console.log(pinNumber)
  if(pinNumber === '1234'){
    console.log('add money')
    
  }
  else{ alert ('try again')}
  const mainBalance = document.getElementById('main-balance').innerText
  const mainNumber = parseFloat(mainBalance)
  const newBalance = mainNumber - amountInNmbr
  document.getElementById('main-balance').innerText = newBalance
  
  
  
  })