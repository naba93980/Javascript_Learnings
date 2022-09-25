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

document.cookie = "firstname=naba; max-age=3600; path=/;"