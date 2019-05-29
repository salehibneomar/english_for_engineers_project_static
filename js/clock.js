// Code by Saleh Ibne Omar //
// Code by Saleh Ibne Omar //
// Code by Saleh Ibne Omar //

function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
	var secs = d.getSeconds();
	var ampm = "";
	var date = d.getDate();
	var month = d.getMonth();
	var year = d.getFullYear();
	var day = d.getDay();

	
	// AM PM condition
	if (hours<12){
		ampm="AM";
	}
	else{
		ampm="PM";
	}
	// 12hr clock format condition
	   
	if(hours==0){
		hours = 12;
	}

	if(hours>12){
		hours = hours - 12;
	}


	//Double digit condition
	if(hours<10){
		hours = "0" + hours;
	}
	if(mins<10){
		mins = "0" + mins;
	}
	if(secs<10){
		secs = "0" + secs;
	}

// Condition of day

switch(day){
	case 0:
	day = "SUN";
	break;
	case 1:
	day = "MON";
	break;
	case 2:
	day = "TUE";
	break;
	case 3:
	day = "WED";
	break;
	case 4:
	day = "THU";
	break;
	case 5:
	day = "FRI";
	break;
	case 6:
	day = "SAT";
	
}



// Month condition

switch(month){
	case 0:
	month = "JAN";
	break;

	case 1:
	month = "FEB";
	break;

	case 2:
	month = "MAR";
	break;

	case 3:
	month = "APR";
	break;

	case 4:
	month = "MAY";
	break;

	case 5:
	month = "JUN";
	break;

	case 6:
	month = "JUL";
	break;

	case 7:
	month = "AUG";
	break;

	case 8:
	month = "SEP";
	break;

	case 9:
	month = "OCT";
	break;

	case 10:
	month = "NOV";
	break;
	
	case 11:
	month = "DEC";
}
	
	document.getElementById("clock").innerHTML = hours+":"+mins+":"+secs+ " " +ampm;
	document.getElementById("date").innerHTML=day+",&nbsp;"+date+"  "+month+"  "+year;

}
setInterval(printTime, 1000);

// Code by Saleh Ibne Omar //