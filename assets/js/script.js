// add current date to top of page
var todayDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").html(todayDate);


function timeTracker() {
    //get current number of hours.
    var timeNow = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]); 

        /* *****************************************************************
        // $(".time-block") *** targets each row with a class of time-block
        // .each *** applies to each (".time-block") in doc
        // 'var timeBlock' *** creates a variable to store info 
        // 'parseInt()' *** takes entire argument, makes it an interger 
        // $(this).attr("id") *** targets div with class time-block, finds attribute with id (ie. 'hour8')
        // '.split("hour")' *** splits the id between hour and # (ex. 'hour', '8')
        // [1] *** takes the second part of the split to targert each timeblock (ex. 8)
        ***************************************************************** */

        // To check the time and add the classes for background indicators
        if (timeBlock < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (timeBlock === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}

$(".saveBtn").on("click", function () {

    // Get nearby values of reach row's time and text
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    // Save text in local storage
    localStorage.setItem(time, text);
});

timeTracker();