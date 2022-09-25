localStorage.setItem('name', 'Bob');
localStorage.setItem('name', 'Naba'); //overwrites above value
localStorage.setItem("roll", 11500119044);
console.log(localStorage.getItem('name'));
console.log(localStorage.key(1));
localStorage.removeItem("name");
console.log(localStorage.key(1));
console.log(localStorage.key(0));
localStorage.clear();
console.log(localStorage.key(0));

//sessionstorage is same as localstorage, just that it is valid for a particular tab

document.cookie = "firstname=naba; max-age=3600;"
document.cookie = "lastname=modak; max-age=3600;"

//delete cookies using js:
var allCookies = document.cookie.split('; ');
for (let i = 0; i < allCookies.length; i++){
    let cookie = allCookies[i];
    let eqPos = cookie.indexOf("=");
    let namee = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
    document.cookie = namee + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}