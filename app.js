const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbarMenu');
const url = "http://ergast.com/api/f1/${year}/driverStandings.json"; //appends .json to format response as jsom instead of xml

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

async function renderCurrentStanding() { //working
    const response = await fetch ("http://ergast.com/api/f1/current/driverStandings.json")
    const json = await response.json();
    driverArr = json.MRData.StandingsTable.StandingsLists[0].DriverStandings;

    let table = document.querySelector("tbody#results");
    table.innerHTML = ""; //clears table

    for (let driver of driverArr) {
        let row = document.createElement("tr");
        let driver_cell = document.createElement("td");
        driver_cell.innerText = `${driver.Driver.givenName} ${driver.Driver.familyName}`;
        let company_cell = document.createElement("td");
        company_cell.innerText = `${driver.Constructors[0].name}`;
        let points_cell = document.createElement("td");
        points_cell.innerText = `${driver.points}`;

        row.appendChild(driver_cell);
        row.appendChild(company_cell);
        row.appendChild(points_cell);
        table.appendChild(row);
    }
}

async function renderStandingByYear() { //working
    let year = document.querySelector("select#yearSelected").value;

    const url = "http://ergast.com/api/f1/" + year + "/driverStandings.json";
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    driverArr = json.MRData.StandingsTable.StandingsLists[0].DriverStandings;

    let table = document.querySelector("tbody#results");
    table.innerHTML = ""; //clears table

    for (let driver of driverArr) {
        let row = document.createElement("tr");
        let driver_cell = document.createElement("td");
        driver_cell.innerText = `${driver.Driver.givenName} ${driver.Driver.familyName}`;
        let company_cell = document.createElement("td");
        company_cell.innerText = `${driver.Constructors[0].name}`;
        let points_cell = document.createElement("td");
        points_cell.innerText = `${driver.points}`;

        row.appendChild(driver_cell);
        row.appendChild(company_cell);
        row.appendChild(points_cell);
        table.appendChild(row);
    }
}

async function renderMostRecentRaceStanding() { //working??
    const response = await fetch("http://ergast.com/api/f1/current/last/results.json");
    const json = await response.json();
    driverArr = json.MRData.RaceTable.Races[0].Results;
    circut = json.MRData.RaceTable.Races[0].Circuit;
    
    //render points table
    let table = document.querySelector("tbody#results");
    table.innerHTML = ""; //clears table

    for (let driver of driverArr) {
        let row = document.createElement("tr");
        let driver_cell = document.createElement("td");
        driver_cell.innerText = `${driver.Driver.givenName} ${driver.Driver.familyName}`;
        let company_cell = document.createElement("td");
        company_cell.innerText = `${driver.Constructor.name}`;
        let points_cell = document.createElement("td");
        points_cell.innerText = `${driver.Time.time}`;

        row.appendChild(driver_cell);
        row.appendChild(company_cell);
        row.appendChild(points_cell);
        table.appendChild(row);
    }

    //render circut name
    let target = document.querySelector("div#circuit-info");
    target.innerHTML = ""; //clears data
    let circuitInfo = document.createElement("h1");
    circuitInfo.innerText = `${circut.circuitName} in ${circut.Location.locality}, ${circut.Location.country}`
    target.appendChild(circuitInfo);
}

renderCurrentStanding();