$(function () {
    var buttonEl = $(".btn");
    var dayEl = $("#currentDay");

    // saves user input in local storage upon hitting the save button
    var handleSaveButton = function (event) {
        var exactHour = $(this).parent().attr("id").split("-")[1]; // grab the hour from the div id name
        var hourEl = $(this).parent().children().eq(1).val(); // grab value of textarea tag       

        var hourSchedule = localStorage.getItem("hour-" + exactHour);

        hourSchedule = hourEl;
        localStorage.setItem("hour-" + exactHour, hourSchedule);
    };

    buttonEl.on("click", handleSaveButton);

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
    dayEl.text(currentDay); //references id of <p> in header

    // gets current hour
    var currentHour = dayjs().hour();

    // loops through all 9 hours in a work day
    for(var i = 9; i <= 17; i++) {
        checkTime(i, currentHour);
    }

    // loops through each textarea and displays saved text from local storage
    function displayEvents() {
        for(var i = 9; i <= 17; i++) {
            var newHour = i;
            if(i > 12) {
                newHour = newHour - 12; // convert from 24 hour to 12 hour clock
            }

            // set textarea content to match content saved in local storage
            if(localStorage.getItem("hour-" + newHour) !== null) {
                $("#hour-" + newHour).children().eq(1).text(localStorage.getItem("hour-" + newHour));
            }
        }
    }

    displayEvents(); // display events on page load

});
  