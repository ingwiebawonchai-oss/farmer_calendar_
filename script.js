let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let cmonth = month;
let year = date.getFullYear();
let cyear = year;
var calendar;
var Aused = document.querySelector('.green');
var Bused;
let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let season = {
    "ข้าวนาปี":[5,6,7,8,9],
    "ข้าวเบา":[8,9],
    "ข้าวหอมดอกมะลิ105 ออกดอก": [9],
    "ข้าวกลาง":[9,10],
    "ข้าวหนัก":[11]
};

let prop = ["ข้าวนาปี","ข้าวเบา","ข้าวหอมดอกมะลิ105 ออกดอก","ข้าวกลาง","ข้าวหนัก"]


function generateCalendar(m, y) {
    Aused.classList.toggle('used');
    Bused = document.querySelector('.green');
    Bused.classList.toggle('used');
    Aused = Bused;

    const firstDay = new Date(y, m, 1).getDay();
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    let inde = (prop.length);
    let q = 0;
    let calendarHTML = "<div id='prop'>";

    while (q < inde){
        if (season[prop[q]].includes(cmonth)){
            calendarHTML += "<span class='prop'>#"+prop[q]+"</span>";
        }
        q++;
    }

    calendarHTML += "</div>"
    
    calendarHTML += "<div class='calendar-header'>" + monthNames[m] + " " + y;
    calendarHTML += "&nbsp;&nbsp;&nbsp;<button class='btn' onclick='changeDate()'>#y</button>" + "</div>";
    calendarHTML += "<div class='calendar-navigation' style='display:flex; flex-direction: row; margin-top: 1.4vh;'>";
    calendarHTML += "<div style='flex:8;'></div><button id='preM' style='flex:1;' onclick='changeMonth(-1)'>&lt;</button><button id='nextM' style='flex:1;' onclick='changeMonth(1)'>&gt;</button></div>";
    calendarHTML += "<div class='calendar-day'>";
    calendarHTML += "<div class='calendar-day-name' style='flex:12%;'>S</div>";
    calendarHTML += "<div class='calendar-day-name' style='flex:12%;'>M</div>";
    calendarHTML += "<div class='calendar-day-name' style='flex:12%;'>T</div>";
    calendarHTML += "<div class='calendar-day-name' style='flex:12%;'>W</div>";
    calendarHTML += "<div class='calendar-day-name' style='flex:12%;'>Th</div>";
    calendarHTML += "<div class='calendar-day-name' style='flex:12%;'>F</div>";
    calendarHTML += "<div class='calendar-day-name' style='flex:12%;'>S</div>";
    calendarHTML += "<hr style='width: 100%; margin: 1.4vh 0; border-color: rgba(255, 255, 255, 0.5);'>";


    previousMonthDays = new Date(y, m, 0).getDate();


    let i = 0;
    while (i < firstDay) {
        calendarHTML += "<div class='calendar-cell firstday' style='flex:12%; justify-content: flex-start;'>" + (previousMonthDays - firstDay + i + 1).toString() + "</div>";
        i++;
    }
    for (let d = 1; d <= (Math.floor(daysInMonth / 7) * 7 - firstDay); d++) {
        if (d == day && m == month && y == year) {
            calendarHTML += "<div class='calendar-cell' id='currentday' style='flex:12%; justify-content: flex-start;'>" + d + "</div>";
        }
        else {
            calendarHTML += "<div class='calendar-cell' style='flex:12%; justify-content: flex-start;'>" + d + "</div>";
        }
    }
    calendarHTML += "</div>";
    calendar.innerHTML = calendarHTML;
}


window.addEventListener('DOMContentLoaded', () => {
    calendar = document.getElementById("calendar");
    generateCalendar(month, year);
});


//

//change date func

function changeDate() {
    let calendarHTML = "<div id='selector' style='display:flex; flex-direction:column; gap: 1.4vh;'>";
    calendarHTML += "<button id='back' onclick='goback()'>&lt;</button>";
    calendarHTML += "<input type='number' id='yearInput' placeholder='Year' value='" + year + "' max='" + year + "'></input>";
    calendarHTML += "<button onclick='updateCalendar()' id='updatebtn'>Update</button></div>";

    calendar.innerHTML = calendarHTML;
}

function goback() {
    generateCalendar(cmonth, cyear);
}

function updateCalendar() {
    cyear = document.getElementById("yearInput").value;
    generateCalendar(month, cyear);
    updateBackground();
}

//change month func

function changeMonth(direction) {
    cmonth += direction;
    if (cmonth < 0) {
        cmonth = 11;
        cyear--;
    }
    else if (cmonth > 11) {
        if (cyear == year) {
            cyear = cyear;
            cmonth = cmonth - 1;
        }
        else {
            cmonth = 0;
            cyear++;
        }
    }
    generateCalendar(cmonth, cyear);
}












