const tzname = "Asia/Singapore";
const longOffsetFormatter = new Intl.DateTimeFormat("en-GB", {timeZone: tzname ,timeZoneName: "longOffset"});
const longOffsetString = longOffsetFormatter.format(new Date("2013-02-28T19:00:00.000")); // '2/28/2013, GMT-05:00'

// longOffsetString.split('GMT')[1] will give us '-05:00'
const gmtOffset = longOffsetString.split('GMT')[1];

let retirementDate = new Date("2024-12-31T12:00:00.000").toLocaleString("en-GB", {timeZone: "Asia/Singapore"});
// console.log(retirementDate)
retirementDate = new Date(retirementDate).getTime()

// countdown
let timer = setInterval(function() {

  // get today's date
  let today = new Date();
  today = today.toLocaleString("en-GB", {timeZone: "Asia/Singapore"})
//   console.log(today)
  today = new Date(today).getTime()
  
  // get the difference
  let diff;
  diff = retirementDate - today;


  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
</div>";

}, 1000);