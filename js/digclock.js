//Create a time data function
function currentTime() {
    //Declare variables
    var d = new Date(); //Get current date
    var hr = d.getHours(); //Get current hours
    var min = d.getMinutes(); //Get current minutes
    var sec = d.getSeconds(); //Get current seconds
    var ampm; //declare empty variable to store AM or PM
    var utchr = d.getUTCHours(); //get current Greenwhich mean time GMT
    var timeDiff; //to store time difference between GMT hour and local hour
    var adjTimeDiff; //to store time difference converted to positive number
    var timeZone; //to store the 4 time zones (PT, MT, CT, ET)
    //add 0 to a single digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }
    //add 0 to a single digits for minutes
    if (min < 10) {
        min = "0" + min;
    }
    //determine AM or PM string
    if (hr == 12) {
        ampm = "PM"; //set to PM
    } else if ( hr > 12) {
            hr -= 12; //dedect 12 from hours greater than 12
            ampm = "PM"; //set to PM
    } else {
        ampm =  "AM"; //set to AM
    }
    //convert GMT from millitary time to standard time
    if (utchr >= 12) {
        utchr = utchr - 12
    }
    //calculate time difference  between GMT hour and local hour
    timeDiff = utchr - hr;
    //convert time difference, if negative to positive
    if (timeDiff < 0) {
        timeDiff = timeDiff * - 1;
    }
    //check what time zone based on converted time difference
    if (timeDiff == 4) {
        timeZone = "PT";
    } else if (timeDiff == 5) {
        timeZone = "MT";
    } else if (timeDiff == 6) {
        timeZone = "CT";
    } else {
        timeZone = "ET";
    }
    //Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

    //display current local time and time zone on HTML elements
    document.getElementById("clock").innerText = time; // adding time
}
// initial run of time data function
currentTime ();
// run time data function every 1 second
setInterval(currentTime, 1000); //setting timer
