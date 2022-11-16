const headerContent = document.getElementById('header-content');
const response = document.getElementById('response');
const login = document.getElementById('login');
const register = document.getElementById('register');


register.classList.add('hidden');
login.classList.add('hidden');
response.classList.add('hidden');
headerContent.classList.add('hidden');

const tank = document.getElementById('tank-value');
const dps = document.getElementById('dps-value');
const heal = document.getElementById('heal-value');
const username = document.getElementById('username');

var valueView = 10;

tank.innerHTML = valueView;
dps.innerHTML = valueView;
heal.innerHTML = valueView;
username.innerHTML = 'Danoux';