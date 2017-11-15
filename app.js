
let start = document.querySelector('body');

let count = 0;

let displayCount = document.getElementById("insert")
displayCount.innerHTML = count;


let smallQ = document.querySelector('.smallQ');
let largeQ = document.querySelector('.largeQ');
let bossQ = document.querySelector('.bossQ');


smallQ.addEventListener('click', function() {
  var smNum = Math.floor((Math.random() * 10) + 10);
  console.log(smNum);
  count += smNum;
  displayCount.innerHTML = count;
})
largeQ.addEventListener('click', function() {
  var lgNum = Math.floor((Math.random() * 20) + 30);
  count += lgNum ;
  displayCount.innerHTML = count;
})
bossQ.addEventListener('click', function() {
  var bossNum = Math.floor((Math.random() * 30) + 70);
  count += bossNum;
  displayCount.innerHTML = count;
})
