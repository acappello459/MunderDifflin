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
var wrapperA = document.getElementById('wrapper a');
var wrapperB = document.getElementById('wrapper b');
var wrapperC = document.getElementById('wrapper c');
var logo = document.createElement('div')
var whatever = document.getElementById('whatever')

// logo.style.display = 'fixed';
logo.style.border = '2px solid'
logo.style.height = '150px'
logo.style.width = '250px'
logo.style.borderRadius = '30%';
// logo.style.zIndex= '2';
logo.style.backgroundImage = "url('images/logo.jpg')"
logo.style.backgroundSize ='100% 100%'
whatever.appendChild(logo)


// wrapper1.style.zIndex = '1';
// wrapperA.style.margin = '0px 0px'
// wrapperA.style.position = 'absolute'
wrapperA.style.backgroundColor = 'blue'


wrapperB.style.backgroundColor = 'red'
// wrapper.style.height = '400px'


wrapperC.style.backgroundColor = 'blue'
