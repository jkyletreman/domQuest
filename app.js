
let start = document.querySelector('body');

let count = 0;

let displayCount = document.getElementById("insert")
displayCount.innerHTML = count;

// Scores
let smallQ = document.querySelector('.smallQ');
let largeQ = document.querySelector('.largeQ');
let bossQ = document.querySelector('.bossQ');

let smallScore = document.querySelector('.smallScore');
let largeScore = document.querySelector('.largeScore');
let bossScore = document.querySelector('.bossScore');

smallQ.addEventListener('click', function() {
  var smNum = Math.floor((Math.random() * 10) + 10);
  console.log(smNum);
  count += smNum;
  displayCount.innerHTML = count;
  smallScore.innerHTML = smNum;
})
largeQ.addEventListener('click', function() {
  var lgNum = Math.floor((Math.random() * 20) + 30);
  count += lgNum ;
  displayCount.innerHTML = count;
  largeScore.innerHTML = lgNum;
})
bossQ.addEventListener('click', function() {
  var bossNum = Math.floor((Math.random() * 30) + 70);
  count += bossNum;
  displayCount.innerHTML = count;
  bossScore.innerHTML = bossNum;
})