//search



let data = [
    {
        name: "กข99 / หอมคลองหลง 72",
        type: "นาปรัง / นาปัง",
        Yseason: "ปลูกได้ทุกฤดู",
        Nseason: "ไม่มี",
        adv: "ปลูกง่ายขายง่ายได้กำไรไว",
        time: "115วัน"
    },
    {
        name: "ข้าวหอมมะลิ105",
        type: "นาปี",
        Yseason: "ปลูกในฤดูฝน (พ.ค. - ต.ค.)",
        Nseason: "ปลูกในฤดูแล้ง (พ.ย. - เม.ย.)",
        adv: "ทนแล้งทนดินได้หลายชนิดคุณภาพการสีดี",
        time: "120วัน"
    },
    {
        name: "กข103 / หอมชัยนาถ 72",
        type: "นาปี",
        Yseason: "ปลูกในฤดูฝน (พ.ค. - ต.ค.)",
        Nseason: "ปลูกในฤดูแล้ง (พ.ย. - เม.ย.)",
        adv: "กลิ่นหอม เนื้อสัมผัสนุ่ม ปลูกได้หลายพื้นที่ มีความต้านทานโรค",
        time: "120วัน"
    },
    {
        name: "กข111 (เจ้าพระยา72)",
        type: "นาปรัง / นาปัง",
        Yseason: "ปลูกได้ทุกฤดู",
        Nseason: "ไม่มี",
        adv: "ทนทานต่อโรคผลตอบแทนเร็ว",
        time: "100-116วัน"
    },
    {
        name: "ชัยนาถ1",
        type: "นาปรัง",
        Yseason: "ปลูกในฤดูแล้ง (พ.ย. - เม.ย.)",
        Nseason: "ปลูกในฤดูฝน (พ.ค. - ต.ค.)",
        adv: "เมล็ดยาว คุณภาพดี ผลผลิตสูง",
        time: "110วัน"
    },
    {
        name: "สุพรรณบุรี1",
        type: "นาปรัง",
        Yseason: "ปลูกในฤดูแล้ง (พ.ย. - เม.ย.)",
        Nseason: "ปลูกในฤดูฝน (พ.ค. - ต.ค.)",
        adv: "ผลผลิตสูง ต้านทานโรค ทนอากาศหนาวเย็น",
        time: "115วัน"
    },
    {
        name: "สุพรรณบุรี3",
        type: "นาปรัง",
        Yseason: "ปลูกในฤดูแล้ง (พ.ย. - เม.ย.)",
        Nseason: "ปลูกในฤดูฝน (พ.ค. - ต.ค.)",
        adv: "ผลผลิตสูง ต้านทานโรค ทนอากาศหนาวเย็น",
        time: "110วัน"
    },
    {
        name: "พิษณุโลก2",
        type: "นาปรัง",
        Yseason: "ปลูกในฤดูแล้ง (พ.ย. - เม.ย.)",
        Nseason: "ปลูกในฤดูฝน (พ.ค. - ต.ค.)",
        adv: "ผลผลิตสูง เมล็ดยาว คุณภาพดี",
        time: "105-110วัน"
    },
    {
        name: "ปทุมธานี1",
        type: "นาปรัง",
        Yseason: "ปลูกในฤดูแล้ง (พ.ย. - เม.ย.)",
        Nseason: "ปลูกในฤดูฝน (พ.ค. - ต.ค.)",
        adv: "มีกลิ่นหอม ต้านทานโรค",
        time: "105-110วัน"
    },
    {
        name: "กข29(ชัยนาถ80)",
        type: "นาปรัง",
        Yseason: "ปลูกในฤดูแล้ง (พ.ย. - เม.ย.)",
        Nseason: "ปลูกในฤดูฝน (พ.ค. - ต.ค.)",
        adv: "อายุสั้น ผลผลิตสูง ต้นแข็งไม่ล้ม",
        time: "95-105วัน"
    },
    {
        name: "กข31(ปทุมธานี80)",
        type: "นาปรัง",
        Yseason: "ปลูกในฤดูแล้ง (พ.ย. - เม.ย.)",
        Nseason: "ปลูกในฤดูฝน (พ.ค. - ต.ค.)",
        adv: "ต้านทานโรค ผลผลิตสูง",
        time: "110วัน"
    },
    {
        name: "สันป่าตอง1",
        type: "นาปรัง",
        Yseason: "ปลูกในฤดูแล้ง (พ.ย. - เม.ย.)",
        Nseason: "ปลูกในฤดูฝน (พ.ค. - ต.ค.)",
        adv: "ผลผลิตสูง ต้านทานโรคไหม้ และโรคขอบใบแห้ง",
        time: "120-125วัน"
    },
    {
        name: "กข15",
        type: "นาปรัง",
        Yseason: "ปลูกในฤดูแล้ง (พ.ย. - เม.ย.)",
        Nseason: "ปลูกในฤดูฝน (พ.ค. - ต.ค.)",
        adv: "มีกลิ่นหอม อายุเบา ทนแล้ง",
        time: "100วัน"
    },
    {
        name: "ปทุมธานี1",
        type: "นาปรัง",
        Yseason: "ปลูกในฤดูแล้ง (พ.ย. - เม.ย.)",
        Nseason: "ปลูกในฤดูฝน (พ.ค. - ต.ค.)",
        adv: "มีกลิ่นหอม ต้านทานโรค",
        time: "110-115วัน"
    },
    {
        name: "พิษณุโลก3",
        type: "นาปรัง",
        Yseason: "ปลูกในฤดูแล้ง (พ.ย. - เม.ย.)",
        Nseason: "ปลูกในฤดูฝน (พ.ค. - ต.ค.)",
        adv: "ผลผลิตสูง คุณภาพการสีดี ต้นแข็ง ไม่ล้มง่าย ข้าวสุกนุ่ม",
        time: "150วัน"
    },
];



