var s = 1;
var m = 60 * s;
var h = 60 * m;
var d = 24 * h;
var y = 365 * d;

function formatDuration(input) {
  seconds = Number(input);
  if (seconds === 0) return "now";
  var times = [];
  var res = "";

  let remainder = 0;
  var years = Math.floor(input / y);
  if (years !== 0) {
    years += years === 1 ? " year" : " years";
    times.push(years);
  }
  remainder = input % y;

  var days = Math.floor(remainder / d);
  if (days !== 0) {
    days += days === 1 ? " day" : " days";
    times.push(days);
  }
  remainder = input % d;

  var hours = Math.floor(remainder / h);
  if (hours !== 0) {
    hours += hours == 1 ? " hour" : " hours";
    times.push(hours);
  }
  remainder = remainder % h;

  var minutes = Math.floor(remainder / m);
  if (minutes !== 0) {
    minutes += minutes == 1 ? " minute" : " minutes";
    times.push(minutes);
  }
  remainder = remainder % m;
  if (remainder !== 0) {
    remainder += remainder == 1 ? " second" : " seconds";
    times.push(remainder);
  }
  res = times.toString().replace(/,/g, ", ");
  console.log(res);
  res = res.replace(/,([^,]*)$/, " and$1");

  console.log(res);
  return res;
}
formatDuration(3662);
