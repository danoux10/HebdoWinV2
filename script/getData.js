const username = document.getElementById('username');
const tankView = document.getElementById('tank-value');
const dpsView = document.getElementById('dps-value');
const healView = document.getElementById('heal-value');

const tankData = document.getElementsByName('dataTank');
const dpsData = document.getElementsByName('dataDps');
const healData = document.getElementsByName('dataHeal');


function getData(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET','controller/function/getData.php');
  xhr.send();
  xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var response = JSON.parse(xhr.response);
      // console.log(response);

      username.innerHTML = response.pseudo;
      tankView.innerHTML = response.tank;
      dpsView.innerHTML = response.dps;
      healView.innerHTML = response.heal;

      for(n=0;n<tankData.length;n++){
        tankData[n].value = response.tank;
        dpsData[n].value = response.dps;
        healData[n].value = response.heal;
      }
    }else if(this.readyState == 4 && this.status == 404){
      alert("error getData");
    }
  }
}