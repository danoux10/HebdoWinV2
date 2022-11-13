//link register
function registerAjax(event) {
  event.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'controller/function/login&register.php?task=register');
  var data = new FormData(this);
  xhr.send(data);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(this.response);
      //sublink register error
      if (response.sucReg == 0) {
        viewResponse.classList.add('error');
        viewResponse.classList.remove('success');
        viewResponse.innerHTML = 'Pseudo Déjà existant';
      }
      //sublink register success
      if(response.sucReg == 1) {
        viewResponse.classList.add('success');
        viewResponse.classList.remove('error');
        viewResponse.innerHTML = 'Pseudo Ajouter avec success';
      }
    } else if (xhr.readyState == 4) {
      alert('error register');
    }
  }
  return false;
}

register.addEventListener('submit', registerAjax);

//link login
function loginAjax(event) {
  event.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'controller/function/login&register.php?task=login');
  var data = new FormData(this);
  xhr.send(data);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(this.response);
      //sublink login error
      if(response.sucLog == 0){
        viewResponse.classList.add('error');
        viewResponse.classList.remove('success');
        viewResponse.innerHTML = 'Pseudo Incorrect';
      }
      //sublink login success
      if (response.sucLog == 1){
        //Edit add class hidden on header & formContent & remove show
        header.classList.add('hidden');
        formHome.classList.add('hidden');
        //Edit remove class hidden on info & add class show
        getData();
        infoMain.classList.remove('hidden');
      }
    } else if (xhr.readyState == 4) {
      alert('error login');
    }
  }
  return false;
}

login.addEventListener('submit', loginAjax);
