let value = document.getElementById('value')
let decrease = document.querySelector('.decrease')
let reset = document.querySelector('.reset')
let increase = document.querySelector('.increase')

let amount = 0

decrease.addEventListener('click', function() {

    amount -= 1


   value.textContent = amount
colorChange()

})

reset.addEventListener('click', function() {
    amount = 0
    value.textContent = amount
    value.style.color = 'rgb(19,35,46)'

})

increase.addEventListener('click', function() {
    
    amount += 1
   value.textContent = amount
    
   colorChange()


})

let colorChange = () => {
    if (amount > 0){
        value.style.color = 'green'
    } else if ( amount < 0){
        value.style.color = 'red'
    } else{
        NaN
    }
}

