if(document.images) {
        emailon = new Image();
        emailon.src = "Images/email2.gif"
        emailoff = new Image();
        emailoff.src = "Images/email.gif";
        emailline = new Image();
        emailline.src = "Images/emailline.gif";

        phoneon = new Image();
        phoneon.src = "Images/telephone2.gif"
        phoneoff = new Image();
        phoneoff.src = "Images/telephone.gif";
        phoneline = new Image();
        phoneline.src = "Images/phoneline.gif";

        faxon = new Image();
        faxon.src = "Images/fax2.gif"
        faxoff = new Image();
        faxoff.src = "Images/fax.gif";
        faxline = new Image();
        faxline.src = "Images/faxline.gif";

        addresson = new Image();
        addresson.src = "Images/address2.gif"
        addressoff = new Image();
        addressoff.src = "Images/address.gif";
        addressline = new Image();
        addressline.src = "Images/adressline.gif";
}


function msoverEMAIL(imgName) {
        if (document.images) {
                imgOn = eval(imgName + "on.src");
                document [imgName].src = imgOn;
        }
        post('turnerw@wabash.edu');
}

function msoverPHONE(imgName) {
        if (document.images) {
                imgOn = eval(imgName + "on.src");
                document [imgName].src = imgOn;
        }
        post('(765) 361-6354');
}

function msoverFAX(imgName) {
        if (document.images) {
                imgOn = eval(imgName + "on.src");
                document [imgName].src = imgOn;
        }
        post('(765) 361-6340');
}

function msoverADD(imgName) {
        if (document.images) {
                imgOn = eval(imgName + "on.src");
                document [imgName].src = imgOn;
        }
        post('Department of Mathematics &amp; Computer Science<br>301 West Wabash Avenue<br>Crawfordsville, Indiana 47933-2417<br>USA<br><p>Office: Goodrich Hall 210</p>');
}

function msover(imgName,text) {
        if (document.images) {
                imgOn = eval(imgName + "on.src");
                document [imgName].src = imgOn;
                lineOn = eval(imgName + "line.src");
                document.line.src = lineOn;
        }
        post(text);
}

function msout(imgName) {
        if (document.images) {
                imgOff = eval(imgName + "off.src");
                document [imgName].src = imgOff;
        }
        cache(' ');
}      

function post(text) {
    var object = document.getElementById('Line');
    object.innerHTML=text;
}
      
function cache() {
    var object = document.getElementById('Line');
    object.innerHTML=" ";
}

function popUp(url) {
   sealWin=window.open(url,"win",'toolbar=0,location=0,directories=0,status=1,menubar=1,scrollbars=1,resizable=1');
   self.name = "mainWin"; 
}

function popUpSmall(url) {
   sealWin=window.open(url,"win",'toolbar=0,location=0,directories=0,status=1,menubar=1,scrollbars=1,resizable=1,width=550,height=325');
   self.name = "mainWin"; 
}

function lastMod() {
	var x = new Date (document.lastModified);
	Modif = new Date(x.toGMTString());
	Year = takeYear(Modif);
	Month = Modif.getMonth();
	Day = Modif.getDate();
	Mod = (Date.UTC(Year,Month,Day,0,0,0))/86400000;
	x = new Date();
	today = new Date(x.toGMTString());
	Year2 = takeYear(today);
	Month2 = today.getMonth();
	Day2 = today.getDate();
	now = (Date.UTC(Year2,Month2,Day2,0,0,0))/86400000;
	daysago = now - Mod;
	if (daysago < 0) return '';
	unit = 'days';
	if (daysago > 730) 	{
		daysago = Math.floor(daysago/365);
		unit = 'years';
	}
	else if (daysago > 60) {
		daysago = Math.floor(daysago/30);
		unit = 'months';
	}
	else if (daysago > 14) {
		daysago = Math.floor(daysago/7);
		unit = 'weeks'
	}
	var towrite = 'Page last changed ';
	if (daysago == 0) towrite += 'today';
	else if (daysago == 1) towrite += 'yesterday';
	else towrite += daysago + ' ' + unit + ' ago';
	towrite += Modif;
	return towrite;
}


function takeYear(theDate) {
	x = theDate.getYear();
	var y = x % 100;
	y += (y < 38) ? 2000 : 1900;
	return y;
}

function lastModified() {
	var lastModDate = new Date(document.lastModified);

	Year = takeYear(lastModDate);
	Month = lastModDate.getMonth();
	MonthName = Months[Month];
	Day = lastModDate.getDate();
	DayName = Days[lastModDate.getDay()];

	toWrite = DayName + ' ' + Day + ' ' + MonthName + ' ' + Year;
	return toWrite;


}

var Days = new Array('Sunday','Monday','Tuesday','Wednesday',
	'Thursday','Friday','Saturday');

var Months = new Array('January','February','March','April','May','June', 
	'July','August','September','October','November','December');


var today = new Date();
var Year = takeYear(today);
var MonthName = Months[today.getMonth()];
var Month = leadingZero(today.getMonth()+1);
var DayName = Days[today.getDay()];
var Day = leadingZero(today.getDate());
var Hours = leadingZero(today.getHours());
var Minutes = leadingZero(today.getMinutes());
var Seconds = leadingZero(today.getSeconds());

