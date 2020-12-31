let show = 1;

function openNav() {
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function settingDate(date, by){
    date = new Date(date);
    date.setDate(by);
    date.setHours(23);
    return date;
}

function getDatesBetween(date1, date2){
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    date1 = settingDate(date1, 31);
    date2 = settingDate(date2, 31);
    let temp;
    let lastDay = [];
    while(date1<=date2){
        if(date1.getDate()!=31){
            temp = settingDate(date1, 0);
            if (temp >=d1 && temp<=d2) lastDay.push(temp);
            date1 = settingDate(date1, 31);
        } else {
            temp = new Date(date1);
            if (temp >=d1 && temp<=d2) lastDay.push(temp);
            date1.setMonth(date1.getMonth()+1);
        }
    }

    let weekDays = [
        {shortDay:"Mon", fullDay: "Monday"},
        {shortDay:"Tues", fullDay: "Tuesday"},
        {shortDay:"Wed", fullDay: "Wednesday"},
        {shortDay:"Thur", fullDay: "Thursday"},
        {shortDay:"Fri", fullDay: "Friday"},
        {shortDay:"Sat", fullDay: "Saturday"},
        {shortDay:"Sun", fullDay: "Sunday"}
    ];

    let content = "<div class='calButton'><button id='calPrev' onclick='callPrev()' disabled>Prev</button> | <button id='calNext' onClick='callNext()'>Next</button></div>";

    let last, first;
    for (let i=0; i<lastDay.length; i++){
        first = new Date(lastDay[i].getFullYear(), lastDay[i].getMonth(), 1);
        // Tue Dec 01 2020 00:00:00 GMT+0000 (Greenwich Mean Time) first
        last = lastDay[i];
        // Thu Dec 31 2020 23:00:00 GMT+0000 (Greenwich Mean Time)
        let month = first.toString().split(" ")[1];
        let year = first.toString().split(" ")[3]
        content+= "<div id=Table_"+(i+1)+" class='calendarDiv'>";
        content += "<h2>"+month+" "+year+"</h2>";
        // console.log(id);
        content += "<table class='calendarTable'><tr>";
        weekDays.map(item => {
            content+= "<th>"+ item.fullDay +"</th>";
        });

        content+= "</tr>";

        let firstDate = 1;
        let endDate = parseInt(last.toString().split(" ")[2]);

        let dayNumber = 1;

        let arrayDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        let day = first.toString().split(" ")[0];

        let indexOfDay = arrayDays.indexOf(day);
        let count = 0;
        while(firstDate<= endDate){
            // console.log(count);
            if (count%7==0){
                content += "<tr>";
            }

            if (indexOfDay==0){
                content += "<td>" + firstDate + "</td>";
                count +=1;
            }
            else {
                while(indexOfDay!=0){
                    content += "<td></td>";
                    count+=1
                    indexOfDay--;
                }
                content += "<td>" + firstDate + "</td>";
                count+=1;
            }

            firstDate+=1;
            if (count==7){
                content += "</tr>";
                count = 0;
            }

            if (firstDate == endDate+1 && count!=0){
                content += "</tr>";
            }
        }
        content += "</table>";
        content += "</div>";
    }
    return content;
}

function callNext(){
    let all = document.getElementsByClassName("calendarDiv");
    document.getElementById("calPrev").disabled = false;
    show++;
    if (show <= all.length){
        for(let i =0; i< all.length; i++){
            all[i].style.display = "none";
        }
        // console.log(show);
        document.getElementById("Table_"+show).style.display = "block";
        if(show == all.length){
            document.getElementById("calNext").disabled = true;
        }
    }
}

function callPrev(){
    let all = document.getElementsByClassName("calendarDiv");
    document.getElementById("calNext").disabled = false;
    show--;
    if (show >= 1){
        for(let i =0; i< all.length; i++){
            all[i].style.display = "none";
        }
        document.getElementById("Table_"+show).style.display = "block";
        if(show == 1){
            document.getElementById("calPrev").disabled = true;
        }
    }
}
var today = new Date();
let todaysDate = today.getDate();
let todayMonth = today.getMonth()+1;
let todayYear = today.getFullYear();

let thisDate = todayYear +"/"+todayMonth+"/"+todaysDate;
console.log(thisDate);

// let nextOneYear = todayYear+1+"/"+todayMonth+"/"+todaysDate;

let contentRes = getDatesBetween(thisDate, "2022/01/01");

document.getElementById("calender").innerHTML = contentRes;