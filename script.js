let SignUpBtn = document.querySelector('.signupbtn');
let SignInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.name-field');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');

SignInBtn.addEventListener('click',()=>{
 nameField.style.maxHeight = '0';
 title.innerHTML = 'Sign In';
 SignUpBtn.classList.add('disable');
 SignInBtn.classList.remove('disable');
 underline.style.transform = 'translateX(35px)';
});