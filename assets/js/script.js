// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //

    // gets current hour
    var currentHour = dayjs().hour();

    // loops through all 9 hours in a work day
    for(var i = 9; i <= 17; i++) {
        checkTime(i, currentHour);
    }

    /*
    * function checks if current hour is before, during, or after the current hour,
    * it also converts the hour from a 24-hour clock to 12-hour one
    */ 
    function checkTime(hour, currentHour) {
        if(hour > currentHour) {
            if(hour > 12) {
                hour = hour - 12;
            }    
            // appends the hour variable to get the proper id
            $("#hour-" + hour).addClass("future");
        }
        else if(hour < currentHour) {
            if(hour > 12) {
                hour = hour - 12;
            }    
            // appends the hour variable to get the proper id
            $("#hour-" + hour).addClass("past");
        }
        else {
            if(hour > 12) {
                hour = hour - 12;
            }    
            // appends the hour variable to get the proper id
            $("#hour-" + hour).addClass('present')
        }
    }

    // displays current day in header
    var currentDay = dayjs().format("dddd, MMMM D");
    $("#currentDay").text(currentDay); //references id of <p> in header
  });
  