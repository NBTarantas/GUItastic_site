function sayHi() {
    var confDialog = window.confirm("Хочете поділитись посиланням на цю сторінку?")
  if (confDialog)
   window.alert("Чудово! Але зверніть увагу хто не зареєстрований на порталі e-school не зможе відкрити посилання! ")
  else
   window.alert("Погано :(")
}

setTimeout(sayHi, 10099);