let x ;

let searchHTML;
let currentindex;

function searchs() {
    Aused.classList.toggle('used');
    Bused = document.querySelector('.blue');
    Bused.classList.toggle('used');
    Aused = Bused;

    searchHTML = "<div id='search'>"
    searchHTML = "<span id='topic'>พันธ์ุข้าวที่ต้องการค้นหา</span>"
    searchHTML += "<input type='search' id='engine' placeholder='Search' name='engine' list='s'>"
    searchHTML += "<datalist id='s'>"
    for (let l = 0; l < data.length - 1; l++) {
        searchHTML += "<option value='" + data[l]["name"] + "'>" + data[l]["name"] + "</option>";
    }
    
    searchHTML += "</datalist>"
    searchHTML += "<button class='searchbtn' onclick='check()'>&check;</button>";
    searchHTML += "</div>"
    calendar.innerHTML = searchHTML;

    var inputField = document.getElementById("engine");
    var searchbtn = document.querySelector('.searchbtn');

    
    inputField.addEventListener("input", function (event) {
        const currentInputValue = event.target.value;

        for (let e = 0; e < data.length - 1; e++) {
            if (currentInputValue == data[e]["name"]) {
                searchbtn.classList.toggle("okay");
                x = e+1;
                break
            }
            else{
                searchbtn.classList.remove("okay");
            }
        }

    });
}

function check() {
    var inputField = document.getElementById("engine");
    var searchbtn = document.querySelector('.searchbtn');
    let inputvalue = inputField.value;
    if (searchbtn.classList.contains('okay')){
        searchHTML = "<div id='info'>";
        searchHTML += "<div class='a'><button id='back2' onclick='searchs()'>&lt;</button>";
        searchHTML += "<span id='topic'>"+inputvalue+"</span></div>";
        searchHTML += "<img id='image' src='rice/"+(x).toString()+".jpg' />";
        searchHTML += "<div id='column1'>";
        searchHTML += "<p><span class='bold' style='flex:1'>ประเภท:</span>"+data[x-1]["type"]+"</p>";
        searchHTML += "<p><span class='bold' style='flex:1'>ฤดูที่ควรปลูก:</span>"+data[x-1]["Yseason"]+"</p>";
        searchHTML += "<p><span class='bold' style='flex:1.5'>ฤดูที่ไม่ควรปลูก:</span>"+data[x-1]["Nseason"]+"</p>";
        searchHTML += "<p><span class='bold' style='flex:2'>ข้อดี:</span>"+data[x-1]["adv"]+"</p>";
        searchHTML += "<p><span class='bold' style='flex:2'>ระยะเวลาปลูก:</span>"+data[x-1]["time"]+"</p>";
        searchHTML += "</div>";
        searchHTML += "</div>";
        calendar.innerHTML = searchHTML;
    }
}




//credit
let creditHTML = ""

function credit() {
    Aused.classList.toggle('used');
    Bused = document.querySelector('.yellow');
    Bused.classList.toggle('used');
    Aused = Bused;

    creditHTML = "<span id='topic'>Credit</span><br>";
    creditHTML += "<span id='a'>ด.ญ. รัชฎากรณ์ นิลรอด ม.3/16 เลขที่ 27</span><br>";
    creditHTML += "<span id='a'>ด.ญ. อิงวี่ บวรชัย ม.3/16 เลขที่ 29</span>";

    calendar.innerHTML = creditHTML;
}