document.getElementById('login-btn').addEventListener('click' , function(Event){
  Event.preventDefault()

 const phoneNmbr = document.getElementById('phone-nmbr').value 

  const pin = document.getElementById('pin').value
  
  if (phoneNmbr === '5' && pin === '1234'){
    console.log('You are login')
    window.location.href='home.html'
  
  }

  else{alert('wrong')}
})
