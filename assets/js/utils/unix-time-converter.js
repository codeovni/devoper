let timedate = Math.round(new Date().getTime()/1000);
let milliseconds = timedate * 1000;
let unixdate = new Date(milliseconds);

/* Run first time */
unixTime();
gmtDate();
utcDate();
humanTime();
relativeTime();
dayOfTheYear();
weekOfTheYear();
isLeapYear();

/* Input event */
$('#unix-time-converter input').on('keyup paste', function() {

    if($(this).val() == '') { return; }

    timedate = $(this).val();

    unixTime();
    gmtDate();
    utcDate();
    humanTime();
    relativeTime();
    dayOfTheYear();
    weekOfTheYear();
    isLeapYear();

});

/* */
function unixTime() {

    $('#unix-time-converter input').attr('placeholder', timedate);
    $('#unix-unixtime').html(timedate);

}

/* Human time */
function humanTime() {

    milliseconds = timedate * 1000;
    unixdate = new Date(milliseconds);

    let result = unixdate.toLocaleString();

    $('#unix-human').html(result);

}

/* Calculate relative time */
function relativeTime() {

    /* Get current date */
    let now = new Date().getTime();

    let difference = unixdate - now;

    /* Convert to a positive integer */
    let time = Math.abs(difference);

    /* Define humantime and type */
    let humantime, type;

    /* Years */
    if(time > (1000 * 60 * 60 * 24 * 365)) {
        humantime = parseInt(time / (1000 * 60 * 60 * 24 * 365), 10);
        type = 'years';
    }

    /* Months */
    else if (time > (1000 * 60 * 60 * 24 * 30)) {
        humantime = parseInt(time / (1000 * 60 * 60 * 24 * 30), 10);
        type = 'months';
    }

    /* Weeks */
    else if (time > (1000 * 60 * 60 * 24 * 7)) {
        humantime = parseInt(time / (1000 * 60 * 60 * 24 * 7), 10);
        type = 'weeks';
    }

    /* Days */
    else if (time > (1000 * 60 * 60 * 24)) {
        humantime = parseInt(time / (1000 * 60 * 60 * 24), 10);
        type = 'days';
    }

    /* hours */
    else if (time > (1000 * 60 * 60)) {
        humantime = parseInt(time / (1000 * 60 * 60), 10);
        type = 'hours';
    }

    /* Minutes */
    else if (time > (1000 * 60)) {
        humantime = parseInt(time / (1000 * 60), 10);
        type = 'minutes';
    }

    /* Seconds */
    else {
        humantime = parseInt(time / (1000), 10);
        type = 'seconds';
    }

    /* Get time and type */
    let result = humantime + ' ' + type;

    /* Future or past */
    if(milliseconds > now) {
        result = 'in ' + result;
    } else {
        result = result + ' ago';
    }

    $('#unix-relative').html(result);

}

function utcDate() {

    let result = new Date(milliseconds).toISOString();

    $('#unix-utcdate').html(result);

}

function gmtDate() {

    let result = new Date(milliseconds).toGMTString();

    $('#unix-gmtdate').html(result);

}

/* Day of the year */
function dayOfTheYear() {

    let startdate = new Date(unixdate.getFullYear(), 0, 0);
    let difference = unixdate - startdate;
    let oneday = 1000 * 60 * 60 * 24;
    let result = Math.floor(difference/oneday);

    $('#unix-dayoftheyear').html(result);

}

/* Week of the year */
function weekOfTheYear() {

    let startdate = new Date(unixdate.getFullYear(), 0, 0);
    let difference = unixdate - startdate;
    let oneweek = 1000 * 60 * 60 * 24 * 7;
    let result = Math.floor(difference/oneweek);

    $('#unix-weekoftheyear').html(result);

}

function isLeapYear() {

    let year = unixdate.getFullYear();
    let result = new Date(year, 1, 29).getDate() === 29;

    $('#unix-isleapyear').html(`${result}`);

}