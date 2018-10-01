// Goal:
//
// To create a one page website for a fictional paper company that is exciting for the end user.
//
// Learning Objectives:
//
// Upon successful completion of this project, the student will demonstrate their understanding of semantic HTML, proper element targeting in CSS, behavioral javascript, animations and understanding the website user.
//
//
//
// Instructions:
//
// You have been hired by a fictional paper company to build a one page informational web page that highlights the best aspects of their business. During your meetings with them, they have indicated to you that they feel they need to present their product in a more exciting way. Think of ways you could make their product stand out. It could be interesting use of color palette or animations.
//
// Some questions to ask yourself:
//
// Who is the user?
// What does the business want to highlight?
// What is the goal of the website?
// Does my website fulfil the needs of the user?
// Do my animations and event callbacks improve the user experience?
// Does my website describe its intent?
var logo = document.getElementById('logo')
var wrapApA = document.getElementById('pA')
var modal = document.createElement('div')
var container = document.getElementsByClassName('container')
var xButton = document.createElement('button')
var enter = document.createElement('button')
var modalText = document.createElement('div')
var modalInput = document.createElement('input')
// var wrapAimg = document.createElement('img')

logo.style.float = 'left'
logo.style.borderRadius = '0% 25% 0% 25%'
logo.style.position = 'relatve'

// logo.style.margin = '-125px 0px'
// document.body.appendChild(logo)

wrapApA.style.width = '35%'
wrapApA.style.margin = '20px'
function popup(){

  // The styling of the Modal
  modal.style.height = '750px';
  modal.style.width = '75%';
  modal.style.marginTop = '-100%'
  modal.style.marginLeft = '15%'
  modal.style.backgroundColor = '#42a4f4';
  modal.style.backgroundImage = 'none'
  modal.style.zIndex = '3'
  modal.style.position = 'absolute';
  // modal.style.opacity = '.9'
  document.body.appendChild(modal)

// The styling of the x out button
  xButton.style.height = '30px';
  xButton.style.width = '30px';
  xButton.style.border = 'none'
  // xButton.style.backgroundColor = 'lightgrey';
  xButton.style.background='none';
  xButton.innerHTML = 'X';
  xButton.style.fontSize = '2em';
  xButton.style.marginLeft = '97.25%';
  modal.appendChild(xButton)

//Text for explaining the input box
  modalText.style.border = '2px solid';
  modalText.style.width = '50%';
  modalText.style.margin= '5% auto';
  modalText.style.textAlign = 'center';
  modalText.innerHTML ="Please enter your email address below. We will add you to a call list so that you can recieve updates on our stock, prices, and recieve coupon deals. Save money by doing business with Munder Difflin!";
  modalText.style.fontSize = '3em'
  modal.appendChild(modalText)

//input box asking for the user's email address
  modalInput.style.width ='30%';
  modalInput.style.height = '3%';
  modalInput.style.marginBottom = '500px';
  modalInput.style.marginLeft = '35%'
  modal.appendChild(modalInput)

//enter button styling
  enter.style.height = '25px';
  // enter.style.width = '25px';
  enter.style.backgroundColor = 'lightgrey';
  enter.innerHTML = 'ENTER';
  enter.style.marginLeft = '2%'
  // enter.style.marginLeft = '97.25%'
  modal.appendChild(enter)
}

// function modalSize(){
//   if (x.matches){
//     modal.style.marginTop = '-250%'
//   }
// }
// var x = window.matchMedia(maxWidth = '1100px')
// modalSize(x)
// x.addListener(modalSize)


//function that tells the modal to pop up 1 second after the page loads
function start(){
  setTimeout(popup,300)
}
window.addEventListener('load', start)

//when you click the x button it gets rid of the modal
xButton.addEventListener('click',function(){
  modal.style.display = 'none'
  xButton.style.display = 'none'
})

//when you click the input box it gets rid of the text so you don't have to delete 'Thank you' if you wanted to enter in more than one email
modalInput.addEventListener('click', function(){
  modalInput.value = ''
})

var newArr = [];
//eventlistener that when you click the enter button it checks to see if there is an @ symbol. if not it will say to reenter the email address
enter.addEventListener('click', function(){

  newArr.push(modalInput.value)
  for(let i = 0; i<newArr.length; i++){
  if(newArr[i][i] == '@'){
    console.log('Thanks')
  }else{
    console.log('try again')
  }
}
})
