function getCookie(name){
  const cookie = document.cookie.split('; ');
  const value = cookie
      .find(c => c.startsWith(name))
      ?.split('=')[1];
  if (value === undefined){
    return null;
  }
  return decodeURIComponent(value)
}

