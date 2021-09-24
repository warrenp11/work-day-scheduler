// add current date to top of page
var todayDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").html(todayDate);

function timeTracker() {
    //get current time in hours
    var timeNow = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        // create var which holds a single time block
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]); 

        // check the time and add the classes for background indicators
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
    });
};

// click event saveBtn
$(".saveBtn").on("click", function () {

    // create variables to store a row's time and text
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    // Save text in local storage
    localStorage.setItem(time, text);
});

// Get item from local storage if any
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
$("#hour18 .description").val(localStorage.getItem("hour18"));

timeTracker();