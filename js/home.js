document.getElementById('home-add').addEventListener('click', function(Event){

Event.preventDefault()
const amountNmbr = document.getElementById('add-amount').value 
const amountInNmbr = parseFloat(amountNmbr)
const pinNumber = document.getElementById('pin-nb').value
console.log(pinNumber)
if(pinNumber === '1234'){
  console.log('add money')
  
}
else{ alert ('try again')}
const mainBalance = document.getElementById('main-balance').innerText
const mainNumber = parseFloat(mainBalance)
const newBalance = amountInNmbr + mainNumber
document.getElementById('main-balance').innerText = newBalance



})

