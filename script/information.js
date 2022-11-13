//link declaration form
const tankDecForm = document.getElementById('tankDec');
const tankIncForm = document.getElementById('tankInc');

const dpsDecForm = document.getElementById('dpsDec');
const dpsIncForm = document.getElementById('dpsInc');

const healDecForm = document.getElementById('healDec');
const healIncForm = document.getElementById('healInc');

const resetAllForm = document.getElementById('resetAll');

//Remove
getData();

//link function for form
//sublink tank dec form
function tankDec(event){
  event.preventDefault();
  var xhr = new XMLHttpRequest();
  var data = new FormData(this);
  xhr.open('POST','controller/function/updateData.php?task=tankDec');
  xhr.send(data);
  xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
      var response = JSON.stringify(this.response);
      console.log(response);
      getData();
    }else if (xhr.readyState == 4){
      alert('error tank dec');
    }
  }
  return false;
}
//sublink tank inc form
function tankInc(event){
  event.preventDefault();
  var xhr = new XMLHttpRequest();
  var data = new FormData(this);
  xhr.open('POST','controller/function/updateData.php?task=tankInc');
  xhr.send(data);
  xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
      var response = JSON.stringify(this.response);
      console.log(response);
      getData();
    }else if (xhr.readyState == 4){
      alert('error tank inc');
    }
  }
  return false;
}

//sublink dps dec form
function dpsDec(event){
  event.preventDefault();
  var xhr = new XMLHttpRequest();
  var data = new FormData(this);
  xhr.open('POST','controller/function/updateData.php?task=dpsDec');
  xhr.send(data);
  xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
      var response = JSON.stringify(this.response);
      console.log(response);
      getData();
    }else if (xhr.readyState == 4){
      alert('error dps dec');
    }
  }
  return false;
}
//sublink dps inc form
function dpsInc(event){
  event.preventDefault();
  var xhr = new XMLHttpRequest();
  var data = new FormData(this);
  xhr.open('POST','controller/function/updateData.php?task=dpsInc');
  xhr.send(data);
  xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
      var response = JSON.stringify(this.response);
      console.log(response);
      getData();
    }else if (xhr.readyState == 4){
      alert('error dps inc');
    }
  }
  return false;
}

//sublink heal dec form
function healDec(event){
  event.preventDefault();
  var xhr = new XMLHttpRequest();
  var data = new FormData(this);
  xhr.open('POST','controller/function/updateData.php?task=healDec');
  xhr.send(data);
  xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
      var response = JSON.stringify(this.response);
      console.log(response);
      getData();
    }else if (xhr.readyState == 4){
      alert('error heal dec');
    }
  }
  return false;
}
//sublink heak inc form
function healInc(event){
  event.preventDefault();
  var xhr = new XMLHttpRequest();
  var data = new FormData(this);
  xhr.open('POST','controller/function/updateData.php?task=healInc');
  xhr.send(data);
  xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
      var response = JSON.stringify(this.response);
      console.log(response);
      getData();
    }else if (xhr.readyState == 4){
      alert('error heal inc');
    }
  }
  return false;
}

//sublink reset form
function resetAll(event){
  event.preventDefault();
  var xhr = new XMLHttpRequest();
  var data = new FormData(this);
  xhr.open('POST','controller/function/updateData.php?task=resetAll');
  xhr.send(data);
  xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
      var response = JSON.stringify(this.response);
      console.log(response);
      getData();
    }else if (xhr.readyState == 4){
      alert('error reset');
    }
  }
  return false;
}

// link event for form
tankDecForm.addEventListener('submit',tankDec);
tankIncForm.addEventListener('submit',tankInc);

dpsDecForm.addEventListener('submit',dpsDec);
dpsIncForm.addEventListener('submit',dpsInc);

healDecForm.addEventListener('submit',healDec);
healIncForm.addEventListener('submit',healInc);

resetAllForm.addEventListener('submit',resetAll);