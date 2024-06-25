
//"CheckButton"إخفاء وإظهار السطور المخفية عند الضغط على

const checkbox1 = document.getElementById('checkbox1');
const row1 = document.getElementById('row1');
row1.classList.add('hidden');
checkbox1.addEventListener('change', function() {
  if (checkbox1.checked) {
      row1.classList.remove('hidden');
      row1.classList.add('show');
    } else {
    row1.classList.remove('show');
    row1.classList.add('hidden');
  }
});

const checkbox2 = document.getElementById('checkbox2');
const row2 = document.getElementById('row2');
row2.classList.add('hidden');
checkbox2.addEventListener('change', function() {
  if (checkbox2.checked) {
      row2.classList.remove('hidden');
      row2.classList.add('show');
    } else {
    row2.classList.remove('show');
    row2.classList.add('hidden');
  }
})


const checkbox3 = document.getElementById('checkbox3');
const row3 = document.getElementById('row3');
row3.classList.add('hidden');
checkbox3.addEventListener('change', function() {
  if (checkbox3.checked) {
      row3.classList.remove('hidden');
      row3.classList.add('show');
    } else {
    row3.classList.remove('show');
    row3.classList.add('hidden');
  }
})


const checkbox4 = document.getElementById('checkbox4');
const row4 = document.getElementById('row4');
row4.classList.add('hidden');
checkbox4.addEventListener('change', function() {
  if (checkbox4.checked) {
      row4.classList.remove('hidden');
      row4.classList.add('show');
    } else {
    row4.classList.remove('show');
    row4.classList.add('hidden');
  }
})

const checkbox5 = document.getElementById('checkbox5');
const row5 = document.getElementById('row5');
row5.classList.add('hidden');
checkbox5.addEventListener('change', function() {
  if (checkbox5.checked) {
      row5.classList.remove('hidden');
      row5.classList.add('show');
    } else {
    row5.classList.remove('show');
    row5.classList.add('hidden');
  }
})


const checkbox6 = document.getElementById('checkbox6');
const row6 = document.getElementById('row6');
row6.classList.add('hidden');
checkbox6.addEventListener('change', function() {
  if (checkbox6.checked) {
      row6.classList.remove('hidden');
      row6.classList.add('show');
    } else {
    row6.classList.remove('show');
    row6.classList.add('hidden');
  }
})

const checkbox7 = document.getElementById('checkbox7');
const row7 = document.getElementById('row7');
row7.classList.add('hidden');
checkbox7.addEventListener('change', function() {
  if (checkbox7.checked) {
      row7.classList.remove('hidden');
      row7.classList.add('show');
    } else {
    row7.classList.remove('show');
    row7.classList.add('hidden');
  }
})

const checkbox8 = document.getElementById('checkbox8');
const row8 = document.getElementById('row8');
row8.classList.add('hidden');
checkbox8.addEventListener('change', function() {
  if (checkbox8.checked) {
      row8.classList.remove('hidden');
      row8.classList.add('show');
    } else {
    row8.classList.remove('show');
    row8.classList.add('hidden');
  }
})
const checkbox9 = document.getElementById('checkbox9');
const row9 = document.getElementById('row9');
row9.classList.add('hidden');
checkbox9.addEventListener('change', function() {
  if (checkbox9.checked) {
      row9.classList.remove('hidden');
      row9.classList.add('show');
    } else {
    row9.classList.remove('show');
    row9.classList.add('hidden');
  }
})


const checkbox10 = document.getElementById('checkbox10');
const row10 = document.getElementById('row10');
row10.classList.add('hidden');
checkbox10.addEventListener('change', function() {
  if (checkbox10.checked) {
      row10.classList.remove('hidden');
      row10.classList.add('show');
    } else {
    row10.classList.remove('show');
    row10.classList.add('hidden');
  }
})

//"إنشاء تابع لضمان أن المستخدم قد قام باختيار عقار معين قبل ضغط زر "متابعة
var isChecked = false;
count = document.getElementById('continue').disabled = !isChecked;
function checkRadio() {
const select = document.getElementsByName('select');

for (var i = 1; i < select.length; i++) {
  console.log( select.length)
  if (select[i].checked) {
      isChecked = true;
      console.log( isChecked)

      break;
      }

      if (!isChecked) {
      count = document.getElementById('continue').disabled = isChecked;
      }

  }}
  counte = document.getElementById('continue')
  const form = document.getElementById('application-form');
  form.classList.add('hidden');
  counte.addEventListener('change', function() {
    if (counte.checked) {
      form.classList.remove('hidden');
      form.classList.add('show');
      } else {
          form.classList.remove('show');
          form.classList.add('hidden');
    }
  })
  
//"Captcha"إنشاء تابع لتوليد رمز التحقق
function generateCaptcha() {
  var captchaText = generateRandomString(6);
  document.getElementById("captcha").value = "";
  document.getElementById("captcha").placeholder = captchaText;
  document.getElementById("captchaImage").src = "https://dummyimage.com/150x50/000/fff&text=" + captchaText;
}
//"Captcha"إنشاء تابع لتحديد الحروف التي ستظهر ضمن رمز التحقق
function generateRandomString(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
//"Captcha"إنشاء تابع لتغيير رمز التحقق
function changeCaptcha() {
  generateCaptcha();
}
