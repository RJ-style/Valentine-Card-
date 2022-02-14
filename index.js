const yesBtn = document.getElementById('Yes');
const noBtn = document.getElementById('No');
const backDrp = document.getElementById('backdrops');
const textBox = document.getElementById('input');
//const submit = document.getElementById('submit');
const hintBtn=document.querySelector('span');
const hintBar=document.getElementById('hint');
const audioFile=document.querySelector('audio');

const btn1 = document.getElementById('btn').firstElementChild;
const btn2 = document.getElementById('btn').querySelector('button:nth-of-type(2)');
const btn3 = document.getElementById('btn').querySelector('button:nth-of-type(3)');
const btn4 = document.getElementById('btn').querySelector('button:nth-of-type(4)');
const btn5 = document.getElementById('btn').querySelector('button:nth-of-type(5)');
const btn6 = document.getElementById('btn').querySelector('button:nth-of-type(6)');
const btn7 = document.getElementById('btn').querySelector('button:nth-of-type(7)');
const btn8 = document.getElementById('btn').querySelector('button:nth-of-type(8)');
const btn9 = document.getElementById('btn').querySelector('button:nth-of-type(9)');
const btn10 = document.getElementById('btn').querySelector('button:nth-of-type(10)');
const btn11 = document.getElementById('btn').querySelector('button:nth-of-type(11)');
const btn12 = document.getElementById('btn').querySelector('button:nth-of-type(12)');
const btn13 = document.getElementById('btn').querySelector('button:nth-of-type(13)');
const btn14 = document.getElementById('btn').querySelector('button:nth-of-type(14)');
const btn15 = document.getElementById('btn').querySelector('button:nth-of-type(15)');
const btn16 = document.getElementById('btn').querySelector('button:nth-of-type(16)');


function letters(value) {
  console.log(value.innerText);
}



let inputValues = [];
let inputValuesJoined;

let removedValues = [];
let btns = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btn11, btn12, btn13, btn14];
btns.forEach((item)=> {
  item.addEventListener('click', ()=> {
    inputValues.push(item.value);
    inputValuesJoined = inputValues.join('');

    textBox.innerText = inputValuesJoined;
  })

});
btn15.addEventListener('click', ()=> {
  inputValues.pop();
  inputValuesJoined = inputValues.join('');

  textBox.innerText = inputValuesJoined;
  console.log(inputValuesJoined);
})

const quote = 'I LOVE YOU TOO';

btn16.addEventListener('click', ()=> {
  console.log(textBox.innerText);
  console.log(inputValues)
  if (textBox.innerText.toUpperCase() === quote) {
    backDrp.className = 'hid';
    audioFile.play();
  } else {
    alert('Thanking you for allowed me to propose you.But my love will not fade out 💓')
  }
});

hintBtn.addEventListener('click',()=>{
  hintBar.classList.toggle('show')
})