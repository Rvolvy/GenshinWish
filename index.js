function Click() {
  let primo = document.getElementById('primo').value
  let pity = document.getElementById('pity').value
  let pityPrimo = pity * 160
  let IF = document.getElementById('IF').value
  let IFPrimo = IF * 160
  let rate = document.getElementById('rate')
  let On = 14400
  let Off = 28800

  if (primo == '') {
    alert('Please enter your primogems amount')
  }

  else if (pity == '') {
    alert('Please enter your pity amount')
  }

  else if (IF == '') {
    alert('Please enter your intertwined fate amount')
  }
  
  else if (rate.value == 'On') {
    let konfir = confirm(`You have ${primo} Primo, Pity: ${pity}, IF: ${IF}, and Rate: On?`)
    if (konfir == true){
      alert(`You need ${On - primo - pityPrimo - IFPrimo} Primogems to 100% get limited character`)
    }
  }

  else if (rate.value == 'Off') {
    let konfir = confirm(`You have ${primo} Primo, Pity: ${pity}, IF: ${IF}, and Rate: Off?`)
    if (konfir == true){
      alert(`You need ${Off - primo - pityPrimo - IFPrimo} Primogems to 100% get limited character`)
    }
  }
}