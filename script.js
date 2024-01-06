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