function age() {
    // the user input this
    let day = parseInt(document.getElementById('day').value);
    let month = parseInt(document.getElementById('month').value);
    let year = document.getElementById('year').value;

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        document.getElementById('age').innerHTML = 'Enter the data.';
        return;
    }

    if (day < 1 || day > 31) {
        document.getElementById('age').innerHTML = 'Please enter a valid date.';
        return;
    }

    if (month < 1 || month > 12) {
        document.getElementById('age').innerHTML = 'Please enter a valid month.';
        return;
    }

    if (year.length !== 4) {
        document.getElementById('age').innerHTML = 'Please enter a valid year.';
        return;
    }

    let date = new Date();// full date
    //document.write(date); print the date of today:Sun Nov 05 2023 15:07:00 GMT+0000 (توقيت غرينتش)

    let get_day = date.getDate(); // 5
    let get_month = 1 + date.getMonth(); // 11
    let get_year = date.getFullYear(); // 2023

    let all_month = [31,28,31,30,31,30,31,31,20,31,30,31];

    if(day > get_day){
        get_day = get_day+all_month[get_month - 1];
        get_day = get_day -1 ;

    }

    if(month > get_month){
        get_month = get_month +12;
        get_year = get_year-1;
    }

    let d = get_day-day;
    let m = get_month-month;
    let y = get_year - year;


    document.getElementById('age').innerHTML = 'Your Age is ' + y + ' Years <br> Next date of birth after ' + m + ' Months and ' + d + ' days';
    //document.getElementById('age').innerHTML = `Your Age is ${y} Years <br> Next date of birth after ${m} Months and ${d} days`;
}

function clearForm() {
    document.getElementById('day').value = '';
    document.getElementById('month').value = '';
    document.getElementById('year').value = '';
    document.getElementById('age').innerHTML = '';
}
