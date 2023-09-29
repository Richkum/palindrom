const printt = document.getElementById('print')
const fin = document.getElementById('finish')

function palindrom () {
  const enter = document.getElementById('second').value

  let result = ' '

  result = enter.split('').reverse().join('')

  if (enter === result) {
    fin.textContent = 'This is a palindrom'
    console.log('This is a palindrom')
  } else {
    fin.textContent = 'This is not a palindrom'
    console.log('This is not a palindrom')
  }
  console.log(enter)
}

printt.addEventListener('click', palindrom)
