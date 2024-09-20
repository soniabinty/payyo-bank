document.getElementById('cash-out').addEventListener('click' , function(){
  document.getElementById('cash-out-form').classList.remove('hidden')

  document.getElementById('add-money').classList.add('hidden')
})


document.getElementById('add-mon').addEventListener('click' , function(){
  document.getElementById('cash-out-form').classList.add('hidden')

  document.getElementById('add-money').classList.remove('hidden')
})