//link declarations bloc
const viewResponse = document.getElementById('response-form');
const header = document.getElementById('header-content');
const formHome = document.getElementById('form-login-and-register');
const infoMain = document.getElementById('info');

//sublink bloc form
const login = document.getElementById('login');
const register = document.getElementById('register');
const deconnexion = document.getElementById('deconnexion');

//link declaration btn
const showLogin = document.getElementById('login-btn');
const showRegister = document.getElementById('register-btn');

const closeLogin = document.getElementById('login-close');
const closeRegister = document.getElementById('register-close');


//link affect class on login & register
login.classList.add('hidden');
register.classList.add('hidden');

//link login show & close
//sublink show login
function showLoginForm(){
  if(login.classList.contains('hidden')){
    login.classList.remove('hidden');
  }
}
//sublink close login
function closeLoginForm(){
  if(!login.classList.contains('hidden')){
    login.classList.add('hidden');
  }
}

//link register show & close
//sublink show register
function showRegisterForm(){
  if (register.classList.contains('hidden')){
    register.classList.remove('hidden');
  }
}
//sublink close register
function closeRegisterForm(){
  if (!register.classList.contains('hidden')){
    register.classList.add('hidden');
  }
}

//link event for login & register
//sublink login event
showLogin.addEventListener('click',showLoginForm);
closeLogin.addEventListener('click',closeLoginForm);

//sublink register event
showRegister.addEventListener('click',showRegisterForm);
closeRegister.addEventListener('click',closeRegisterForm);

//link affect class on info
infoMain.classList.add('hidden');

