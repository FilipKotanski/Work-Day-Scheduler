$(document).ready(function() {

// Function to create the main day scheduler with time blocks

function createDayScheduler(startTime, endTime){

    let currentRow;
 
    let daySchedulerArea = $("#dayScheduler");
 
     // Set and display the current date
 
     setCurrentDate();
 
     // Loop to create time blocks for each hour
 
     for(let hour = startTime; hour < endTime + 1; hour++){
 
         // Create a row for the current hour
 
         currentRow = createRow(hour);
 
         // Update styling based on past, present, or future
 
         updateEventsColumnStyling(currentRow, hour);
 
         // Append the row to the day scheduler
 
         daySchedulerArea.append(currentRow);
 
     }
 
     // Load saved events from localStorage and display
 
     loadAndDisplaySavedEvents(startTime, endTime);
 
 }

// Function to set and display the current date
 
function setCurrentDate(){

    $("#currentDay").text(dayjs().format("dddd, D MMMM YYYY"));

}

// Function to create a row for a specific hour

function createRow(hour){

    let newRow = $("<div>").addClass("row");

    let hoursColumn = $("<div>").addClass("col-1 hour").text(hourToString(hour));

    let eventsColumn = $("<textarea>").addClass("col-9 time-block");

    let saveButtonsColumn = $("<button>").addClass("col-1 saveBtn").html("<i class='far fa-save'></i>");

    let deleteButtonsColumn = $("<button>").addClass("col-1 deleteBtn").html("<i class='fas fa-trash-alt'></i>");

    newRow.append(hoursColumn,eventsColumn,saveButtonsColumn,deleteButtonsColumn);

    return newRow;

}

// Function to convert numeric hour to a formatted string

function hourToString(hour) {

    const meridian = hour < 12 ? "AM" : "PM";

    const formattedHour = (hour % 12) || 12; // Handles the 12-hour cycle
   
    return formattedHour + meridian;

}

// alternative function to convert numeric hour to a formatted string

// function hourToString(hour){

//     if(hour == 0){

//         hour = "12AM";

//     }

//     else if(0 < hour && hour < 12){

//         hour = hour.toString()+"AM";
//     }

//     else if(hour == 12){

//         hour = "12PM";

//     }

//     else if( 24 > hour && hour > 12){

//         hour = (hour-12).toString()+"PM";

//     }

//     else if(hour == 24){

//         hour = "12AM";

//     }

//     return hour;

// }

// Function to update styling of time blocks based on current time

function updateEventsColumnStyling(currentRow, hour){

    let currentHour = getCurrentHour();

    let textArea = currentRow.children().eq(1);

    // Apply different classes based on the relationship to the current time

    if (hour < currentHour) {

        textArea.addClass("past");

    } 
    
    else if (hour === currentHour){

        textArea.addClass("present");

    }
     
    else {

        textArea.addClass("future");

    }
   
}

// Function to get the current hour using dayjs library

function getCurrentHour(){

    return dayjs().hour();
 
 }

// Function to load saved events from localStorage and display them

function loadAndDisplaySavedEvents(startTime, endTime){

    for(let hour = startTime; hour < endTime + 1; hour++)
    {

        let eventsColumn = $("textarea").eq(hour-startTime);

        eventsColumn.attr('hour', hour);

        let savedEvent = localStorage.getItem("" + hour);

        if(savedEvent){

            eventsColumn.val(savedEvent);

        }

    }

}

// Initialization: Create the day scheduler from 9 AM to 5 PM

createDayScheduler(9,17);

});