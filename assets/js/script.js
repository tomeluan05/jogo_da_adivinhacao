let randomNumber = Math.floor(Math.random() * 10)
console.log(`Número escolhido: ${randomNumber}`)

let part1 = document.querySelector('.part1');
let part2 = document.querySelector('.part2');
let part3 = document.querySelector('.part3')

let paragraphPart3 = document.querySelector('.part3 h2')
let textoAcertou = document.querySelector('h2')

let inputNumber = document.querySelector('#inputNumber')

let botaoFocus = document.querySelector('.focus')

let attemps = 1;
let minNumber = 0;
let maxNumber = 10;
let recebeUltimoInput;

document.addEventListener("DOMContentLoaded", function() {
    inputNumber.focus()
});

function handleClick(event){
    event.preventDefault()

    while(Number.isNaN(Number(inputNumber.value)) ||inputNumber.value == ''|| (inputNumber.value < 0 || inputNumber.value > 10)){
        alert(`Número inválido, por favor digite novamente!`)

        inputNumber.value = ''
        return;
    }

    if(inputNumber.value == randomNumber){
    
        part1.classList.add('hide')
        part2.classList.remove('hide')

        textoAcertou.innerHTML = `Parabéns, você encontrou o número na ${attemps}ª tentativa`

        inputNumber.value = ''

        randomNumber = Math.floor(Math.random() * 10)

        console.log(`Número escolhido: ${randomNumber}`)

        botaoFocus.focus()

        attemps = 1;
    }
    else if(inputNumber.value > randomNumber){
        maxNumber = inputNumber.value
        alert(`QUE PENA, VOCÊ NÃO ACERTOU! 
O número está entre ${minNumber} e ${inputNumber.value}`)
        attemps ++;
        inputNumber.value = ''
    }
    else if(inputNumber.value < randomNumber){
        minNumber = inputNumber.value
        alert(`QUE PENA, VOCÊ NÃO ACERTOU! 
O número está entre ${inputNumber.value} e ${maxNumber}`)
        attemps ++;
        inputNumber.value = ''
    }

    console.log('valor de attemps ' + attemps)

    if(attemps == 6){
        part2.classList.add('hide')
        part1.classList.add('hide')
        part3.classList.remove('hide')
    }
}

function backToGame(){
    part2.classList.add('hide')
    part1.classList.remove('hide')
    part3.classList.add('hide')

    location.reload()
}


