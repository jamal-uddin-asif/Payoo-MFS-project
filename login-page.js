document.getElementById('btn-login').addEventListener('click',function(){
    const userNumber = 12345678910 ;
    const userPin = 1234;
    
    const inputNumber =parseInt( document.getElementById('number').value)
    const inputPin = parseInt(document.getElementById('pin').value)

    if(userNumber === inputNumber && userPin === inputPin){
        window.location.href = './home.html'
        console.log('all detile are correct')
    }
    else{
        alert('information incorrect')
    }
  

})