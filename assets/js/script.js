// add current date to top of page
var todayDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").html(todayDate);

// current time
var timeNow = moment().hour();


var timeTracker = function() {
    // get current time in hours
    var currentTime = timeNow;

    // for each time block...
    $("#time-block").each(function(){
        
        var timeBlock = $(this).attr("id");



        //  check time and add color to time-block
        if ('TIME' < timeNow) {
            //past
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if ("TIME" === timeNow) {
            // present
            $(this).removeClass("future");
            $(this).addClass("present");
            $(this).removeClass("past");
        } else {
            // future
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
    });
};