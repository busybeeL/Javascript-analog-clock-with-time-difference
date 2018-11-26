// declare hour, minuts, second hands variables
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// clearInterval without ID for remove setInterval
function ClearAllIntervals(){
  for (var i = 1; i < 99999; i++) {
    window.clearInterval(i);
  }
}

// Show default Time when the page roaded first time  
function defaultTime(){
  // put Date object into a variable date
  var date = new Date();
  // get current hours, munites, seconds using proporties in Date object 
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  // get each hand's position 
  let hrPosition = hr*360/12 + ((min * 360/60)/12);
  let minPosition = (min * 360/60) + (sec*360/60)/60;
  let secPosition = sec * 360/60;
  // Change position of each hands 
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}
// Running defaultTime function every seconds
setInterval(defaultTime, 1000);

// When buttons clicked for setting different time zone 
$('.btn').click(function(){
  // Clear current setInterval to run new setInterval 
  ClearAllIntervals();
  // get timezone name by getting data attribute in each button tags 
  var zoneName = this.getAttribute('data');
  // Creat same function as defaultTime but timeZone name has been changed 
  var run = function(){
    var date = new Date();
    var timeZone = new Date(date.toLocaleString('en-US', {timeZone: zoneName}));
   
    let hr = timeZone.getHours();
    let min = timeZone.getMinutes();
    let sec = timeZone.getSeconds();
    
    let hrPosition = hr*360/12 + ((min * 360/60)/12);
    let minPosition = (min * 360/60) + (sec*360/60)/60;
    let secPosition = sec * 360/60;
    
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
  };
  // implement setInterval with run function takes timezone name 
  var Inter = setInterval(run, 1000);
});

