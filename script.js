
const slider = document.querySelector('#slider')
const numText = document.querySelector('.num')
const numExtenso = document.querySelector('.extenso')


slider.addEventListener('input', updateNumText)


function updateNumText(event) {
  currentValue = event.target.value
  numText.value = currentValue
  convertNumToExtent(currentValue)
}

function convertNumToExtent(num) {
  const unidades = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove']
  const specialNums = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove']
  const dezenas = ['dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa']
  const hundreds = ['cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos']

  
  if(num < 10) {
    let splittedNum = String(num).split('')
    let firstDigit = splittedNum[0]
    numExtenso.value = unidades[num]
  }
  if(num >= 10 && num < 20){
    let splittedNum = String(num).split('')
    let firstDigit = splittedNum[0]
    let secondDigit = splittedNum[1]
    numExtenso.value = specialNums[secondDigit]
  }
  if(num >= 20 && num < 100) {
    let splittedNum = String(num).split('')
    let firstDigit = splittedNum[0]
    let secondDigit = splittedNum[1]
    if(secondDigit === '0') {
      numExtenso.value = dezenas[firstDigit-1]
    } else {
      numExtenso.value = dezenas[firstDigit-1] + ' e ' + unidades[secondDigit]
    }
  }
  if(num >= 100 && num < 1000) {
    let splittedNum = String(num).split('')
    let firstDigit = Number(splittedNum[0])
    let secondDigit = Number(splittedNum[1])
    let thirdDigit = Number(splittedNum[2])
    if(firstDigit >= 1 && secondDigit === 0 && thirdDigit === 0) {
      numExtenso.value = hundreds[firstDigit-1]
    }
    if(firstDigit === 1 && secondDigit === 0 && thirdDigit > 0 && thirdDigit <= 9) {
      numExtenso.value = 'cento e ' + unidades[thirdDigit] 
    }
    if(firstDigit === 1 && secondDigit === 1 && thirdDigit <= 9) {
      numExtenso.value = 'cento e ' + especialNums[thirdDigit]
    } 
    if(firstDigit === 1 && secondDigit > 1) {
      numExtenso.value = 'cento e ' + dezenas[secondDigit-1] + ' e ' + unidades[thirdDigit]
    }
    if(firstDigit > 1 && secondDigit === 0 && thirdDigit > 0 && thirdDigit <= 9) {
      numExtenso.value = hundreds[firstDigit-1] + ' e ' + unidades[thirdDigit] 
    }
    if(firstDigit > 1 && secondDigit === 1) {
      numExtenso.value = hundreds[firstDigit-1] + ' e ' + especialNums[thirdDigit] 
    }
    if(firstDigit > 1 && secondDigit > 1) {
      numExtenso.value = hundreds[firstDigit-1] + ' e ' + dezenas[secondDigit-1] + ' e ' + unidades[thirdDigit]
    }
  }
}

var rangeSlider = document.getElementById("slider");
var rangeBullet = document.getElementById("rs-bullet");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
  
}