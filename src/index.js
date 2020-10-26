import './style.css'
import QrCode from 'qrcode'


const form = document.querySelector('.input-form')


form.addEventListener('submit', event => {
  event.preventDefault()
  const reason = document.getElementById('reason').value
  const amount = document.getElementById('amount').value
  const container = document.getElementById('container')

  if (container.hasChildNodes()) {
    container.removeChild()
  }

  const value = `ST00012|Name=ООО Электротехснаб|PersonalAcc=40702810804000006070|BankName=АРХАНГЕЛЬСКОЕ ОТДЕЛЕНИЕ N 8637 ПАО СБЕРБАНК|BIC=041117601|CorrespAcc=30101810100000000601|Purpose=${reason}|Sum=${amount}|PayeeINN=3525394791|KPP=290143001`

  QrCode.toCanvas(container, value, { errorCorrectionLevel: 'Q', width: 300, height: 300 }, function (err, canvas) {
    if (err) throw err
   
    container.append(canvas)
  })
})
