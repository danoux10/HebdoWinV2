function getCookie(name) {
  const cookie = document.cookie.split('; ');
  const value = cookie
      .find(c => c.startsWith(name))
      ?.split('=')[1];
  if (value === undefined) {
    return null;
  }
  return decodeURIComponent(value)
}


if (getCookie('idUser') != null) {
  header.classList.add('hidden');
  formHome.classList.add('hidden');
  getData();
  infoMain.classList.remove('hidden');
}

if(getCookie('idUser') == null){
  header.classList.remove('hidden');
  formHome.classList.remove('hidden');
  infoMain.classList.add('hidden');
}