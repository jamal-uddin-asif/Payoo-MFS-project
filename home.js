// bank account main balance 
const mainBalance = parseInt(document.getElementById('main-balance').innerText)

// to get inner text 
function getInnerTextNumber(id){
    const innerText = parseInt(document.getElementById(id).innerText)
    return innerText
}


//To get input value number 
function getInputValueNumber(id){
    const number = parseInt(document.getElementById(id).value)
    return number
}
// to get input value 
function getInputValue(id){
    const value = document.getElementById(id).value
    return value
}
// to set input value 
function setInputValue(value){
    const balance = document.getElementById('main-balance')
    const update =  balance.innerText = value
 return update
}

// to get by id 
function getById(id){
   const element = document.getElementById(id)
   return element
}

// to handle toggle 
function handleToggle(id){
      const elements =  document.getElementsByClassName('forms')
    for(let element of elements){
        element.style.display = 'none'

    }
      getById(id).style.display = 'block'
}

// to show active button 
function activeBtn (id){
     const formsBtn =  document.getElementsByClassName('forms-btn')
    for(let btn of formsBtn){
        btn.classList.remove('border-[#0874f2]','bg-[#0874f20d]')
    }
    getById(id).classList.add('border-[#0874f2]','bg-[#0874f20d]')
}





// Add money section js 

document.getElementById('btn-add-money')
.addEventListener('click',function(){
    const mainBalance = getInnerTextNumber('main-balance')
    const addMoney = getInputValueNumber('add-money-input')
    const pin = getInputValueNumber('pin-input')
    const accountNumber = document.getElementById('account-number').value


    if(accountNumber.length !== 11 ){
        alert('Account Number length Invalid')
        return
    }
    if(pin !== 1234){
        alert('Invalid Pin')
        return
    }

    const updateMoney = mainBalance + addMoney;
    setInputValue(updateMoney)
    // document.getElementById('main-balance').innerText = updateMoney;
})


// Withdraw section js 

document.getElementById('btn-withdraw-money')
.addEventListener('click',function(){
    const withdrawMoney = getInputValueNumber('withdraw-money-input')
    const mainBalance = getInnerTextNumber('main-balance')
    const agentNumber = getInputValue('agent-number')
    const pin = getInputValueNumber('pin-withdraw')

    // console.log(agentNumber.length)
    if(agentNumber.length < 11){
        alert('agent number invalid')
        return;
    }
     else if(pin !== 1234){
        alert('pin is invalid')
     }
    const updateMoney = mainBalance - withdrawMoney;

    setInputValue(updateMoney)
    // document.getElementById('main-balance').innerText = updateMoney;
})












let allTransactions = []









// toggle 
document.getElementById('add-money-div')
.addEventListener('click',function(){
      handleToggle('add-money-section')
      activeBtn('add-money-div')
      const addMoney = {name:'Add Money', 'date':new Date().toLocaleTimeString()}
      allTransactions.push(addMoney)

})
document.getElementById('cash-out-div')
.addEventListener('click',function(){

    handleToggle('cash-out-section')
    activeBtn('cash-out-div')
    const cashOut = {name:'Cash Out', 'date':new Date().toLocaleTimeString()}
    allTransactions.push(cashOut)
})
document.getElementById('transfer-money-div')
.addEventListener('click',function(){

    handleToggle('transfer-money-section')
    activeBtn('transfer-money-div')
    const transferMoney = {name:'Transfer Money', 'date':new Date().toLocaleTimeString()}
    allTransactions.push(transferMoney)

})
getById('get-bonus-div').addEventListener('click',
    function(){
        handleToggle('get-bonus-section')
        activeBtn('get-bonus-div')
        const getBonus = {name:'Get Bonus', 'date':new Date().toLocaleTimeString()}
        allTransactions.push(getBonus)
})
getById('transaction-div').addEventListener('click',
    function(){
        handleToggle('transaction-section')
        activeBtn('transaction-div')
        console.log(allTransactions)
        
})
getById('pay-bill-div').addEventListener('click',
    function(){
         handleToggle('pay-bill-section')
        activeBtn('pay-bill-div')

    }
)



// transaction history creating
getById('transaction-div').addEventListener('click',
    function(){
        for(let data of allTransactions){

            let div = document.createElement('div');
      div.innerHTML = `
      <div class="flex justify-between items-center bg-white p-3 mb-3">
          <div class="flex items-center">
            <div class="mx-4  pr-2 rounded-3xl bg-[#F4F5F7]">
              <img src="./assets/wallet1.png" alt="" />
            </div>
            <div>
              <h3>${data.name}</h3>
              <small>${data.date}</small>
            </div>
          </div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      `  
      const transactionParent =getById('transaction-parent')
      transactionParent.appendChild(div)




 }

     let transactionParent =  getById('transaction-parent')
     transactionParent.appendChild(div)
})

