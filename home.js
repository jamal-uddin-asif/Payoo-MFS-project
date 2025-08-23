// bank account main balance 
const mainBalance = parseInt(document.getElementById('main-balance').innerText)

// Add money section js 

document.getElementById('btn-add-money')
.addEventListener('click',function(e){
    e.preventDefault()
    const userAccountNumber = 12345678910;
    const userPin = 1234;


    const accountNumber = parseInt(document.getElementById('account-number').value)
    const addMoney = parseInt(document.getElementById('add-money-input').value)
    const pin = parseInt(document.getElementById('pin-input').value)
    const mainBalance = parseInt(document.getElementById('main-balance').innerText)
    const updateMoney = mainBalance + addMoney;
 
    if( accountNumber !== userAccountNumber ){
        alert('Invalid account number')
        return;
    }
    else if(userPin !== pin){
         alert('Invalid pin')
        return;
    }

    document.getElementById('main-balance')
    .innerText = updateMoney
    
})


// Withdraw section js 

document.getElementById('btn-withdraw-money')
.addEventListener('click',function(){
    const realAgentNumber = 12345678910;
    const withdrawMoney = parseInt(document.getElementById('withdraw-money-input').value)
    const mainBalance = parseInt(document.getElementById('main-balance').innerText)
    const agentNumber = parseInt(document.getElementById('agent-number').value)
    const pin = parseInt(document.getElementById('pin-withdraw').value)

    console.log(agentNumber.length)
    if(agentNumber !== realAgentNumber){
        alert('agent number invalid')
        return;
    }
     else if(pin !== 1234){
        alert('pin is invalid')
     }
    const updateMoney = mainBalance - withdrawMoney;

    document.getElementById('main-balance').innerText = updateMoney;
})





// toggle 
document.getElementById('add-money-div')
.addEventListener('click',function(){
    document.getElementById('add-money-section').style.display = 'block'
    document.getElementById('cash-out-section').style.display = 'none'
    document.getElementById('latest-payment-section').style.display = 'none'
})
document.getElementById('cash-out-div')
.addEventListener('click',function(){
    document.getElementById('add-money-section').style.display = 'none'
    document.getElementById('cash-out-section').style.display = 'block'
    document.getElementById('latest-payment-section').style.display = 'none'
})
document.getElementById('transfer-money-div')
.addEventListener('click',function(){
    document.getElementById('add-money-section').style.display = 'none'
    document.getElementById('cash-out-section').style.display = 'none'
    document.getElementById('transfer-money-section').style.display = 'block'
    document.getElementById('latest-payment-section').style.display = 'none'
})

