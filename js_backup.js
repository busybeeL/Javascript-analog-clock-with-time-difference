const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var shang = document.getElementById("shang");
var berlin = document.getElementById("berlin");
var newyork = document.getElementById("newyork");

var shangTimeZoneName = shang.getAttribute('data');
var berlinTimeZoneName = berlin.getAttribute('data');
var newyorkTimeZoneName = newyork.getAttribute('data');

//var date = new Date();
//var timeZone = date;
//var timeZone_s = new Date(date.toLocaleString('en-US', {timeZone: shangTimeZoneName}));
//var timeZone_b = new Date(date.toLocaleString('en-US', {timeZone: berlinTimeZoneName}));
//var timeZone_n = new Date(date.toLocaleString('en-US', {timeZone: berlinTimeZoneName}));


function run_the_clock_s(){  

  var date = new Date();
  var timeZone_s = new Date(date.toLocaleString('en-US', {timeZone: shangTimeZoneName}));
 
  let hr = timeZone_s.getHours();
  let min = timeZone_s.getMinutes();
  let sec = timeZone_s.getSeconds();
  
  let hrPosition = hr*360/12 + ((min * 360/60)/12);
  let minPosition = (min * 360/60) + (sec*360/60)/60;
  let secPosition = sec * 360/60;
  
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

function run_the_clock_b(){

  var date = new Date();
  var timeZone_b = new Date(date.toLocaleString('en-US', {timeZone: berlinTimeZoneName}));
 
  let hr = timeZone_b.getHours();
  let min = timeZone_b.getMinutes();
  let sec = timeZone_b.getSeconds();
  
  let hrPosition = hr*360/12 + ((min * 360/60)/12);
  let minPosition = (min * 360/60) + (sec*360/60)/60;
  let secPosition = sec * 360/60;
  
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}
function run_the_clock_n(){

  var date = new Date();
  var timeZone_n = new Date(date.toLocaleString('en-US', {timeZone: newyorkTimeZoneName}));
 
  let hr = timeZone_n.getHours();
  let min = timeZone_n.getMinutes();
  let sec = timeZone_n.getSeconds();
  
  let hrPosition = hr*360/12 + ((min * 360/60)/12);
  let minPosition = (min * 360/60) + (sec*360/60)/60;
  let secPosition = sec * 360/60;
  
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

shang.addEventListener("click", function(){
  setInterval(run_the_clock_s, 1000);
});

berlin.addEventListener("click", function(){
  setInterval(run_the_clock_b, 1000);
});

newyork.addEventListener("click", function(){
  setInterval(run_the_clock_n, 1000);
});


$('.btn').click(function(){
  var data = this.getAttribute('data');
  console.log(data);

  
});

